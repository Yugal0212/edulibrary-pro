# EduLibrary Pro - Setup Instructions

## Prerequisites
- Node.js 18+ and npm
- Git (optional, for version control)

## Installation Steps

### 1. Clone or Create the Project

**Option A: Create a new project folder**
\`\`\`bash
mkdir edulibrary-pro
cd edulibrary-pro
\`\`\`

**Option B: Clone from repository (if available)**
\`\`\`bash
git clone https://your-repository-url.git
cd edulibrary-pro
\`\`\`

### 2. Initialize the Project

\`\`\`bash
# Initialize a new Next.js project with TypeScript
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Or if starting from an existing package.json
npm install
\`\`\`

### 3. Install Required Dependencies

\`\`\`bash
# Core dependencies
npm install react@^18 react-dom@^18 next@14.0.0 

# UI and styling
npm install lucide-react@^0.294.0 class-variance-authority@^0.7.0 clsx@^2.0.0 tailwind-merge@^2.0.0

# UI components
npm install @radix-ui/react-slot@^1.0.2 @radix-ui/react-separator@^1.0.3 @radix-ui/react-dialog@^1.0.5 @radix-ui/react-dropdown-menu@^2.0.6 @radix-ui/react-label@^2.0.2 @radix-ui/react-select@^2.0.0 @radix-ui/react-tabs@^1.0.4 @radix-ui/react-toast@^1.1.5

# Smooth scrolling (optional - now using default browser scrolling)
npm install lenis@^1.0.42
\`\`\`

### 4. Configure TypeScript

Ensure your `tsconfig.json` includes:

\`\`\`json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./app/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
\`\`\`

### 5. Configure Tailwind CSS

Make sure your `tailwind.config.js` includes:

\`\`\`javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
\`\`\`

### 6. Start Development Server

\`\`\`bash
npm run dev
\`\`\`

Your application will be available at http://localhost:3000

### 7. Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
edulibrary-pro/
├── app/                 # Next.js pages and routes
│   ├── auth/            # Authentication pages
│   ├── dashboard/       # Dashboard pages for different roles
│   ├── components/      # Shared components
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Landing page
├── components/          # Reusable components
│   └── ui/              # UI components (shadcn/ui)
├── lib/                 # Utility functions
├── public/              # Static assets
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
\`\`\`

## Notes

- **Default Scrollbar**: We've removed the custom scrollbar styling to use the default browser scrollbar for better compatibility and performance.
- **Smooth Scrolling**: If you want to re-enable Lenis smooth scrolling, you can initialize it in your layout or page component.
- **Responsive Design**: The application is fully responsive for all device sizes.
- **Role-based Access**: The system includes separate dashboards for admins, librarians, and patrons.

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed correctly
2. Check for any console errors in the browser developer tools
3. Ensure your Node.js version is 18 or higher
4. Try clearing your browser cache or using incognito mode
