# Minimalist AI Portfolio

A high-end, minimalist portfolio website powered by React, TypeScript, and Google Gemini AI.

## Getting Started

To run this project locally on your device:

### 1. Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 2. Installation

Create a new project using Vite (recommended for React/TypeScript):

```bash
npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
npm install
```

### 3. Dependencies

Install the required packages:

```bash
npm install lucide-react react-router-dom @google/genai
```

Tailwind CSS setup is required. Follow the [Tailwind Vite Guide](https://tailwindcss.com/docs/guides/vite).

### 4. Configuration

To use the AI features, you need a Google Gemini API Key.
Create a `.env` file in the root of your project:

```
VITE_API_KEY=your_actual_api_key_here
```

**Note:** You will need to update `services/geminiService.ts` to use `import.meta.env.VITE_API_KEY` instead of `process.env.API_KEY` when running with Vite.

### 5. Running the App

```bash
npm run dev
```

## Structure

- `pages/`: Route components (Home, Services, Contact)
- `components/`: Reusable UI components (Navbar, Footer, ChatWidget)
- `services/`: API integration logic
