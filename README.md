<<<<<<< HEAD
# Greeting Card Generator

A simple React application that allows users to create and download custom greeting cards with personalized messages and images.

## Features
- Upload an image as a background
- Add custom text (Dear, Message, From)
- Live preview of the greeting card
- Download the final card as an image
- Responsive design with Tailwind CSS

## Tech Stack
- **React** (with TypeScript)
- **Vite** (for fast development)
- **react-konva** (for canvas-based rendering)
- **Tailwind CSS** (for styling)
- **Vitest** & **@testing-library/react** (for unit testing)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/greeting-card-generator.git
   cd greeting-card-generator
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
1. Upload an image by clicking on the "Browse File" button or drag and drop an image.
2. Fill in the text fields (Dear, Message, From).
3. See the live preview of your greeting card.
4. Click the "Download Greeting Card" button to save it as an image.

## Testing
Run unit tests using Vitest:
```sh
npm run test
```
To run tests with UI:
```sh
npx vitest --ui
```

## Project Structure
```
📦 greeting-card-generator
├── 📂 src
│   ├── 📂 components
│   │   ├── ImageBrowser.tsx
│   │   ├── Preview.tsx
│   │   ├── TextInput.tsx
│   ├── 📂 __tests__
│   │   ├── GreetingCard.test.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── vite-env.d.ts
├── 📜 package.json
├── 📜 tsconfig.json
├── 📜 vite.config.ts
├── 📜 tailwind.config.js
├── 📜 README.md
```

## Author
[Julian Mindria](https://github.com/julianmindria)

---

Feel free to update this README with additional details specific to your project!

=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
>>>>>>> 8deb0ce (Initial commit)
