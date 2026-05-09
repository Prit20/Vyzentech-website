# Setup Instructions for Windows, macOS, and Linux

## Prerequisites: Install Node.js and npm

Before you can run this project, you need to have Node.js and npm installed on your system.

### macOS

**Option 1: Using Homebrew (Recommended)**
```bash
# Install Homebrew if not already installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js (includes npm)
brew install node

# Verify installation
node --version
npm --version
```

**Option 2: Direct Download**
1. Visit https://nodejs.org/
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the prompts
4. Restart your terminal/command prompt

### Windows

1. Visit https://nodejs.org/
2. Download the LTS version for Windows
3. Run the installer
4. Follow the installation wizard (keep default settings)
5. Restart your computer
6. Open Command Prompt or PowerShell and verify:
   ```bash
   node --version
   npm --version
   ```

### Linux (Ubuntu/Debian)

```bash
# Update package manager
sudo apt update

# Install Node.js (includes npm)
sudo apt install nodejs npm

# Verify installation
node --version
npm --version
```

## Project Setup

Once Node.js and npm are installed, follow these steps:

### 1. Navigate to Project Directory
```bash
cd /Users/meet/Website
# On Windows: cd C:\Users\meet\Website
```

### 2. Install Dependencies
```bash
npm install
```

This will install all required packages:
- Next.js 15
- React 19
- Tailwind CSS
- Lucide Icons
- TypeScript

### 3. Start Development Server
```bash
npm run dev
```

The output will show:
```
> next dev

  ▲ Next.js 15.0.0
  - ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

### 4. Open in Browser
Navigate to: **http://localhost:3000**

You should see the full website with:
- Header with contact info and social icons
- Navigation bar with hamburger menu
- Hero section
- Services section
- All other sections loaded

## Available npm Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Run linting (if configured)
npm run lint
```

## Troubleshooting

### Issue: "npm: command not found"
- **Solution**: Ensure Node.js is properly installed. Try restarting your terminal after installation.

### Issue: "Port 3000 already in use"
- **Solution**: Change the port with: `npm run dev -- -p 3001`

### Issue: Build errors or missing dependencies
- **Solution**: Clear npm cache and reinstall:
  ```bash
  npm cache clean --force
  rm -rf node_modules package-lock.json
  npm install
  ```

### Issue: Module not found errors
- **Solution**: Ensure all dependencies are installed: `npm install`

## Performance Tips

1. **Faster Builds**: Use `pnpm` or `yarn` instead of npm
   ```bash
   npm install -g pnpm
   pnpm install
   pnpm run dev
   ```

2. **Enable Corepack** (Node 16.13+):
   ```bash
   corepack enable
   ```

## Next Steps

After the project is running:

1. **Customize Content**: Edit components in `/components` directory
2. **Change Colors**: Update `tailwind.config.js`
3. **Add Images**: Replace placeholder gradients with actual images
4. **Deploy**: Deploy to Vercel, Netlify, or any static hosting

## System Requirements

- Node.js 18.0 or higher
- npm 9.0 or higher (included with Node.js)
- 500MB free disk space
- Modern web browser for testing

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Lucide Icons](https://lucide.dev)

---

**Questions?** Check the README.md file for more information about the project structure and customization options.
