import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import plantsImage from "@/assets/plants.png";
import marketingImage from "@/assets/marketing.png";

const projects = [
  {
    title: "Marketing Leader",
    description:
      "Consultancy on all things marketing.",
    tags: ["Planning", "Post Its", "Brand"],
    liveUrl: null,
    githubUrl: null,
    image: marketingImage,
  },
  {
    title: "Plant Lover",
    description:
      "A citizen science project supporting nature education.",
    tags: ["Nature", "Plants", "Seeding"],
    liveUrl: null,
    githubUrl: null,
    image: plantsImage,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 animate-slide-up">
          <h1 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-4">Projects</h1>
          <p className="text-muted-foreground max-w-2xl">
            A collection of work spanning marketing, and experiments on nature
            conservation.
          </p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <Card
                key={project.title}
                className="bg-card border-border hover:border-muted-foreground/30 transition-all duration-300 group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"}`}>
                  {/* Image */}
                  <div className="md:w-2/5 h-48 md:h-auto">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>

                  {/* Content */}
                  <CardContent className="md:w-3/5 p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs font-normal bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github size={14} />
                          Source
                        </a>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
