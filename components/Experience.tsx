const timeline = [
  {
    title: "Chief Operating Officer (COO)",
    org: "UNLEFT",
    desc: "Handling frontend development, maintaining design hierarchy, and ensuring responsiveness across all projects.",
    detail:
      "Core responsibilities: Finalizing and maintaining design hierarchy, ensuring responsive design, leading frontend development.",
  },
  {
    title: "Company Website Development",
    org: "UNLEFT Website",
    desc: "Developed and maintained the official company website with a focus on design consistency and responsiveness.",
    detail:
      "Challenges: Maintaining design hierarchy across different webpages and ensuring optimal experience across all screen sizes.",
  },
  {
    title: "Learning Platform Development",
    org: "Eduplex DIU",
    desc: "Contributed to a comprehensive learning platform for Daffodil International University students.",
    detail:
      "Focus: Design hierarchy, responsiveness, and user experience for educational content.",
  },
];

export default function Experience() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="font-heading mb-8 text-3xl font-bold text-nord-9">
        Professional Experience
      </h2>
      <div className="space-y-6">
        {timeline.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-nord-4 bg-nord-5 p-6 transition-transform hover:-translate-y-0.5"
          >
            <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
              <h3 className="font-heading text-xl font-bold text-nord-0">
                {item.title}
              </h3>
              <span className="font-heading text-nord-9 md:text-lg">
                {item.org}
              </span>
            </div>
            <p className="font-body mb-3 text-nord-2">{item.desc}</p>
            <p className="font-body text-sm text-nord-3 border-t border-nord-4 pt-3 mt-3">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
