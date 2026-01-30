export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mahtabul Al Nahian",
    jobTitle: "Chief Operating Officer (COO) & Frontend Developer",
    worksFor: {
      "@type": "Organization",
      name: "UNLEFT",
    },
    description:
      "Frontend developer specializing in responsive web design and development",
    url: "https://portfolio.unleft.space",
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
      "TypeScript",
      "Tailwind CSS",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
