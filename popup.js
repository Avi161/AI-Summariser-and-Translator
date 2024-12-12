import { YOUR_API_KEY } from './creds.js';

document.addEventListener('DOMContentLoaded', () => {
    const processBtn = document.getElementById('processBtn');
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const languageSelect = document.getElementById('languageSelect');
    const actionRadios = document.getElementsByName('action');

    processBtn.addEventListener('click', async () => {
        const text = inputText.value.trim();
        const language = languageSelect.value;
        const selectedAction = Array.from(actionRadios).find(radio => radio.checked)?.value;

        if (!text) {
            outputText.value = "Please enter text to process.";
            return;
        }

        if (selectedAction !== 'summary' && !language) {
            outputText.value = "Please select a language for translation.";
            return;
        }

        outputText.value = "Processing...";

        try {
            let messages = [];

            if (selectedAction === 'summary') {
                messages.push({ role: "user", content: `Please summarize the following text: ${text}` });
            } else if (selectedAction === 'translate') {
                messages.push({ role: "user", content: `Please translate the following text into ${getLanguageName(language)}: ${text}` });
            } else if (selectedAction === 'summaryAndTranslate') {
                messages.push({ role: "user", content: `Please summarize the following text: ${text}` });
                messages.push({ role: "user", content: `Now translate the summary into ${getLanguageName(language)}.` });
            }

            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${YOUR_API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-4",
                    messages: messages
                })
            });

            if (!response.ok) {
                const errorDetails = await response.json();
                console.error("API Error Details:", errorDetails);
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            outputText.value = data.choices[0].message.content;
        } catch (error) {
            outputText.value = `Error: ${error.message}`;
            console.error('Error:', error);
        }
    });

    function getLanguageName(code) {
        const languages = {
            es: "Spanish",
            fr: "French",
            de: "German",
            zh: "Chinese",
            hi: "Hindi"
        };
        return languages[code] || "the selected language";
    }
});
