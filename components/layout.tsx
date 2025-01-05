import Link from "next/link";
import { ReactNode } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={`font-nunito flex flex-col min-h-screen`}>
      <header className="flex justify-between border-b-4">
        <nav className="max-w-screen-lg mx-auto py-4 px-4 w-full">
          <div className="flex items-center w-full">
            {/* Left side (Logo and Nav links) */}
            <div className="font-syncopate text-3xl mr-8">TECHQUILL</div>
            <ul className="flex justify-start space-x-8 flex-grow">
              <li className="flex items-center justify-center">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
            {/* Right side (Socials Section) */}
            <div className="flex space-x-4">
              <Link href="mailto:jarto666@gmail.com" passHref>
                <MdMail size={22} />
              </Link>
              <Link href="https://www.linkedin.com/in/ilivshits/" passHref>
                <FaLinkedin size={22} />
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow mx-auto w-full">{children}</main>

      <footer className="bg-secondary text-white text-center">
        <div className="py-4 max-w-screen-lg mx-auto px-4 w-full">
          <p>© 2025 My Blogging Platform</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
