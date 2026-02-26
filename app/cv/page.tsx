import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio Profile and Experience",
  description:
    "Portfolio profile page of Mahtabul Al Nahian highlighting experience, skills, education, and selected frontend projects.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Minimalist Portfolio",
    "COO UNLEFT",
    "Portfolio Experience",
  ],
  alternates: {
    canonical: "/cv",
  },
  openGraph: {
    title: "Portfolio Profile and Experience | Mahtabul Al Nahian Portfolio",
    description:
      "Detailed portfolio profile with career summary, skills, and selected projects.",
    url: "https://portfolio.unleft.space/cv",
    type: "profile",
    images: ["/images/mahtab.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Profile and Experience | Mahtabul Al Nahian Portfolio",
    description: "Portfolio profile with skills, experience, and project highlights.",
    images: ["/images/mahtab.webp"],
  },
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-nord-6 py-8 print:py-0 print:bg-white">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-6 print:hidden">
          <Link
            href="/"
            className="font-body text-nord-9 transition-colors hover:text-nord-10"
          >
            ← Back to Portfolio
          </Link>
        </div>

        <article className="rounded-xl border border-nord-4 bg-nord-5 p-8 shadow-sm print:border-0 print:shadow-none print:bg-white">
          {/* Header */}
          <header className="border-b border-nord-4 pb-6">
            <h1 className="font-heading text-3xl font-bold text-nord-0">
              Mahtabul Al Nahian
            </h1>
            <p className="font-body mt-1 text-lg text-nord-9">
              Chief Operating Officer (COO) & Frontend Developer
            </p>
            <p className="font-body text-nord-2">UNLEFT</p>
            <div className="mt-4 flex flex-wrap gap-4 font-body text-sm text-nord-2">
              <a
                href="https://www.linkedin.com/in/mahtabul-al-nahian-42osix9/"
                target="_blank"
                rel="noopener noreferrer"
                className="print:no-underline"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/djrcx420/"
                target="_blank"
                rel="noopener noreferrer"
                className="print:no-underline"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/al_nahian_mahtabul/"
                target="_blank"
                rel="noopener noreferrer"
                className="print:no-underline"
              >
                Instagram
              </a>
            </div>
          </header>

          {/* Summary */}
          <section className="mt-6">
            <h2 className="font-heading text-lg font-bold text-nord-9">
              Professional Summary
            </h2>
            <p className="font-body mt-2 text-nord-1">
              Frontend developer and COO at UNLEFT. I create responsive and
              functioning websites with a focus on design hierarchy and clarity.
              Responsible co-worker and team member with dedication to
              maintaining design consistency and responsiveness across projects.
              Currently expanding into React and React Native for mobile
              application development.
            </p>
          </section>

          {/* Experience */}
          <section className="mt-6">
            <h2 className="font-heading text-lg font-bold text-nord-9">
              Work Experience
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-heading font-bold text-nord-0">
                  Chief Operating Officer (COO)
                </h3>
                <p className="font-body text-nord-9">UNLEFT</p>
                <p className="font-body mt-1 text-sm text-nord-2">
                  Handling frontend development, maintaining design hierarchy,
                  and ensuring responsiveness across all projects. Core
                  responsibilities: finalizing and maintaining design hierarchy,
                  ensuring responsive design, leading frontend development.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mt-6">
            <h2 className="font-heading text-lg font-bold text-nord-9">
              Education
            </h2>
            <div className="mt-4">
              <h3 className="font-heading font-bold text-nord-0">
                BSc in Software Engineering
              </h3>
              <p className="font-body text-nord-2">
                Daffodil International University
              </p>
              <p className="font-body text-sm text-nord-3">2025 - Present</p>
            </div>
          </section>

          {/* Skills */}
          <section className="mt-6">
            <h2 className="font-heading text-lg font-bold text-nord-9">
              Skills & Technologies
            </h2>
            <p className="font-body mt-2 text-nord-1">
              HTML, CSS, JavaScript, TypeScript, Node.js, React, Tailwind CSS,
              Git, GitHub, CLI tools, Figma. Responsive web design, design
              hierarchy, frontend development.
            </p>
          </section>

          {/* Projects */}
          <section className="mt-6">
            <h2 className="font-heading text-lg font-bold text-nord-9">
              Selected Projects
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-nord-1">
              <li>
                <strong className="font-heading text-nord-0">
                  UNLEFT Company Website
                </strong>{" "}
                — Official company website; design hierarchy and responsiveness
                (starrynight-web.github.io/unleft/)
              </li>
              <li>
                <strong className="font-heading text-nord-0">
                  Eduplex DIU Learning Platform
                </strong>{" "}
                — Comprehensive learning platform for Daffodil International
                University (eduplex-diu.unleft.space/)
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}
