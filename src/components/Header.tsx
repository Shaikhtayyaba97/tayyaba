import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-purple-200">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <div className="text-3xl md:text-4xl font-bold text-purple-700">A TO Z</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-lg md:text-2xl text-purple-700">
          <Link href="/" className="hover:text-purple-900">
            Home
          </Link>
          <Link href="/women" className="hover:text-purple-900">
            Women
          </Link>
          <Link href="/men" className="hover:text-purple-900">
            Men
          </Link>
          <Link href="/kids" className="hover:text-purple-900">
            Kids
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex gap-4 text-purple-700">
          <FaShoppingCart size={30} className="hover:text-purple-900 cursor-pointer" />
          <FaHeart size={30} className="hover:text-purple-900 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-center space-x-4 mt-2 text-lg text-purple-700">
        <Link href="/" className="hover:text-purple-900">
          Home
        </Link>
        <Link href="/women" className="hover:text-purple-900">
          Women
        </Link>
        <Link href="/men" className="hover:text-purple-900">
          Men
        </Link>
        <Link href="/kids" className="hover:text-purple-900">
          Kids
        </Link>
      </div>
    </header>
  );
}