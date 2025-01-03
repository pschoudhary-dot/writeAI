
# WRITEAI

![image](https://github.com/user-attachments/assets/87e4f4dd-2444-4fbb-9947-6c80886c3cd4)
<!-- Replace with your actual logo URL -->

WRITEAI is an advanced AI-powered content creation platform designed to streamline the entire content development process. From in-depth research and content generation to visual content creation, SEO analysis, and editorial assistance, WRITEAI leverages cutting-edge machine learning models and intelligent tools to empower users to produce high-quality, engaging content efficiently and effectively.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Configuration](#configuration)
  - [.env File](#env-file)
- [Usage](#usage)
  - [Running the Backend](#running-the-backend)
  - [Running the Frontend](#running-the-frontend)
- [Dependencies](#dependencies)
  - [Backend Dependencies](#backend-dependencies)
  - [Frontend Dependencies](#frontend-dependencies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **AI Researcher:** Conducts comprehensive research on specified topics, gathering and summarizing relevant information.
- **Content Creator:** Generates initial drafts of content based on research insights and predefined templates.
- **Visual Content Creator:** Utilizes AI models to generate high-quality visual content, including images and infographics.
- **SEO Analyst:** Analyzes and optimizes content for search engine performance, ensuring higher visibility and traffic.
- **Editorial Assistant:** Reviews and refines content to enhance quality, coherence, and adherence to editorial standards.
- **User-Friendly Dashboard:** Intuitive interface for managing and monitoring content creation workflows.
- **Integration with External Tools:** Seamlessly integrates with various APIs and tools for enhanced functionality.

## Project Structure

```
WRITEAI
├── .bolt/
├── backend/
│   ├── .env
│   ├── agents.yaml
│   ├── crew.py
│   ├── main.py
│   ├── tasks.yaml
│   ├── tool.py
│   └── visual_tool.py
├── node_modules/
├── src/
│   ├── components/
│   │   ├── ChatMessages.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── FloatingElement.tsx
│   │   ├── Navbar.tsx
│   │   ├── Auth.tsx
│   │   ├── Dashboard.tsx
│   │   └── LandingPage.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── Readme.md
│   ├── tailwind.config.js
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── Readme.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
```

### Backend Directory (`backend/`)

- **.env:** Environment variables configuration file. Contains sensitive information like API keys.
- **agents.yaml:** Configuration file for defining AI agents used in the content creation process.
- **crew.py:** Defines the `ContentWriterResercher` class, managing AI agents and tasks.
- **main.py:** Entry point for running the backend processes.
- **tasks.yaml:** Configuration file for various tasks performed by AI agents.
- **tool.py:** Defines and initializes tools used by AI agents (e.g., search, web scraping).
- **visual_tool.py:** Defines the `VisualTool` class for image generation using AI models.

### Frontend Directory (`src/`)

- **components/:** Contains React components for the user interface.
  - **ChatMessages.tsx:** Handles chat message display and interactions.
  - **CustomCursor.tsx:** Custom cursor implementation for enhanced UX.
  - **FloatingElement.tsx:** UI elements that float on the screen.
  - **Navbar.tsx:** Navigation bar component.
  - **Auth.tsx:** Authentication component for user login/signup.
  - **Dashboard.tsx:** Main dashboard interface for managing content.
  - **LandingPage.tsx:** Landing page component.
- **App.tsx:** Main application component.
- **index.css:** Global CSS styles.
- **main.tsx:** Frontend entry point.
- **vite-env.d.ts:** TypeScript declarations for Vite.
- **index.html:** HTML template.
- **package-lock.json & package.json:** Node.js dependencies and scripts.
- **postcss.config.js:** PostCSS configuration.
- **tailwind.config.js:** Tailwind CSS configuration.
- **tsconfig.json:** TypeScript configuration.
- **vite.config.ts:** Vite build tool configuration.

## Prerequisites

Before setting up WRITEAI, ensure you have the following installed on your system:

- **Python 3.8+**
- **Node.js 14+ and npm**
- **Git**
- **Virtual Environment Tool:** `venv` (comes with Python) or `virtualenv`
- **Anaconda (optional):** For managing Python environments.

## Installation

### Backend Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/WRITEAI.git
   cd WRITEAI/backend
   ```

2. **Create and Activate a Virtual Environment:**

   ```bash
   # Using venv
   python -m venv myenv
   source myenv/bin/activate  # On Windows: myenv\Scripts\activate
   ```

3. **Install Python Dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

   *Note: Ensure that the `requirements.txt` file includes all necessary backend dependencies.*

### Frontend Setup

1. **Navigate to the Frontend Directory:**

   ```bash
   cd ../src
   ```

2. **Install Node.js Dependencies:**

   ```bash
   npm install
   ```

## Configuration

### .env File

The `.env` file in the `backend/` directory holds sensitive environment variables required for the application to function correctly. Ensure that this file includes all necessary API keys and configuration settings.

**Example `.env` File:**

```env
MODEL=<your_model> we are using gemini
GEMINI_API_KEY=<your_key>
SERPER_API_KEY=<your_key>
HF_API_KEY=<your_key>
# Add other necessary keys here
```

*Ensure that you replace placeholder values with your actual API keys and configuration details.*

**Security Note:** The `.env` file is included in `.gitignore` to prevent sensitive information from being pushed to version control. Do not share this file publicly.

## Usage

### Running the Backend

1. **Ensure the Virtual Environment is Activated:**

   ```bash
   source myenv/bin/activate  # On Windows: myenv\Scripts\activate
   ```

2. **Run the Backend Script:**

   ```bash
   python main.py
   ```

   This will start the backend processes, initializing AI agents and tasks as defined in the configuration files.

### Running the Frontend

1. **Navigate to the Frontend Directory:**

   ```bash
   cd ../src
   ```

2. **Start the Development Server:**

   ```bash
   npm run dev
   ```

   This will launch the frontend application, typically accessible at `http://localhost:3000` or the port specified by Vite.

## Dependencies

### Backend Dependencies

- **Python Packages:**
  - `crewai`
  - `crewai-tools`
  - `pydantic==2.10.4`
  - `python-dotenv`
  - `requests`
  - `Pillow`
  - *(Additional dependencies as listed in `requirements.txt`)*

### Frontend Dependencies

- **Node.js Packages:**
  - `react`
  - `react-dom`
  - `typescript`
  - `vite`
  - `tailwindcss`
  - `postcss`
  - `autoprefixer`
  - *(Additional dependencies as listed in `package.json`)*

## Contributing

Contributions are welcome! If you'd like to contribute to WRITEAI, please follow these steps:

1. **Fork the Repository:**

   Click the "Fork" button at the top right of the repository page to create your own fork.

2. **Clone Your Fork:**

   ```bash
   git clone https://github.com/your-username/WRITEAI.git
   cd WRITEAI
   ```

3. **Create a New Branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes:**

   Implement your feature or bug fix.

5. **Commit Your Changes:**

   ```bash
   git commit -m "Add your descriptive commit message"
   ```

6. **Push to Your Fork:**

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request:**

   Navigate to the original repository and create a pull request from your fork's branch.

**Please ensure that your code adheres to the project's coding standards and includes appropriate tests where necessary.**

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software as per the terms of the license.

## Contact

For any inquiries, suggestions, or support, please reach out to:

- **Email:** your-email@example.com
- **GitHub:** [your-username](https://github.com/your-username)
- **LinkedIn:** [Your LinkedIn Profile](https://www.linkedin.com/in/your-profile)

---

**Disclaimer:** Replace placeholder URLs, email addresses, and other personal information with your actual details before publishing the README.
