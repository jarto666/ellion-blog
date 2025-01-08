import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

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

export default SocialLinks;
