import Link from "next/link";

const LogoLink = () => {
  return (
    <>
      <div className="font-logo text-2xl flex justify-start">
        <Link href="/" className="hover:text-accent p-4">
          MUTEX<span className="text-accent">IS</span>
        </Link>
      </div>
    </>
  );
};

export default LogoLink;
