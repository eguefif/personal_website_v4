export interface Experience {
  id: number,
  start: number,
  end: number,
  title: string,
  company: string,
  link: string,
  achievements: string[],
  tech: string[],
}

const EXPERIENCES: Experience[] = [
  {
    id: 0,
    start: 2024,
    end: 2024,
    achievements: [
      "Redesign of the web application main feature: the loan system",
      "Work in another project to develop a dependency for my team",
      "Updates rails: 2 minor and 1 major updates",
      "Implements analytical data report for the platform"
    ],
    title: "Full Stack Developer",
    link: "https://www.demarque.com/",
    company: "Demarque",
    tech: ["Rails", "Vue.js", "PostgreSQL", "GraphQL", "Docker"]
  },
  {
    id: 1,
    start: 2024,
    end: 2025,
    title: "Full Stack developer",
    company: "Eddyfi",
    link: "https://www.eddyfi.com/",
    achievements: [
      "Complete the proof of concept in three weeks instead of four months.",
      "Work with legacy code.",
    ],
    tech: ["C#", "Flutter"]
  }
]

export default EXPERIENCES;
