import Link from "next/link";
import { ReactNode } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { ThemeToggle } from "./themeToggle";
import FullScreenDrawer from "./drawer";

interface LayoutProps {
  children: ReactNode;
}

const NavLinks = ({ vertical = false }: { vertical?: boolean }) => {
  const links = [
    {
      label: "HOME",
      href: "/",
    },
    {
      label: "ARTICLES",
      href: "/blog",
    },
    {
      label: "ABOUT ME",
      href: "/about",
    },
  ];

  return (
    <ul
      className={`flex justify-start ${
        vertical
          ? "flex-col text-2xl divide-y-2 divide-accent"
          : "flex-row space-x-8"
      }`}
    >
      {links.map((link) => {
        return (
          <div
            key={link.label}
            className="flex hover:text-accent items-center h-full active:bg-accent-secondary"
          >
            <Link
              href={link.href}
              // className="h-14 hover:text-accent w-full"
              className={`flex justify-start ${
                vertical
                  ? "h-16 items-center"
                  : "hover:text-accent hover:underline h-full"
              }`}
            >
              {link.label}
            </Link>
          </div>
        );
      })}
    </ul>
  );
};

const SocialLinks = ({ size = "sm" }: { size?: "sm" | "lg" }) => {
  let sizeVal = 22;
  if (size == "lg") {
    sizeVal = 30;
  }

  return (
    <div className="flex space-x-4">
      <Link href="https://www.linkedin.com/in/ilivshits/" passHref>
        <FaLinkedin size={sizeVal} className="hover:text-accent" />
      </Link>
      <Link href="mailto:jarto666@gmail.com" passHref>
        <MdMail size={sizeVal} className="hover:text-accent" />
      </Link>
    </div>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-nunito flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background text-foreground border-b-4 border-secondary">
        <nav className="max-w-screen-lg mx-auto py-4 px-4 w-full">
          <div className="flex items-center w-full">
            {/* Logo */}
            <div className="font-syncopate text-2xl mr-8">
              <Link href="/" className="hover:text-accent">
                TECHQUILL
              </Link>
            </div>

            {/* Nav Links and Socials (Desktop) */}
            <div className="md:flex flex-grow items-center hidden">
              {/* Nav Links */}
              <div className="flex-grow">
                <NavLinks></NavLinks>
              </div>

              {/* Socials */}
              <div className="flex space-x-6 items-center">
                <div className="flex px-4 py-2 border-accent-secondary border-2 rounded-md">
                  <SocialLinks></SocialLinks>
                </div>
                <div className="ml-40">
                  <ThemeToggle />
                </div>
              </div>
            </div>

            {/* Nav Links and Socials (Mobile) */}
            <div className="md:hidden flex flex-grow justify-end">
              <FullScreenDrawer>
                <div className="flex flex-col justify-between h-full">
                  <div className="mb-8 p-4">
                    <NavLinks vertical={true}></NavLinks>
                  </div>
                  <div className="flex justify-between flex-row bg-background p-4">
                    <ThemeToggle />
                    <SocialLinks size="lg"></SocialLinks>
                  </div>
                </div>
              </FullScreenDrawer>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow mx-auto w-full">{children}</main>

      <footer className="bg-background-secondary text-foreground text-center sm">
        <div className="py-4 max-w-screen-lg mx-auto px-4 w-full flex justify-center">
          <div className="flex space-x-4">
            <p>© Ilya Livshits</p>
            <SocialLinks></SocialLinks>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
