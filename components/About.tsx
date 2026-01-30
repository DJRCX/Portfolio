export default function About() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="rounded-xl border border-nord-4 bg-nord-5 p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="font-heading mb-4 text-xl font-bold text-nord-0">
            Professional Identity
          </h3>
          <p className="font-body mb-4 text-nord-1">
            As COO at UNLEFT, I handle the frontend development while
            maintaining design hierarchy and responsiveness across all projects.
            I&apos;m dedicated to creating clean, functional, and user-friendly
            web experiences.
          </p>
          <p className="font-body text-nord-1">
            I want people to describe me as a{" "}
            <span className="font-heading text-nord-9">
              responsible co-worker and team member
            </span>
            . My dedication and work experience set me apart from others in
            similar roles.
          </p>
        </div>
        <div>
          <h3 className="font-heading mb-4 text-xl font-bold text-nord-0">
            Educational Background
          </h3>
          <div className="mb-6">
            <h4 className="font-heading font-bold text-nord-0">
              BSc in Software Engineering
            </h4>
            <p className="font-body text-nord-2">
              Daffodil International University
            </p>
            <p className="font-body text-nord-3">2025 - Present</p>
          </div>

          <h3 className="font-heading mb-4 text-xl font-bold text-nord-0">
            Currently Learning
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-nord-8/20 px-3 py-1 font-body text-sm text-nord-0">
              React
            </span>
            <span className="rounded-full bg-nord-8/20 px-3 py-1 font-body text-sm text-nord-0">
              React Native
            </span>
            <span className="rounded-full bg-nord-8/20 px-3 py-1 font-body text-sm text-nord-0">
              Mobile App Development
            </span>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
