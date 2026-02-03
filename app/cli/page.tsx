"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSplash } from "@/components/SplashContext";
import { THEMES, THEME_PALETTES, type ThemeId } from "./themes";

const SKILLS = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Bash",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mahtabul-al-nahian-42osix9/",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/djrcx420/",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/al_nahian_mahtabul/",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const MusicStatus = () => {
  const { userWantsMusic, setUserWantsMusic } = useSplash();

  return (
    <div className="mt-2">
      <p>
        Now Playing:{" "}
        <span className="text-[var(--cli-prompt-user)]">
          End of Wandering Shorekeeper&apos;s Piano Theme
        </span>
      </p>
      <div className="flex items-center gap-4 mt-1">
        <p>
          Status:{" "}
          <span
            className={
              userWantsMusic
                ? "text-[var(--cli-command)]"
                : "text-[var(--cli-error)]"
            }
          >
            {userWantsMusic ? "Enabled" : "Disabled"}
          </span>
        </p>
        <button
          onClick={() => setUserWantsMusic(!userWantsMusic)}
          className="text-[var(--cli-accent)] hover:underline cursor-pointer select-none"
        >
          [ {userWantsMusic ? "Disable" : "Enable"} Music ]
        </button>
      </div>
    </div>
  );
};

const ASCII_HEADER = `
██████╗      ██╗██████╗  ██████╗██╗  ██╗
██╔══██╗     ██║██╔══██╗██╔════╝╚██╗██╔╝
██║  ██║     ██║██████╔╝██║      ╚███╔╝ 
██║  ██║██   ██║██╔══██╗██║      ██╔██╗ 
██████╔╝╚█████╔╝██║  ██║╚██████╗██╔╝ ██╗
╚═════╝  ╚════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
`;

