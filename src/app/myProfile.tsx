import Image from "next/image";

const MyProfile = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between sm:space-x-10 items-center">
      <div className="basis-8/12">
        <p className="font-bold text-xl sm:text-2xl py-2 text-center sm:text-left">
          Mário Baldé
        </p>
        <p className="font-bold text-base sm:text-lg py-2 text-center sm:text-left">
          Software Engineer - Frontend
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
      <div className="basis-4/12 py-2 sm:py-0">
        <div className="w-1/2 h-1/2 sm:w-full sm:h-full relative inset-0 mx-auto">
          <Image
            src="/images/profileImage.jpeg"
            alt="Mario Balde Profile Image"
            loading="lazy"
            width={500}
            height={500}
            objectFit="cover"
            objectPosition="center"
            className="relative rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
