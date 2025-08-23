# Emmanuel Guefif Portfolio Website

This is a React 19 + TypeScript + Vite personal portfolio website to showcase projects and experience. The application uses styled-components for styling and follows a single-page layout pattern.

## Key Technologies
- **React 19** with TypeScript
- **Styled-components** for all styling
- **Vite** for build tooling and development
- **React Router** (create-react-router) for basic routing
- **React Feather** for icons

*This website was partly built using Claude Code, mostly for the boilerplate. This was an opportunity to experiment with learning alongside AI. I learned CSS from Josh Comeau's courses and React from the official documentation. Once I had learned concepts and gained practice writing code in Vim, I would accelerate the building process using Claude and thoroughly check all the code in Claude Code, GitButler, and GitHub. Throughout this process, I would evaluate the AI's suggestions against my learnings, weighing tradeoffs and determining the
  best approach for each situation, then directing the AI accordingly to ensure the implementation aligned with best practices.*

---

## Table of Contents
1. [How to Add and Change Projects](#how-to-add-and-change-projects)
2. [How to Change Personal Information](#how-to-change-personal-information)
3. [Component Structure](#component-structure)
4. [CSS Variables Reference](#css-variables-reference)

---

## How to Add and Change Projects

### Adding a New Project

To add a new project to your portfolio, you need to edit the `PROJECTS` array in `/src/components/ProfessionalContent/PortFolio/PortFolioData.tsx`.

#### Project Structure
Each project follows this TypeScript interface:

```typescript
interface Project {
  id: number,                    // Unique identifier (increment from last project)
  title: string,                // Project name
  tech: string[],               // Array of technologies used
  image: { src: string, alt: string },  // Image path and alt text
  summary: string,              // Brief project description (shown in grid view)
  description: {                // Detailed descriptions for project detail view
    introduction: string,       // Project introduction and context
    purpose: string,           // Why the project was built
    spotlight: string,         // Key technical achievements/challenges
    lessons: string           // What you learned from the project
  }
}
```


---

## How to Change Personal Information

### Name, Title, and Former Title

Personal information is managed in `/src/components/Commons/PersonalInfo.tsx`:

```typescript
export default function PersonalInfo({ 
  name = "Emmanuel Guefif",                    // ← Change your name here
  title = "Mid-level Developer",               // ← Change your current title here  
  formerTitle = "Former Elementary School Teacher",  // ← Change your former title here
  className 
}: PersonalInfoProps) {
```


### Bio/About Text

Your personal bio is stored in `/src/components/Bio/Biopic.tsx`:

```typescript
const BIOPIC = `
I used to program as a hobby while teaching as a profession. I don't teach anymore, but I still program, and I get paid for it. I am a lifelong learner and a curious man; programming is a great activity. I can learn about technology and my client's domain. I studied sociology, and I've learned about asking questions and trying to understand people. 

As a developer, I combined my technical and sociological skills to understand the problem at hand and find solutions. I like web development because it's the best way to solve people's problems. I also have a passion for low-level programming. When I finish a project, book, or article about it, it's like I've added a new piece to the big puzzle of computer systems. I love it!
`;
```

### Social Links

Social media links are managed in `/src/components/Bio/SocialLinks.tsx`. You can add, remove, or modify social platform links by editing the links array in that component.

---

## Component Structure

### Component Hierarchy

#### Top Level Layout
```
App.tsx
└── MainLayout.tsx
    ├── Header/ (if exists)
    └── Content Areas
```

#### Main Component Structure

```
src/components/
├── Bio/                          # Personal biography section
│   ├── Bio.tsx                   # Main bio component
│   ├── Biopic.tsx               # Profile picture component
│   └── SocialLinks.tsx          # Social media links
│
├── Commons/                      # Reusable UI components
│   ├── PersonalInfo.tsx         # Personal information display
│   ├── TechTags.tsx            # Technology tag components
│   ├── ThemeToggle.tsx         # Dark/light theme switcher
│   └── Titles.tsx              # Standardized heading components (H1, H2, H3)
│
├── GlobalStyles/                 # Global styling and CSS variables
│   └── GlobalStyles.tsx         # CSS reset, theme variables, global styles
│
├── Introduction/                 # Site introduction section
│   └── Introduction.tsx
│
├── ProfessionalContent/         # Main content area for professional info
│   ├── Experience/              # Work experience section
│   │   ├── AchievementsCollapsible.tsx  # Collapsible achievements component
│   │   ├── AchievementsContainer.tsx    # Container for achievements
│   │   ├── Experience.tsx               # Main experience component
│   │   ├── ExperienceCard.tsx          # Individual experience card
│   │   └── XPdata.tsx                  # Experience data definitions
│   │
│   ├── PortFolio/              # Portfolio/projects section
│   │   ├── PortFolio.tsx       # Main portfolio component
│   │   ├── PortFolioData.tsx   # Portfolio project data
│   │   ├── ProjectCardLaptop.tsx # Desktop project card layout
│   │   ├── ProjectCardMobile.tsx # Mobile project card layout
│   │   └── ProjectDetail.tsx    # Detailed project view
│   │
│   ├── Menu.tsx                # Navigation menu component
│   ├── NavLink.tsx            # Navigation link component
│   └── ProfessionalContent.tsx # Main professional content container
│
├── MainLayout.tsx             # Primary layout component
└── constants.ts              # Application constants
```

---

## CSS Variables Reference

All CSS custom properties are defined in `src/components/GlobalStyles/GlobalStyles.tsx`.

### Theme System

The project uses a dual-theme system with automatic dark/light mode detection and manual override capability.

#### Theme Detection Priority
1. **Manual Override**: `html[data-theme="light"]` or `html[data-theme="dark"]`
2. **System Preference**: `@media (prefers-color-scheme: light)`
3. **Default**: Dark theme

### Color Variables

#### Base Colors

**Dark Theme (Default)**
```css
--color-white: hsl(250 0% 83.1%);     /* Light text color */
--color-black: hsl(250 0 0);          /* True black */
--color-background: hsl(220deg, 28%, 5%);  /* Main background */
```

**Light Theme**
```css
--color-white: hsl(250 0% 15%);       /* Dark text color */
--color-black: hsl(250 0 100);        /* True white */
--color-background: hsl(220deg, 8%, 98%);   /* Light background */
```

#### Primary & Secondary Colors

**Dark Theme**
```css
--color-primary: hsl(223 40% 40%);
--color-primary-brighter: hsl(210 70% 92%);
--color-primary-transparent: hsla(41 89.2% 27% / 0.33);
--color-secondary: hsl(30 50 27);
```

**Light Theme**
```css
--color-primary: hsl(223 40% 60%);
--color-primary-brighter: hsl(210 70% 20%);
--color-primary-transparent: hsla(41 89.2% 73% / 0.33);
--color-secondary: hsl(30 50 73);
```

#### Utility Colors

**Dark Theme**
```css
--color-transparent: hsl(144 99 99 / 0.5);
--color-overlay: hsla(220, 15%, 10%, 0.6);
```

**Light Theme**
```css
--color-transparent: hsl(144 99 1 / 0.5);
--color-overlay: hsla(220, 15%, 90%, 0.6);
```

### Gray Scale System

#### Dark Theme Grays
```css
--color-gray-50: hsl(250 0 98);      /* Lightest */
--color-gray-100: hsl(250 0 96);
--color-gray-200: hsl(250 0 89);
--color-gray-300: hsl(250 0 70);
--color-gray-400: hsl(250 0 49.4);
--color-gray-500: hsl(250 0 39);
--color-gray-600: hsl(250 0 32);
--color-gray-700: hsl(250 0 25);
--color-gray-800: hsl(250 0 15);
--color-gray-900: hsl(250 0 9);
--color-gray-950: hsl(250 0 4);      /* Darkest */
```

#### Light Theme Grays
```css
--color-gray-50: hsl(250 0 2);       /* Darkest */
--color-gray-100: hsl(250 0 4);
--color-gray-200: hsl(250 0 11);
--color-gray-300: hsl(250 0 30);
--color-gray-400: hsl(250 0 50.6);
--color-gray-500: hsl(250 0 61);
--color-gray-600: hsl(250 0 68);
--color-gray-700: hsl(250 0 75);
--color-gray-800: hsl(250 0 85);
--color-gray-900: hsl(250 0 91);
--color-gray-950: hsl(250 0 96);     /* Lightest */
```

### Alpha (Transparency) Variants

#### Gray-50 Alpha Variants
**Dark Theme**
```css
--color-gray-50-alpha-10: hsl(250 0 98 / 0.1);
--color-gray-50-alpha-20: hsl(250 0 98 / 0.2);
--color-gray-50-alpha-50: hsl(250 0 98 / 0.5);
--color-gray-50-alpha-80: hsl(250 0 98 / 0.8);
```

**Light Theme**
```css
--color-gray-50-alpha-10: hsl(250 0 2 / 0.1);
--color-gray-50-alpha-20: hsl(250 0 2 / 0.2);
--color-gray-50-alpha-50: hsl(250 0 2 / 0.5);
--color-gray-50-alpha-80: hsl(250 0 2 / 0.8);
```

#### Gray-400 Alpha Variants
**Dark Theme**
```css
--color-gray-400-alpha-10: hsl(250 0 49.4 / 0.1);
--color-gray-400-alpha-20: hsl(250 0 49.4 / 0.2);
--color-gray-400-alpha-50: hsl(250 0 49.4 / 0.5);
--color-gray-400-alpha-80: hsl(250 0 49.4 / 0.8);
```

**Light Theme**
```css
--color-gray-400-alpha-10: hsl(250 0 50.6 / 0.1);
--color-gray-400-alpha-20: hsl(250 0 50.6 / 0.2);
--color-gray-400-alpha-50: hsl(250 0 50.6 / 0.5);
--color-gray-400-alpha-80: hsl(250 0 50.6 / 0.8);
```

#### Gray-600 Alpha Variants
**Dark Theme**
```css
--color-gray-600-alpha-10: hsl(250 0 32 / 0.1);
--color-gray-600-alpha-20: hsl(250 0 32 / 0.2);
--color-gray-600-alpha-50: hsl(250 0 32 / 0.5);
--color-gray-600-alpha-80: hsl(250 0 32 / 0.8);
```

**Light Theme**
```css
--color-gray-600-alpha-10: hsl(250 0 68 / 0.1);
--color-gray-600-alpha-20: hsl(250 0 68 / 0.2);
--color-gray-600-alpha-50: hsl(250 0 68 / 0.5);
--color-gray-600-alpha-80: hsl(250 0 68 / 0.8);
```

#### Gray-900 Alpha Variants
**Dark Theme**
```css
--color-gray-900-alpha-10: hsl(250 0 9 / 0.1);
--color-gray-900-alpha-20: hsl(250 0 9 / 0.2);
--color-gray-900-alpha-50: hsl(250 0 9 / 0.5);
--color-gray-900-alpha-80: hsl(250 0 9 / 0.8);
```

**Light Theme**
```css
--color-gray-900-alpha-10: hsl(250 0 91 / 0.1);
--color-gray-900-alpha-20: hsl(250 0 91 / 0.2);
--color-gray-900-alpha-50: hsl(250 0 91 / 0.5);
--color-gray-900-alpha-80: hsl(250 0 91 / 0.8);
```

### Background Gradients

#### Dark Theme Background
```css
background: radial-gradient(circle at 0% 0%, hsl(210 30% 8%) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, hsl(210 30% 8%) 0%, transparent 75%),
            radial-gradient(circle at 100% 100%, hsl(210 30% 8%) 0%, transparent 100%),
            var(--color-background);
```

#### Light Theme Background
```css
background: radial-gradient(circle at 0% 0%, hsl(220 15% 96%) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, hsl(210 20% 94%) 0%, transparent 75%),
            radial-gradient(circle at 100% 100%, hsl(200 25% 96%) 0%, transparent 100%),
            var(--color-background);
```

### Typography Classes

```css
.lato-thin     { font-family: "Lato", sans-serif; font-weight: 100; }
.lato-light    { font-family: "Lato", sans-serif; font-weight: 300; }
.lato-regular  { font-family: "Lato", sans-serif; font-weight: 400; }
.lato-bold     { font-family: "Lato", sans-serif; font-weight: 700; }
.lato-black    { font-family: "Lato", sans-serif; font-weight: 900; }
```

### CSS Variables Usage

#### Accessing Variables in Styled Components
```typescript
const StyledComponent = styled.div`
  background-color: var(--color-background);
  color: var(--color-white);
  border: 1px solid var(--color-gray-400);
  box-shadow: 0 2px 8px var(--color-gray-900-alpha-20);
`;
```

#### Color Semantic Meanings
- `--color-white`: Primary text color
- `--color-black`: Contrasting background/accent color  
- `--color-background`: Main page background
- `--color-primary`: Brand/accent color
- `--color-gray-*`: Neutral colors for borders, secondary text, backgrounds
- `--color-*-alpha-*`: Semi-transparent variants for overlays and subtle backgrounds
- `--color-overlay`: Modal/popup overlay background
