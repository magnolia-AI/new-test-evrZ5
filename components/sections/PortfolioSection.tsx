import ProjectCard from "@/components/portfolio/ProjectCard";

const projects = [
  {
    title: "E-commerce Store",
    description:
      "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and secure checkout. Built with Next.js, Stripe, and PostgreSQL.",
    image:
      "https://images.unsplash.com/photo-1483985988355-f7dc55dc8c8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Next.js", "React", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management App",
    description:
      "A responsive task management application allowing users to create, organize, and track tasks. Features include drag-and-drop, due dates, and categorization.",
    image:
      "https://images.unsplash.com/photo-1504711434939-bf07977576ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Personal Blog",
    description:
      "A sleek and modern personal blog platform with a rich text editor, comment section, and search functionality. Optimized for SEO and performance.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fcd61f2027d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel Analytics"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Recipe Finder",
    description:
      "An application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine type. Integrates with a third-party API.",
    image:
      "https://images.unsplash.com/photo-1504711434939-bf07977576ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["React", "Redux", "Sass", "REST API"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A dashboard to manage and analyze social media presence, featuring analytics, post scheduling, and engagement tracking.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Vue.js", "Firebase", "Chart.js", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Weather App",
    description:
      "A simple and intuitive weather application providing real-time weather updates, forecasts, and location-based weather information.",
    image:
      "https://images.unsplash.com/photo-1483985988355-f7dc55dc8c8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
    liveLink: "#",
    githubLink: "#",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-purple-400">
          My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

