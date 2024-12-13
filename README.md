# AI-Summariser-And-Translator
### Video Demo: https://youtu.be/IcDxIcksdZg
#### Description: This is a chrome extension, that uses OPEN AI API to translate ans summarise text as per user requirment

The AI Summarizer and Translator is a web-based application that combines text summarization and translation capabilities powered by OpenAI's GPT-4 API. Users can input lengthy text and choose to:

Summarize the text.
Translate the text into their desired language.
Generate a summary and translate it into a preferred language.
This tool is designed for students, professionals, and content creators, helping them quickly process information while overcoming language barriers.

Features
1. Text Summarization
Extracts the key points from lengthy text, providing a concise and coherent summary.

2. Translation
Translates the original text or the generated summary into supported languages, including:

Spanish
French
German
Chinese
Hindi

3. Combined Summarization and Translation
Allows users to generate summaries directly in their preferred language, saving time and effort.

4. User Options
Summarize only: Generates a summary of the input text.
Translate only: Translates the input text into a selected language.
Summarize and Translate: Summarizes the text first and then translates the summary.
How It Works
User Input: Users enter text, select a language, and choose an action (summarize, translate, or both).
API Integration: The app sends a request to OpenAI's GPT-4 API with dynamically crafted prompts.
Processing: The API processes the input and generates a response (summary, translation, or both).
Output: The results are displayed in a user-friendly interface for easy copying or reference.
Tech Stack
Frontend: HTML, CSS, JavaScript
API: OpenAI's GPT-4 API for natural language processing
Design: Responsive and user-friendly interface with polished styling
How to Run the Project
Clone the Repository:

bash
Copy code
git clone https://github.com/Avi161/AI-Summariser-and-Translator.git
cd AI-Summariser-and-Translator
Set Up OpenAI API:

Obtain your API key from the OpenAI API Keys page.
Replace YOUR_API_KEY in script.js with your actual API key.
Open the Project:

Simply open index.html in your browser to use the application.
Use Cases
Education: Summarize research papers or translate them for better understanding.
Business: Translate documents and generate concise summaries for team discussions.
Content Creation: Generate summaries for blog posts or translate them for global audiences.
Personal Use: Simplify complex content and translate it into a native language.
Challenges and Solutions
Challenges:
Securing the API key in a frontend-only implementation.
Crafting effective prompts for summarization and translation.
Designing an intuitive and responsive user interface.
Solutions:
A backend can be integrated in future iterations to secure the API key.
Dynamic prompt generation ensures accurate and context-aware outputs.
Modern CSS and JavaScript ensure a clean and functional design.
Future Enhancements
Backend Integration: To secure API keys and manage usage efficiently.
File Upload Support: Allow users to upload files for bulk processing.
Expanded Language Options: Include more languages based on user demand.
Mobile Compatibility: Optimize the app for mobile devices and smaller screens.
Screenshots
Main Interface

A user-friendly interface with input options for summarization and translation.

Contributing
We welcome contributions to improve the project! Feel free to fork the repository, make changes, and submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
OpenAI for providing the GPT-4 API.
Inspiration for combining summarization and translation in a single tool.
