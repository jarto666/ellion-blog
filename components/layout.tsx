import Link from "next/link";
import { ReactNode } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { ThemeToggle } from "./themeToggle";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-nunito flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background text-foreground border-b-4 border-secondary">
        <nav className="max-w-screen-lg mx-auto py-4 px-4 w-full">
          <div className="flex items-center w-full">
            {/* Left side (Logo and Nav links) */}
            <div className="font-syncopate text-2xl mr-8">
              <Link href="/" className="hover:text-accent">
                TECHQUILL
              </Link>
            </div>
            <ul className="flex justify-start space-x-8 flex-grow">
              <li className="flex items-center justify-center">
                <Link href="/" className="hover:underline hover:text-accent">
                  Home
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link
                  href="/blog"
                  className="hover:underline hover:text-accent"
                >
                  Articles
                </Link>
              </li>
              <li className="flex items-center justify-center">
                <Link
                  href="/about"
                  className="hover:underline hover:text-accent"
                >
                  About me
                </Link>
              </li>
            </ul>
            {/* Right side (Socials Section) */}
            <div className="flex space-x-6 items-center">
              <div className="flex space-x-4 px-4 py-2 border-accent-secondary border-2 rounded-md">
                <Link href="mailto:jarto666@gmail.com" passHref>
                  <MdMail size={22} className="hover:text-accent" />
                </Link>
                <Link href="https://www.linkedin.com/in/ilivshits/" passHref>
                  <FaLinkedin size={22} className="hover:text-accent" />
                </Link>
              </div>
              <div className="ml-40">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow mx-auto w-full">{children}</main>

      <footer className="bg-background-secondary text-foreground text-center">
        <div className="py-4 max-w-screen-lg mx-auto px-4 w-full flex justify-center">
          <div className="flex space-x-4">
            <p>© Ilya Livshits</p>
            <Link href="mailto:jarto666@gmail.com" passHref>
              <MdMail size={22} className="hover:text-accent" />
            </Link>
            <Link href="https://www.linkedin.com/in/ilivshits/" passHref>
              <FaLinkedin size={22} className="hover:text-accent" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
