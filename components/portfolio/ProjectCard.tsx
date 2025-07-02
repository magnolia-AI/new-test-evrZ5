import Image from "next/image";
import { Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gray-800 border border-gray-700">
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-purple-300 mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-3 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-purple-900 text-purple-200 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {liveLink && (
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-all duration-300">
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Globe className="w-4 h-4" /> Live Demo
              </a>
            </Button>
          )}
          {githubLink && (
            <Button asChild variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-900 hover:text-white px-4 py-2 rounded-full transition-all duration-300">
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

