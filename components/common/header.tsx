import NavLinks from "./navLinks";
import SocialLinks from "./socialLinks";
import { ThemeToggle } from "./themeToggle";
import FullScreenDrawer from "./drawer";
import LogoLink from "./logo";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background text-foreground border-b-4 border-secondary">
      <nav className="max-w-screen-lg mx-auto w-full">
        <div className="flex items-center w-full">
          {/* Logo */}
          <div className="mr-4">
            <LogoLink />
          </div>

          {/* Nav Links and Socials (Desktop) */}
          <div className="md:flex flex-grow items-center hidden pr-4">
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
          <div className="md:hidden flex flex-grow justify-end p-4">
            <FullScreenDrawer>
              <div className="flex flex-col justify-between h-full">
                <div className="mb-8">
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
  );
};

export default Header;
