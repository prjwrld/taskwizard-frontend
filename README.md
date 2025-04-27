🎯 TaskWizard – Frontend

TaskWizard is a smart task breakdown assistant powered by a FastAPI backend and a local LLM (TinyLlama / Llama3.2 via Ollama).

This repository contains the frontend — built with Expo and React Native, providing a clean, simple, and mobile-friendly UI.

📡 This app connects to the TaskWizard Server to generate step-by-step roadmaps from any goal you enter.

⸻

🚀 Quick Start

1. Clone this repository
   git clone https://github.com/prjwrld/taskwizard-frontend.git
   cd taskwizard-frontend

2. Install dependencies
  ```
npm install
```

3. Start the development server
   npx expo start

You’ll get options to open the app in:
	•	📱 Expo Go on your phone
	•	🖥️ Android Emulator
	•	🍏 iOS Simulator
	•	🌐 Web browser

 🛠️ Project Structure
 TaskWizardApp/
 ├── app/              # App routing and screens
 ├── assets/           # Images, fonts, icons
 ├── components/       # Reusable UI components
 ├── constants/        # API base URLs, color schemes
 ├── hooks/            # Custom React hooks
 ├── scripts/          # Helper scripts
 ├── App.js            # Main app entry point
 ├── package.json      # Project metadata
 ├── README.md         # Project documentation

 
⸻

🌐 API Integration

By default, this app connects to a locally running server at: export const API_BASE = "http://localhost:8000";

✅ To connect to your deployed backend (example: Render or Railway), update your API base URL in constants/ folder.

Example: export const API_BASE = "https://taskwizard-server.onrender.com";

📚 Learn More
	•	Expo Documentation
	•	React Native Docs
	•	FastAPI Docs

⸻

🤝 Contributing

Contributions are welcome! Feel free to:
	•	🐛 Open issues for bugs
	•	💡 Suggest new features
	•	📜 Improve documentation

⸻

⚡ Related Projects
	•	TaskWizard Server — FastAPI + Ollama backend API

⸻

📜 License

This project is licensed under the MIT License — see the LICENSE file for details.

⸻

💬 Final Note:

TaskWizard is designed to help you turn dreams into clear actions — step-by-step, powered by smart AI 🧠✨.
Made with ❤️ by Prajwal.




