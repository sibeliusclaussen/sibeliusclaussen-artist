import Link from "next/link";

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/sibeliusclaussen" },
  { label: "Linkedin", href: "https://linkedin.com/in/sibeliusclaussen" },
  { label: "Substack", href: "https://sibeliusclaussen.substack.com" },
];

export default function Footer() {
  return (
    <footer className="w-full px-8 py-4 flex items-center justify-between border-t border-gray-100 mt-24">
      {/* Left nav */}
      <nav className="flex items-center gap-5">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-gray-400 hover:text-gray-900 transition-colors duration-200"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Center logo */}
      <Link href="/" className="absolute left-1/2 -translate-x-1/2">
        <span className="text-xl font-semibold tracking-tight text-gray-900">
          sibelius
        </span>
        <span className="text-xl font-semibold tracking-tight text-gray-400">
          claussen
        </span>
      </Link>

      {/* Right social links */}
      <nav className="flex items-center gap-5">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-900 hover:text-gray-500 transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
