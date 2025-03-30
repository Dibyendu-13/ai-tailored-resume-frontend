# ✨ AI Resume Tailor - Frontend

This is the frontend of the **AI Resume Tailor** app, a tool that lets users automatically tailor their resumes to any job description using AI.

## 🌐 Live Demo

Check out the live app: [https://ai-tailored-resume.netlify.app/](https://ai-tailored-resume.netlify.app/)

## 🖥️ Features

- Upload a resume as a PDF or paste it directly.
- Paste a job description.
- Get a tailored resume powered by OpenAI's GPT model.
- Beautiful, responsive UI built with React and styled-components.

## ⚙️ Tech Stack

- React
- Styled-components
- Axios
- OpenAI API (via backend)

## 🚀 Getting Started

### 1. Clone the repository
ai-tailored-resume-frontend
```bash
git clone https://github.com/Dibyendu-13/ai-resume-tailor-frontend.git
cd ai-resume-tailor-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

This starts the app on [http://localhost:3000](http://localhost:3000)

## 🛠️ Project Structure

```
src/
├── components/
│   └── UploadForm.jsx
├── App.jsx
└── main.jsx
```

## 📦 Deployment

This app can be deployed on platforms like Vercel, Netlify, or any static hosting service.

Make sure your backend API is deployed and update API URLs inside `UploadForm.jsx` accordingly.

## 🧠 Backend API

Ensure your backend is running and deployed. The frontend expects the following endpoints:

- `POST /api/upload` – accepts a PDF file and returns extracted text
- `POST /api/tailor` – accepts resume text + job description and returns a tailored resume

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

## 📄 License

MIT
