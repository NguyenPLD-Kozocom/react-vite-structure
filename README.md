# React + TypeScript + Vite

A modern React project template with TypeScript, Vite, and comprehensive development tools.

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite 7** - Build tool with HMR
- **SWC** - Fast compiler for React
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files

## 📦 Installation

### 1. Create project directory

```bash
mkdir project_name
cd project_name
```

### 2. Initialize Vite project

```bash
yarn create vite .
```

Select options:
- **Framework**: React
- **Variant**: TypeScript + SWC
- **Use rolldown-vite**: No
- **Install with yarn and start now**: Yes

### 3. Install additional dependencies

```bash
yarn add husky lint-staged prettier eslint-config-prettier eslint-plugin-prettier -D
```

### 4. Initialize Husky

```bash
npx husky init
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `yarn start` | Start development server |
| `yarn build` | Build for production |
| `yarn preview` | Preview production build |
| `yarn lint` | Run ESLint |
| `yarn lint:fix` | Fix ESLint errors automatically |
| `yarn prettier` | Check code formatting |
| `yarn prettier:fix` | Format code automatically |

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, fonts, icons)
├── components/      # Reusable components
├── constants/       # App constants
├── contexts/       # React contexts
├── hooks/          # Custom React hooks
├── layout/         # Layout components
├── models/         # TypeScript types/interfaces
├── App.tsx         # Main App component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## 🔧 Code Quality

### ESLint

This project uses ESLint with the following configurations:

- **TypeScript ESLint** - TypeScript-specific rules
- **React Hooks** - React Hooks rules
- **React Refresh** - Fast Refresh compatibility
- **Prettier** - Code formatting integration

### Prettier

Code formatting is enforced with Prettier. Configuration can be found in `.prettierrc`.

### Git Hooks

Husky is configured to run lint-staged on pre-commit:

- **ESLint** - Lint and fix staged `.js`, `.ts`, `.tsx` files
- **Prettier** - Format staged `.ts`, `.tsx`, `.html`, `.css`, `.json` files

## 🎯 Development Guidelines

### Component Structure

- Each component should be in its own folder with an `index.ts` file for exports
- Use TypeScript for all components
- Follow React Fast Refresh best practices (only export components from `.tsx` files)

### Code Style

- Use single quotes for strings
- No semicolons
- 2 spaces indentation
- Max line width: 120 characters

### TypeScript

- Enable strict mode
- Avoid using `any` type
- Define types/interfaces in `models/` directory

## 📝 License

This project is private.
