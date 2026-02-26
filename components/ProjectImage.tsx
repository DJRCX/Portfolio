"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
};

export default function ProjectImage({ src, alt }: Props) {
  const [error, setError] = useState(false);

  if (error) return null;

  return (
    <div className="relative h-96 w-full bg-nord-4">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
        onError={() => setError(true)}
      />
    </div>
  );
}
