import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 sliderGradient w-1/2 mx-auto">
      <div className="w-full mx-auto max-w-screen-xl p-4 text-center md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 Mário Baldé
        </span>
        <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 space-x-3 sm:mt-0">
          <li className="hover:scale-110">
            <Link
              href="https://linkedin.com/in/mário-baldé-a0187a140"
              target="_blank"
            >
              <Image
                src="/images/linkedinIcon.svg"
                alt="Mario Balde Linkedin"
                loading="lazy"
                width={30}
                height={30}
              />
            </Link>
          </li>
          <li className="hover:scale-110">
            <Link href="https://github.com/mario1996" target="_blank">
              <Image
                src="/images/githubIconWhite.svg"
                alt="Mario Balde github"
                loading="lazy"
                width={30}
                height={30}
              />
            </Link>
          </li>
          <li className="hover:scale-110">
            <Link href="mailto:mario.balde@gmail.com" target="_blank">
              <Image
                src="/images/envelopeIcon.svg"
                alt="Mario Balde email"
                loading="lazy"
                width={30}
                height={30}
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
