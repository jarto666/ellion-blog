import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { ReactNode, useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

interface FullScreenDrawerProps {
  children: ReactNode;
}

const FullScreenDrawer: React.FC<FullScreenDrawerProps> = ({ children }) => {
  // export default function FullScreenDrawer: React.() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Automatically close the drawer on larger screens (md or larger)
      }
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Lock body scroll when the drawer is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up the effect
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  const ToggleButton = (
    <button className="outline-1 flex items-center" onClick={toggleDrawer}>
      <MdMenu size={22} className="hover:text-accent"></MdMenu>
    </button>
  );

  return (
    <div className="relative">
      {/* Toggle Button */}

      {ToggleButton}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-background-secondary text-foreground transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 flex flex-col${
          isOpen ? "w-full" : ""
        } xs:w-[400px] xs:max-w-full flex flex-col`}
      >
        {/* Close Button */}
        <div className="flex justify-between bg-background border-b-4 border-secondary">
          <div className="font-syncopate text-2xl mr-8 flex justify-start">
            <Link href="/" className="hover:text-accent p-4">
              MUTEXIS
            </Link>
          </div>
          <div className="p-4 flex justify-center items-center">
            {ToggleButton}
          </div>
        </div>

        {/* Drawer Content */}
        <div className="flex flex-col h-full">{children}</div>
      </div>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-background z-30 transition-opacity duration-300 ${
            isOpen ? "opacity-50 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default FullScreenDrawer;
