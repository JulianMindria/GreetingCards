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

