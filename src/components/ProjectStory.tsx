"use client";

import type { Project } from "@/data/projects";
import { useLocale } from "@/context/LocaleContext";

export default function ProjectStory({ project }: { project: Project }) {
  const { locale } = useLocale();
  const localized = project.content?.[locale];

  if (!localized) return null;

  return (
    <div className="w-full max-w-2xl mt-12 pt-10 border-t border-gray-100 space-y-6">
      <p className="text-lg sm:text-xl font-medium text-gray-900 leading-relaxed">
        {localized.summary}
      </p>
      <div className="space-y-4">
        {localized.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-sm sm:text-base text-gray-600 leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
