export interface Experience {
  id: number,
  start: number,
  end: number,
  title: string,
  description: string,
  tech: string[],
}

const EXPERIENCES: Experience[] = [
  {
    id: 0,
    start: 2024,
    end: 2024,
    title: "Full Stack Developer at Cantook Education",
    description: "Built and maintained features for an educational platform using Ruby on Rails and Vue.js. Improved performance, accessibility, and developer experience.",
    tech: ["Ruby on Rails", "Vue.js", "PostgreSQL", "GraphQL", "Docker"]
  },
  {
    id: 1,
    start: 2024,
    end: 2025,
    title: "Frontend Developer Intern",
    description: "Developed UI components with React and styled-components. Worked on internal tooling and improved test coverage with Jest and Testing Library.",
    tech: ["React", "TypeScript", "styled-components", "Jest", "Testing Library"]
  }
]

export default EXPERIENCES;
