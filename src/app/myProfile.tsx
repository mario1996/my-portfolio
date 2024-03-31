import Link from "next/link";
import Image from "next/image";
import profileImg from "./profileImg.jpg";
import linkedinIcon from "./linkedinIcon.png";

const MyProfile = () => {
  return (
    <div className="flex flex-row justify-between space-x-10">
      <div>
        <p className="font-bold text-3xl py-2">Mário Baldé</p>
        <p className="font-bold text-xl">Software Developer - Frontend</p>
        <p className="text-justify">
          My journey into the world of programming has been driven by an
          insatiable curiosity and a desire to create meaningful, impactful
          software.
        </p>
        <p className="text-justify">
          I&apos;m a dedicated software developer with a passion for crafting
          innovative solutions.
        </p>
        <Link
          href="https://linkedin.com/in/mário-baldé-a0187a140"
          target="_blank"
        >
          <Image
            src={linkedinIcon}
            alt="profile image"
            loading="lazy"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <Image
        src={profileImg}
        alt="profile image"
        loading="lazy"
        className="rounded-full border-2 border-sky-500 w-1/3 h-1/3"
      />
    </div>
  );
};

export default MyProfile;
