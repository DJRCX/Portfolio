import ProjectImage from "./ProjectImage";

const projects = [
  {
    title: "UNLEFT Company Website",
    desc: "The official website for UNLEFT company, designed and developed with a focus on minimalism, responsiveness, and clear information hierarchy.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    url: "https://starrynight-web.github.io/unleft/",
    image: "/images/unleft.webp",
  },
  {
    title: "Eduplex DIU Learning Platform",
    desc: "A comprehensive learning platform for students of Daffodil International University, featuring organized educational content with a focus on usability.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    url: "https://eduplex-diu.unleft.space/",
    image: "/images/eduplex.webp",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-4 py-12">
      <h2 className="font-heading mb-8 text-3xl font-bold text-nord-9">
        Featured Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-xl border border-nord-4 bg-nord-5 transition-transform hover:-translate-y-0.5"
          >
            {project.image && (
              <ProjectImage src={project.image} alt={project.title} />
            )}
            <div className="p-6">
              <h3 className="font-heading mb-2 text-xl font-bold text-nord-0">
                {project.title}
              </h3>
              <p className="font-body mb-4 text-nord-2">{project.desc}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-nord-8/20 px-3 py-1 font-body text-sm text-nord-0"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-body text-nord-9 transition-colors hover:text-nord-10"
              >
                View Project
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
