export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://portfolio.unleft.space/#person",
        name: "Mahtabul Al Nahian",
        jobTitle: "Chief Operating Officer (COO) & Frontend Developer",
        worksFor: {
          "@type": "Organization",
          name: "UNLEFT",
        },
        description:
          "Frontend Developer and COO at UNLEFT specializing in responsive web design, React, and Next.js.",
        url: "https://portfolio.unleft.space",
        image: "https://portfolio.unleft.space/images/mahtab.webp",
        sameAs: [
          "https://www.facebook.com/djrcx420/",
          "https://www.instagram.com/al_nahian_mahtabul/",
          "https://www.linkedin.com/in/mahtabul-al-nahian-42osix9/",
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Daffodil International University",
        },
        knowsAbout: [
          "Frontend Development",
          "Responsive Web Design",
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://portfolio.unleft.space/#website",
        name: "Mahtabul Al Nahian Portfolio",
        url: "https://portfolio.unleft.space",
        description:
          "Minimalist portfolio website of Mahtabul Al Nahian, Frontend Developer and COO at UNLEFT.",
        publisher: {
          "@id": "https://portfolio.unleft.space/#person",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://portfolio.unleft.space/#breadcrumbs",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://portfolio.unleft.space/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "CV",
            item: "https://portfolio.unleft.space/cv",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "CLI",
            item: "https://portfolio.unleft.space/cli",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
