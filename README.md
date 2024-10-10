# x-ui-url-scanner

x-ui-url-scanner is a web application designed to scan and test XUI panel URLs. It provides a user-friendly interface for uploading or manually entering URLs, scanning them, and saving the results.

## Features

- Upload a text file containing URLs
- Manually input URLs
- Scan multiple URLs simultaneously
- Display real-time scanning results
- Save successful scan results to a file

## Technology Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- Lucide React (for icons)

## Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/x-ui-url-scanner.git
   cd x-ui-url-scanner
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

## Usage

1. Start the development server:

   ```
   npm run dev
   ```

   or

   ```
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:5173` (or the port specified in the console output).

3. Use the application:
   - Upload a text file containing URLs (one per line) using the "Upload File" button.
   - Or manually enter URLs in the textarea, one per line.
   - Click "Start Scanning" to begin the scanning process.
   - View the results in real-time as they appear in the "Results" section.
   - Once scanning is complete, click "Save Results" to download a text file containing the successful URLs.

## Project Structure

- `src/App.tsx`: Main application component
- `src/xui.js`: Contains the XUI scanning logic
- `src/main.tsx`: Entry point of the application
- `src/index.css`: Global styles (Tailwind CSS)
- `public/`: Static assets
- `vite.config.ts`: Vite configuration file
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`, `tsconfig.node.json`, `tsconfig.app.json`: TypeScript configuration files
- `eslint.config.js`: ESLint configuration

## Scripts

- `npm run dev` or `yarn dev`: Start the development server
- `npm run build` or `yarn build`: Build the production-ready application
- `npm run lint` or `yarn lint`: Run ESLint to check for code quality issues
- `npm run preview` or `yarn preview`: Preview the built application locally

## Warning

This application performs real HTTP requests to the provided URLs. Use responsibly and only scan URLs you have permission to test.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