export default function CliPage() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<
    { cmd: string; content: React.ReactNode }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeId>("nord-dark");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { userWantsMusic, setUserWantsMusic } = useSplash();

  const theme = THEME_PALETTES[currentTheme];

  useEffect(() => {
    // Fake loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleClick = () => inputRef.current?.focus();
    document.addEventListener("click", handleClick);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const addToHistory = (cmd: string, content?: React.ReactNode) => {
    setHistory((prev) => [...prev, { cmd, content }]);
  };

  const handleCommand = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      setInput("");

      if (!cmd) {
        addToHistory("");
        return;
      }

      switch (cmd) {
        case "help":
          addToHistory(
            cmd,
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-2xl">
              <div>
                <span className="text-[var(--cli-prompt-host)]">welcome</span> -
                Display bio
              </div>
              <div>
                <span className="text-[var(--cli-prompt-host)]">skills</span> -
                List technical skills
              </div>
              <div>
                <span className="text-[var(--cli-prompt-host)]">about</span> -
                Professional identity
              </div>
              <div>
                <span className="text-[var(--cli-prompt-host)]">
                  experience
                </span>{" "}
                - Work history
              </div>
              <div>
                <span className="text-[var(--cli-prompt-host)]">projects</span>{" "}
                - View projects
              </div>
              <div>
                <span className="text-[var(--cli-prompt-host)]">music</span> -
                Toggle background music
              </div>
              <div>
                <span className="text-[var(--cli-prompt-host)]">theme</span> -
                Toggle light/dark theme
              </div>
              <div>
                <span className="text-[var(--cli-prompt-host)]">portfetch</span>{" "}
                - System information
              </div>
              <div>
                <span className="text-[var(--cli-prompt-host)]">contact</span> -
                Social links
              </div>
              <div>
                <span className="text-[var(--cli-prompt-host)]">home</span> -
                Return to GUI
              </div>
              <div>
                <span className="text-[var(--cli-prompt-host)]">reboot</span> -
                Reload system
              </div>
              <div>
                <span className="text-[var(--cli-prompt-host)]">clear</span> -
                Clear terminal
              </div>
            </div>,
          );
          break;

        case "clear":
          setHistory([]);
          break;

        case "welcome":
          addToHistory(
            cmd,
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[var(--cli-prompt-host)]">
                Mahtabul Al Nahian
              </h3>
              <p className="text-[var(--cli-desc)]">
                Chief Operating Officer (COO) & Frontend Developer at UNLEFT
              </p>
              <p>
                I&apos;m a frontend engineer from Bangladesh specializing in
                react and typescript with experience of 1+ years. I&apos;m
                currently studying BSc in Software Engineering from Daffodil
                International University.
              </p>
            </div>,
          );
          break;

        case "skills":
          addToHistory(
            cmd,
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-2">
              {SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 p-2 border border-[var(--cli-border)] rounded bg-[var(--cli-card-bg)]"
                >
                  <div className="relative w-5 h-5 shrink-0">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>,
          );
          break;

        case "about":
          addToHistory(
            cmd,
            <div className="space-y-4 max-w-3xl">
              <div>
                <h3 className="text-[var(--cli-prompt-host)] font-bold mb-1">
                  Professional Identity
                </h3>
                <p>
                  As COO at UNLEFT, I handle the frontend development while
                  maintaining design hierarchy and responsiveness across all
                  projects. I&apos;m dedicated to creating clean, functional,
                  and user-friendly web experiences.
                </p>
                <p className="mt-2">
                  I want people to describe me as a responsible co-worker and
                  team member. My dedication and work experience set me apart
                  from others in similar roles.
                </p>
              </div>
              <div>
                <h3 className="text-[var(--cli-prompt-host)] font-bold mb-1">
                  Educational Background
                </h3>
                <p>BSc in Software Engineering</p>
                <p>Daffodil International University</p>
                <p className="text-[var(--cli-desc)]">2025 - Present</p>
              </div>
              <div>
                <h3 className="text-[var(--cli-prompt-host)] font-bold mb-1">
                  Currently Learning
                </h3>
                <ul className="list-disc list-inside">
                  <li>React</li>
                  <li>React Native</li>
                  <li>Mobile App Development</li>
                </ul>
              </div>
            </div>,
          );
          break;

        case "experience":
          addToHistory(
            cmd,
            <div className="space-y-6 max-w-3xl">
              <div>
                <h3 className="text-[var(--cli-prompt-host)] font-bold text-lg">
                  Professional Experience
                </h3>
                <div className="mt-2">
                  <h4 className="text-[var(--cli-desc)] font-bold">
                    Chief Operating Officer (COO)
                  </h4>
                  <p className="text-sm text-[var(--cli-accent)] mb-1">
                    UNLEFT
                  </p>
                  <p>
                    Handling frontend development, maintaining design hierarchy,
                    and ensuring responsiveness across all projects.
                  </p>
                  <p className="mt-2 text-sm italic opacity-80">
                    Core responsibilities: Finalizing and maintaining design
                    hierarchy, ensuring responsive design, leading frontend
                    development.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-[var(--cli-desc)] font-bold">
                  Company Website Development
                </h4>
                <p className="text-sm text-[var(--cli-accent)] mb-1">
                  UNLEFT Website
                </p>
                <p>
                  Developed and maintained the official company website with a
                  focus on design consistency and responsiveness.
                </p>
                <p className="mt-2 text-sm italic opacity-80">
                  Challenges: Maintaining design hierarchy across different
                  webpages and ensuring optimal experience across all screen
                  sizes.
                </p>
              </div>

              <div>
                <h4 className="text-[var(--cli-desc)] font-bold">
                  Learning Platform Development
                </h4>
                <p className="text-sm text-[var(--cli-accent)] mb-1">
                  Eduplex DIU
                </p>
                <p>
                  Contributed to a comprehensive learning platform for Daffodil
                  International University students.
                </p>
                <p className="mt-2 text-sm italic opacity-80">
                  Focus: Design hierarchy, responsiveness, and user experience
                  for educational content.
                </p>
              </div>
            </div>,
          );
          break;

        case "projects":
          addToHistory(
            cmd,
            <div className="space-y-6 max-w-3xl">
              <div className="border-l-2 border-[var(--cli-prompt-host)] pl-4">
                <h3 className="text-[var(--cli-prompt-host)] font-bold text-lg">
                  UNLEFT Company Website
                </h3>
                <p className="mb-2">
                  The official website for UNLEFT company, designed and
                  developed with a focus on minimalism, responsiveness, and
                  clear information hierarchy.
                </p>
                <div className="flex flex-wrap gap-2 mb-2 text-xs text-[var(--cli-desc)]">
                  <span>HTML</span>
                  <span>•</span>
                  <span>CSS</span>
                  <span>•</span>
                  <span>JavaScript</span>
                  <span>•</span>
                  <span>Responsive Design</span>
                </div>
                <a
                  href="https://starrynight-web.github.io/unleft/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--cli-command)] hover:underline"
                >
                  View Project →
                </a>
              </div>

              <div className="border-l-2 border-[var(--cli-prompt-host)] pl-4">
                <h3 className="text-[var(--cli-prompt-host)] font-bold text-lg">
                  Eduplex DIU Learning Platform
                </h3>
                <p className="mb-2">
                  A comprehensive learning platform for students of Daffodil
                  International University, featuring organized educational
                  content with a focus on usability.
                </p>
                <div className="flex flex-wrap gap-2 mb-2 text-xs text-[var(--cli-desc)]">
                  <span>React</span>
                  <span>•</span>
                  <span>TypeScript</span>
                  <span>•</span>
                  <span>Tailwind CSS</span>
                  <span>•</span>
                  <span>Responsive Design</span>
                </div>
                <a
                  href="https://eduplex-diu.unleft.space/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--cli-command)] hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>,
          );
          break;

        case "music":
          addToHistory(cmd, <MusicStatus />);
          break;

        case "theme":
          const newTheme =
            currentTheme === "nord-dark" ? "nord-light" : "nord-dark";
          setCurrentTheme(newTheme);
          addToHistory(
            cmd,
            <div>
              <p>
                Theme switched to{" "}
                <span className="text-[var(--cli-prompt-host)]">
                  {newTheme}
                </span>
              </p>
            </div>,
          );
          break;

        case "contact":
          addToHistory(
            cmd,
            <div className="flex gap-6 mt-2">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--cli-text)] transition-all hover:text-[var(--cli-accent)] hover:-translate-y-1 hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>,
          );
          break;

        case "portfetch":
          addToHistory(
            cmd,
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mt-4">
              <div className="relative w-48 h-48 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-2 font-mono">
                <div className="text-[var(--cli-prompt-host)] font-bold text-xl mb-4">
                  mahtab@portfolio
                </div>
                <div className="flex gap-4">
                  <span className="text-[var(--cli-prompt-host)] font-bold w-24">
                    Name
                  </span>{" "}
                  <span>Mahtabul Al Nahian</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-[var(--cli-prompt-host)] font-bold w-24">
                    Role
                  </span>{" "}
                  <span>Frontend Dev & COO</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-[var(--cli-prompt-host)] font-bold w-24">
                    Company
                  </span>{" "}
                  <span>Unleft LLC</span>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="text-[var(--cli-prompt-host)] font-bold w-24 shrink-0">
                    Skills
                  </span>{" "}
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.map((skill) => (
                      <div
                        key={skill.name}
                        className="relative w-5 h-5"
                        title={skill.name}
                      >
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <span className="text-[var(--cli-prompt-host)] font-bold w-24 shrink-0">
                    Contact
                  </span>{" "}
                  <div className="flex gap-4">
                    {SOCIAL_LINKS.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--cli-text)] transition-all hover:text-[var(--cli-accent)] hover:scale-110"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <div className="w-8 h-4 bg-[#2e3440]"></div>
                  <div className="w-8 h-4 bg-[#3b4252]"></div>
                  <div className="w-8 h-4 bg-[#434c5e]"></div>
                  <div className="w-8 h-4 bg-[#4c566a]"></div>
                  <div className="w-8 h-4 bg-[#d8dee9]"></div>
                  <div className="w-8 h-4 bg-[#e5e9f0]"></div>
                  <div className="w-8 h-4 bg-[#eceff4]"></div>
                  <div className="w-8 h-4 bg-[#8fbcbb]"></div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-4 bg-[#88c0d0]"></div>
                  <div className="w-8 h-4 bg-[#81a1c1]"></div>
                  <div className="w-8 h-4 bg-[#5e81ac]"></div>
                  <div className="w-8 h-4 bg-[#bf616a]"></div>
                  <div className="w-8 h-4 bg-[#d08770]"></div>
                  <div className="w-8 h-4 bg-[#ebcb8b]"></div>
                  <div className="w-8 h-4 bg-[#a3be8c]"></div>
                  <div className="w-8 h-4 bg-[#b48ead]"></div>
                </div>
              </div>
            </div>,
          );
          break;

        case "home":
          setIsExiting(true);
          setTimeout(() => {
            router.push("/?skip=true");
          }, 700);
          break;

        case "reboot":
          window.location.href = "/";
          break;

        default:
          addToHistory(
            cmd,
            <span className="text-[var(--cli-error)]">
              Command not found: {cmd}. Type 'help' for available commands.
            </span>,
          );
      }
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden font-mono text-[var(--cli-text)] bg-[var(--cli-bg)] selection:bg-[var(--cli-prompt-host)] selection:text-[var(--cli-bg)]`}
      style={
        {
          "--cli-bg": theme.bg,
          "--cli-text": theme.text,
          "--cli-prompt-user": theme.promptUser,
          "--cli-prompt-host": theme.promptHost,
          "--cli-command": theme.command,
          "--cli-desc": theme.desc,
          "--cli-usage": theme.usage,
          "--cli-card-bg": currentTheme === "nord-dark" ? "#3b4252" : "#e5e9f0",
          "--cli-border": currentTheme === "nord-dark" ? "#4c566a" : "#d8dee9",
          "--cli-error": "#bf616a",
          "--cli-accent": currentTheme === "nord-dark" ? "#81a1c1" : "#5e81ac",
        } as React.CSSProperties
      }
    >
      <div
        className="h-full overflow-y-auto p-4 md:p-8"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="max-w-4xl mx-0 w-full">
          {isLoading ? (
            <div className="animate-pulse">
              <span className="text-[var(--cli-prompt-host)]">➜</span>
              <span className="ml-2">Initializing DJRCX CLI v2.0.0...</span>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <p>Welcome to Mahtab's CLI.</p>
              </div>

              <pre className="text-[0.5rem] sm:text-[0.6rem] md:text-xs leading-none text-[var(--cli-prompt-host)] font-bold mb-8 select-none whitespace-pre overflow-x-auto">
                {ASCII_HEADER}
              </pre>

              <div className="mb-8">
                <p>Type &apos;help&apos; to see available commands.</p>
              </div>

              <div className="space-y-2">
                {history.map((item, i) => (
                  <div key={i} className="mb-4">
                    <div className="flex items-center">
                      <span className="mr-2 text-[var(--cli-prompt-host)]">
                        ➜
                      </span>
                      <span className="mr-2 text-[var(--cli-accent)]">~</span>
                      <span>{item.cmd}</span>
                    </div>
                    {item.content && (
                      <div className="mt-1 whitespace-pre-wrap">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center mt-4">
                <span className="mr-2 text-[var(--cli-prompt-host)]">➜</span>
                <span className="mr-2 text-[var(--cli-accent)]">~</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  className="bg-transparent border-none outline-none flex-1 font-mono text-[var(--cli-text)] placeholder-gray-500"
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
              <div ref={bottomRef} />
            </>
          )}
        </div>
      </div>

      {/* Exit Transition Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-[#eceff4] pointer-events-none transition-transform duration-700 ease-in-out transform ${isExiting ? "translate-y-0" : "translate-y-full"}`}
      />
    </div>
  );
}
