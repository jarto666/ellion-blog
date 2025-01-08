import Link from "next/link";

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
              className={`flex justify-start ${
                vertical
                  ? "h-16 items-center p-4 w-full"
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

export default NavLinks;
