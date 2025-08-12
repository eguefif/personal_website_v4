
export interface Project {
  id: number,
  title: string,
  tech: string[],
  description: string
}

const PROJECTS: Project[] = [
  {
    id: 0,
    title: 'Game-Boy emulator',
    tech: ['Rust', 'CPU architecture', 'Computer architecture'],
    image: { src: './tetris.jpg', alt: 'Emulator playing tetris'},
    description: "This Game Boy emulator can run Tetris. This was not an easy project. There is no official documentation, but you have to gather a lot of resources yourself. It was an opportunity to learn by looking at other people's code and understanding the logic."
  }, {
    id: 1,
    title: 'Ray tracer',
    tech: ['C', 'Ray tracing', 'multithreading'],
    image: { src: './spheres.png', alt: 'Spheres rendered by the raytracer' },
    description: "This 42 project is all about Ray Tracing. I worked mainly on implementing different figures: sphere, plane, cylinder, and triangle. We optimized rendering by implementing a sample accumulator. We also took advantage of multithreading to render rays in batches."
  }
];

export default PROJECTS;
