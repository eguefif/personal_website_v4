# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a React + TypeScript + Vite frontend-only project. All commands should be run from the `frontend/` directory:

```bash
cd frontend

# Start development server
pnpm dev

# Build for production  
pnpm build

# Run linting
pnpm lint

# Preview production build
pnpm preview
```

## Project Architecture

### Frontend Structure
This is a personal portfolio website built with React 19, TypeScript, and Vite. The application uses a single-page layout with minimal routing.

**Key Technologies:**
- **React 19** with TypeScript
- **Styled-components** for all styling
- **Vite** for build tooling and development
- **React Router** (create-react-router) for basic routing
- **React Feather** for icons

### Component Organization

Components follow a feature-based hierarchical structure:

```
src/components/
├── Admin/                    # Admin functionality (login, landing)
├── Commons/                  # Reusable UI components (buttons, titles)
├── GlobalStyles/             # CSS reset and global styles
├── Header/                   # Site navigation
└── ProfessionalPage/         # Main content area
    ├── ProfessionalContent/  # Experience, portfolio, bio
    └── SideBar/             # Personal info, navigation, social links
```

**Layout Pattern:**
- `App.tsx`: Top-level vertical flex container (Header → ProfessionalPage)
- `ProfessionalPage`: Horizontal layout (SideBar + ProfessionalContent)
- `SideBar`: Sticky positioned vertical navigation
- `ProfessionalContent`: Main scrollable content sections

### Styling Conventions

**Styled-components Usage:**
- All components use `styled-components` with the pattern: `import { styled } from 'styled-components'`
- Styled elements defined at bottom of component files
- CSS custom properties for theming defined in `GlobalStyles.tsx`
- Gap-based spacing throughout the application

**Typography:**
- Standardized heading components in `Commons/Titles.tsx`
- Lato font family with multiple weights
- Semantic heading hierarchy (H1, H2, H3 components)

### Data Flow

**Static Data Pattern:**
- Experience data: `ProfessionalContent/Experience/data.tsx`
- Portfolio projects: `ProfessionalContent/PortFolio/FakeData.ts`
- TypeScript interfaces define data structures
- Props-based data flow without complex state management

### Import Alias

Vite is configured with a path alias:
- `components` → `src/components`
- Use: `import Header from 'components/Header/Header'`

### Development Notes

- Components follow consistent structure: imports → component function → styled components → export
- No complex state management - primarily presentational components
- TypeScript strict mode enabled
- ESLint configured for React and TypeScript best practices
- All files use absolute imports via the components alias

### File Conventions

- Component files: PascalCase (e.g., `AdminLogin.tsx`)
- Data files: PascalCase with descriptive suffix (e.g., `FakeData.ts`, `data.tsx`)
- Folders: PascalCase matching component names
- One component per file with default export