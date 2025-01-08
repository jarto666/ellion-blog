import { ReactNode } from "react";
import SocialLinks from "./socialLinks";
import Header from "./header";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-nunito flex flex-col min-h-screen bg-background text-foreground">
      <Header></Header>

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
