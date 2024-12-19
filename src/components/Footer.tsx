import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-purple-200 text-purple-700 text-lg md:text-2xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-6 space-y-6 md:space-y-0">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/dgsdbvs53/image/upload/v1734592053/WhatsApp_Image_2024-12-19_at_12.07.12_972f5ff0_fsktpw.jpg"
            alt="Footer"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Links Section */}
        <div className="text-center md:text-left">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="hover:text-purple-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/women" className="hover:text-purple-900">
                Women
              </Link>
            </li>
            <li>
              <Link href="/men" className="hover:text-purple-900">
                Men
              </Link>
            </li>
            <li>
              <Link href="/kids" className="hover:text-purple-900">
                Kids
              </Link>
            </li>
          </ul>
        </div>

        {/* WhatsApp Button */}
        <div className="flex justify-center md:justify-end">
          <a
            href="https://wa.me/+923363856003"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition duration-300 ease-in-out"
          >
            <FaWhatsapp size={24} />
            <span className="ml-2 text-lg">Chat with Us</span>
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center py-4 text-sm bg-purple-300">
        © 2024 A TO Z. All rights reserved.
      </div>
    </footer>
  );
}