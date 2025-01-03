import sys
import warnings
import os
from dotenv import load_dotenv
from crew import ContentWriterResercher
import logging

# Configure logging
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout)
    ]
)

logger = logging.getLogger(__name__)

warnings.filterwarnings("ignore", category=SyntaxWarning, module="pysbd")
load_dotenv()

def run():
    """
    Run the crew.
    """
    logger.info("Starting the crew...")
    inputs = {
        'topic': 'AI LLMs'
    }
    logger.debug(f"Inputs: {inputs}")
    try:
        crew_instance = ContentWriterResercher()
        logger.info("Initialized ContentWriterResercher")
        crew_instance.crew().kickoff(inputs=inputs)
        logger.info("Kickoff completed successfully.")
    except Exception as e:
        logger.error(f"An error occurred: {e}", exc_info=True)

if __name__ == "__main__":
    run()
