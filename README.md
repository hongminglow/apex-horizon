# Apex-Horizon

> The peak of enterprise-grade frontend patterns with unlimited scope. A comprehensive reference implementation showcasing best practices and scalable architecture for modern React applications.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## 🎯 What is Apex-Horizon?

Apex-Horizon is a **production-ready, all-in-one enterprise platform** that demonstrates how to build scalable, maintainable, and visually stunning React applications. It's not just another template—it's a comprehensive omni-pattern reference implementation that showcases:

- 🎨 **Advanced theming** with dark/light modes + dynamic color palettes
- 🌍 **Internationalization** with proper i18n implementation
- 🔐 **Authentication & RBAC** with JWT token management and permission systems
- 📊 **Real-time data visualization** with smooth state persistence
- 🎭 **Multi-layout system** with zero data refetch on layout switches
- 🛡️ **Error boundaries** scoped to individual sections
- 🚀 **Enterprise API patterns** using Axios + TanStack Query
- 📁 **Scalable architecture** with path aliases and clear separation of concerns

## ✨ Key Features

### 🎨 Visual & UX Excellence
- **Futuristic dark theme** as default with glassmorphism effects
- **Dynamic color palettes** - switch primary colors independently from theme
- **Smooth transitions** - no lag when switching layouts or themes
- **Real-time countdown timer** that persists across layout changes
- **Responsive design** optimized for all screen sizes

### 🔧 Enterprise Patterns
- **Mock API layer** with realistic network latency simulation
- **TanStack Query** for data fetching, caching, and synchronization
- **Axios interceptors** for request/response transformation
- **Error pages** for 403, 404, 500, and network errors
- **Scoped error boundaries** - one section error won't crash the app

### 🏗️ Architecture
- **Path aliases** (`@/components`, `@/api`, `@/types`, etc.)
- **Modular structure** with clear separation: `/api`, `/components`, `/features`, `/hooks`, `/lib`, `/types`, `/config`, `/constants`
- **TypeScript strict mode** with comprehensive type definitions
- **State management** with proper caching strategies
- **React Compiler** enabled for optimal performance

### 🔐 Security & Access Control
- **JWT authentication** with token storage and validation
- **Auth guards** protecting routes
- **RBAC system** with checkbox-based permission management
- **Restricted access cards** for sections without permission

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd dashboard-panel

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit `http://localhost:5173` to see Apex-Horizon in action.

### Build for Production

```bash
pnpm build
pnpm preview
```

## 📁 Project Structure

```
src/
├── api/                    # API client, endpoints, mock responses
│   ├── client/            # Axios configuration & interceptors
│   ├── endpoints/         # API endpoint definitions
│   └── mocks/             # Mock data generators
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── layouts/          # Layout components
│   └── sections/         # Data visualization sections
├── features/             # Feature-specific code
│   ├── auth/            # Authentication & login
│   ├── permissions/     # RBAC & permission management
│   └── theme/           # Theme & palette switching
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── types/                # TypeScript definitions
├── config/               # Configuration files
│   ├── theme.ts         # Theme & color palette config
│   └── i18n.ts          # Internationalization config
└── constants/            # Application constants
```

## 🎨 Design System

Apex-Horizon uses a comprehensive design system with:

- **Design tokens** for colors, spacing, typography
- **Tailwind CSS** for all styling (no inline styles or CSS-in-JS)
- **SVG icons** from Heroicons/Lucide (no emoji icons)
- **Consistent spacing** and layout patterns
- **Accessibility** considerations throughout

## 🔧 Technology Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 19 with React Compiler |
| **Language** | TypeScript 6.0 (strict mode) |
| **Build Tool** | Vite 8.0 |
| **Styling** | Tailwind CSS |
| **HTTP Client** | Axios |
| **Data Fetching** | TanStack Query (React Query) |
| **State Management** | Zustand / Context API |
| **Internationalization** | react-i18next |
| **Routing** | React Router |

## 📚 Documentation

- **[Requirements Specification](./ENTERPRISE_DASHBOARD_REQUIREMENTS.md)** - Complete requirements with acceptance criteria
- **[Design Document](./.kiro/specs/enterprise-dashboard/design.md)** - Technical architecture and design decisions
- **[Implementation Tasks](./.kiro/specs/enterprise-dashboard/tasks.md)** - Detailed implementation checklist

## 🎯 What You'll Learn

By exploring Apex-Horizon, you'll understand:

1. **How to structure** a scalable enterprise React application
2. **How to implement** proper authentication and authorization flows
3. **How to manage** complex state with caching strategies
4. **How to build** themeable applications with design tokens
5. **How to handle** errors gracefully with boundaries
6. **How to organize** API layers for easy backend integration
7. **How to write** maintainable TypeScript with strict types
8. **How to create** smooth UX with persistent state across views

## 🛠️ Development

### React Compiler

The React Compiler is enabled for optimal performance. See [React Compiler documentation](https://react.dev/learn/react-compiler) for more information.

### ESLint Configuration

For production applications, enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      // or tseslint.configs.strictTypeChecked for stricter rules
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

## 🤝 Contributing

This is a reference implementation. Feel free to:

- Use it as a starting point for your projects
- Learn from the patterns and adapt them
- Suggest improvements via issues or PRs

## 📄 License

MIT License - feel free to use this in your projects!

## 🌟 Acknowledgments

Built with enterprise standards in mind, following best practices from:
- React documentation and patterns
- TypeScript strict mode guidelines
- Tailwind CSS design principles
- Enterprise architecture patterns

---

**Built with ❤️ as a reference for enterprise-grade React applications**
