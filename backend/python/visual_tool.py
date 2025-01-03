from PIL import Image
import io
import os
import requests
from crewai.tools import BaseTool
from pydantic import BaseModel, Field
from typing import Optional
from dotenv import load_dotenv
load_dotenv()

HF_API_KEY = os.getenv("HF_API_KEY")


pip show pydantic  # Verify version

class ImageGenerationInput(BaseModel):
    """Input schema for Image Generation Tool."""
    prompt: str = Field(
        ..., 
        description="The description of the image you want to generate"
    )
    negative_prompt: Optional[str] = Field(
        default="blurry, bad quality, distorted", 
        description="What you don't want to see in the image"
    )

class VisualTool(BaseTool):
    name: str = "Image Generation Tool"
    description: str = """
    A tool that generates images using Stable Diffusion AI model.
    Useful for creating visual content based on text descriptions.
    The tool will save the generated image and return the path to the saved file.
    """
    args_schema: type[BaseModel] = ImageGenerationInput

    def __init__(self):
        super().__init__()
        os.makedirs("outputs", exist_ok=True)

    def _run(self, prompt: str, negative_prompt: Optional[str] = None) -> str:
        """Generate visual content based on the prompt"""
        try:
            print(f"Creating image for prompt: {prompt}")
            API_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0"
            headers = {"Authorization": f"Bearer {HF_API_KEY}"}
            
            payload = {
                "inputs": prompt,
                "parameters": {
                    "negative_prompt": negative_prompt,
                    "num_inference_steps": 30,
                    "guidance_scale": 7.5,
                }
            }
            
            response = requests.post(
                API_URL,
                headers=headers,
                json=payload
            )
            
            if response.status_code != 200:
                raise Exception(f"API request failed with status code: {response.status_code}")
            
            # Create a safe filename from the prompt
            safe_name = "".join(x for x in prompt.split()[0] if x.isalnum())
            output_path = f"outputs/generate_{safe_name}.jpg"
            
            # Save the image
            with open(output_path, "wb") as f:
                f.write(response.content)
            
            return f"Successfully generated and saved image at: {output_path}"
            
        except Exception as e:
            print(f"Error occurred: {str(e)}")
            return f"Error generating visual content: {str(e)}"

    def cache_function(self, args, result):
        """Custom caching mechanism"""
        # Only cache successful generations
        return "Successfully generated" in result

# # Example usage
# if __name__ == "__main__":
#     visual_tool = VisualTool()
    
#     # Test with different prompts
#     prompts = [
#         "A beautiful sunset over mountains and a board that says 'The World is Beautiful'",
#     ]
    
#     for prompt in prompts:
#         result = visual_tool._run(
#             prompt=prompt,
#             negative_prompt="blurry, bad quality, distorted"
#         )
#         print(result)
