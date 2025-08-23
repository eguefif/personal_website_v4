
export interface Project {
  id: number,
  title: string,
  tech: string[],
  image: { src: string, alt: string },
  summary: string,
  description: {
    introduction: string,
    purpose: string,
    spotlight: string,
    lessons: string
  }
}

const PROJECTS: Project[] = [
  {
    id: 0,
    title: 'Game-Boy emulator',
    tech: ['Rust', 'CPU architecture', 'Computer architecture'],
    image: { src: './tetris.jpg', alt: 'Emulator playing tetris'},
    summary: "This Game Boy emulator can run Tetris. This was not an easy project. There is no official documentation, but you have to gather a lot of resources yourself. It was an opportunity to learn by looking at other people's code and understanding the logic.",
    description: {
      introduction: "This Game Boy emulator project challenged me to recreate the classic handheld gaming system from scratch using Rust. Without official documentation, this reverse-engineering endeavor required extensive research and creative problem-solving to understand the intricate hardware specifications and timing requirements of the original Game Boy.",
      purpose: "The primary goal was to gain deep understanding of computer architecture and low-level programming concepts by implementing a complete emulation of the Game Boy's CPU, memory management, and graphics processing unit. This project served as a practical exploration of how software can simulate hardware behavior.",
      spotlight: "The most challenging aspect was implementing the precise timing requirements and interrupt handling that games like Tetris depend on. I had to study existing emulators, reverse-engineer ROM files, and implement cycle-accurate CPU instruction execution to achieve compatibility with real Game Boy games.",
      lessons: "This project taught me the fundamentals of computer architecture, the importance of precision in low-level programming, and valuable reverse-engineering skills. I learned how to work with incomplete documentation and piece together complex systems from scattered resources."
    }
  }, {
    id: 1,
    title: 'Ray tracer',
    tech: ['C', 'Ray tracing', 'multithreading'],
    image: { src: './spheres.png', alt: 'Spheres rendered by the raytracer' },
    summary: "This 42 project is all about Ray Tracing. I worked mainly on implementing different figures: sphere, plane, cylinder, and triangle. We optimized rendering by implementing a sample accumulator. We also took advantage of multithreading to render rays in batches.",
    description: {
      introduction: "This ray tracer project from 42 School challenged me to implement a complete 3D rendering system from scratch using C. The goal was to create photorealistic images by simulating the path of light rays through a virtual scene, requiring deep understanding of 3D mathematics and computer graphics principles.",
      purpose: "The objective was to master fundamental computer graphics concepts including ray-object intersection algorithms, lighting models, and 3D transformations. This project provided hands-on experience with mathematical concepts like vector operations, matrix transformations, and geometric calculations essential for graphics programming.",
      spotlight: "I implemented support for multiple geometric primitives including spheres, planes, cylinders, and triangles, each requiring different intersection algorithms. The rendering pipeline featured a sample accumulator for improved image quality and multithreading optimization that rendered rays in parallel batches, significantly improving performance.",
      lessons: "This project deepened my understanding of 3D mathematics and taught me optimization techniques for computationally intensive applications. Working with multithreading in C helped me understand parallel processing challenges and the importance of efficient algorithm design in graphics programming."
    }
  }, {
    id: 2,
    title: 'ft_transcendance',
    tech: ['JavaScript', 'Python', 'WebSocket', 'Docker', 'CI/CD'],
    image: { src: './pong.jpg', alt: 'Multiplayer Pong game screenshot'},
    summary: "As the capstone project for my programming school, I led a team in developing a comprehensive online multiplayer Pong game using entirely new technologies—JavaScript and Python. I single-handedly architected the entire pong server, owned the CI/CD pipeline, and gained invaluable full-stack and leadership experience.",
    description: {
      introduction: "As the capstone project for my programming school, I led a team in developing a comprehensive online multiplayer Pong game using entirely new technologies—JavaScript and Python. This full-stack web application challenged us to build everything from scratch while learning new languages and frameworks. Over the course of several months, I took on the role of team lead, driving both technical implementation and project management to deliver a polished gaming platform.",
      purpose: "The primary objective was to demonstrate mastery of full-stack development by creating a complete online gaming experience in unfamiliar programming languages. Our goals included building a scalable multiplayer game architecture, implementing secure user authentication, and creating an engaging user experience with real-time gameplay. From a personal development perspective, I aimed to gain leadership experience while exploring modern web technologies and DevOps practices.",
      spotlight: "What sets this project apart is the breadth of technical ownership I maintained across multiple critical components. I single-handedly architected and coded the entire pong server from scratch, enabling real-time multiplayer functionality—a complex undertaking requiring deep understanding of WebSocket connections and game state synchronization. Beyond the core game logic, I owned the complete CI/CD pipeline and infrastructure, designing Docker configurations for both development and production environments, setting up automated deployment to Digital Ocean, and establishing a release cycle that deployed every Friday afternoon. This DevOps foundation enabled our experimental approach to continuous integration and user feedback. My technical contributions spanned the entire stack: I built the frontend router, developed the statistics page, refactored the JavaScript game logic, and helped implement the championship system.",
      lessons: "This project provided crucial insights into both technical implementation and team leadership. I discovered the intricacies of exception handling in Python server architectures, learning how to build robust, fault-tolerant systems that gracefully handle edge cases and connection issues. From a leadership perspective, I gained firsthand experience with the organizational challenges of team coordination. Implementing weekly evaluation meetings and adopting productivity tools like Kanban boards and ticket systems taught me how to effectively plan and distribute work across team members while maintaining project momentum. Perhaps most valuably, our experimental approach to continuous deployment and user feedback proved that early and frequent releases dramatically improve code quality."
    }
  }
];

export default PROJECTS;
