import Image from "next/image";

const MyProfile = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between sm:space-x-10">
      <div>
        <p className="font-bold text-xl sm:text-2xl py-2">Mário Baldé</p>
        <p className="font-bold text-base sm:text-l py-2">
          Software Developer - Frontend
        </p>
        <p className="text-justify text-sm sm:text-base">
          My journey into the world of programming has been driven by a desire
          to create meaningful and impactful software.
        </p>
        <p className="text-justify text-sm sm:text-base">
          I&apos;m a dedicated software developer with a passion for crafting
          innovative solutions.
        </p>
      </div>
      <div>
        <Image
          src="/images/profileImage.jpeg"
          alt="Mario Balde Profile Image"
          loading="lazy"
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default MyProfile;
