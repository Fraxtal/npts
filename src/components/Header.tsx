import Link from "next/link";
import ThemeToggle from "./ThemeToggler";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/75 backdrop-blur-sm">
      <div className="mx-auto max-w-3xl px-8 py-6">
        <nav className="flex items-center justify-between">
          <ul className="flex gap-4 sm:gap-8">
            {navLinks.map((nav, id) => (
              <li key={id} className="link">
                <Link href={nav.href}>{nav.name}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 sm:gap-4">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}