export interface Experience {
  id: number,
  start: number,
  end: number,
  title: string,
  achievements: string[],
  tech: string[],
}

const EXPERIENCES: Experience[] = [
  {
    id: 0,
    start: 2024,
    end: 2024,
    achievements: [
      "Redesign of the website backbone: loan system",
      "Work in another project to develop a dependency for my team",
      "Updates rails: 2 minor and 1 major updates",
      "Implements analytical data report for the platform"
    ],
    title: "Full Stack Developer at Cantook Education",
    tech: ["Rails", "Vue.js", "PostgreSQL", "GraphQL", "Docker"]
  },
  {
    id: 1,
    start: 2024,
    end: 2025,
    title: "Frontend Developer Intern",
    achievements: [
      "Make the proof of concept in three weeks instead of 4 monts.",
      "Work with legacy code.",
    ],
    tech: ["React", "TypeScript", "Jest"]
  }
]

export default EXPERIENCES;
