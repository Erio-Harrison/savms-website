# SAVMS Official Website

The official website of the Smart Autonomous Vehicle Management System (SAVMS), built using Next.js and Tailwind CSS.

## Project Overview

SAVMS is a next-generation intelligent vehicle management platform that integrates data collection, fault prediction, energy optimization, and safety management, making your fleet management smarter, safer, and more efficient.

## Tech Stack

- **Next.js 15+**: React framework providing server-side rendering and static generation
- **React 19+**: User interface library
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library

## Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd savms-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deploy to Vercel

### Automatic Deployment

1. Create an account on [Vercel](https://vercel.com) and connect your GitHub repository
2. Click "Import Project" and select your GitHub repository
3. Keep the default settings and click "Deploy"

### Manual Deployment

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Log in to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── page.tsx     # Homepage
│   │   ├── layout.tsx   # Root layout
│   │   └── globals.css  # Global styles
│   ├── components/      # Components
│   └── styles/          # Additional styles
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Project dependencies
```

## Customization

- **Color Theme**: Edit the color variables in `tailwind.config.js` and `src/app/globals.css`
- **Content**: Modify the text content in each component
- **Images**: Replace the images in the `public` directory

## Main Project Repository

SAVMS main project repository: [https://github.com/Erio-Harrison/SAVMS](https://github.com/Erio-Harrison/SAVMS)

## Contact Us

- Email: u7541840@gmail.com
- GitHub: [https://github.com/Erio-Harrison/SAVMS](https://github.com/Erio-Harrison/SAVMS)

## License

MIT
