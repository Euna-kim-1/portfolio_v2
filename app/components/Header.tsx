import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
      <Link href="/" className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-lg bg-amber-700 flex items-center justify-center">
          <span className="text-white font-bold text-xl">E</span>
        </div>
        <span className="text-xl font-semibold text-gray-900">Euna.dev</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-gray-900 hover:text-amber-700 transition-colors font-medium">Home</Link>
        <Link href="/projects" className="text-gray-900 hover:text-amber-700 transition-colors font-medium">Projects</Link>
        <a href="#contact" className="text-gray-900 hover:text-amber-700 transition-colors font-medium">Contact</a>
      </nav>
    </header>
  );
}
