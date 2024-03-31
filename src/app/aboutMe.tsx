import Link from "next/link";

const AboutMe = () => {
  return (
    <>
      <p className="font-bold text-lg sm:text-2xl py-2">
        Crafting Exceptional User Experiences
      </p>
      <p className="text-justify text-sm sm:text-base">
        My expertise primarily lies in leveraging the power of JavaScript, more
        concretely React, to build dynamic, responsive web applications that not
        only look great but also deliver exceptional user experiences. In my
        past experiences learned to implement Typescript which has become an
        integral part of my development toolkit, empowering me to write safer
        and more maintainable code.
      </p>
      <p className="text-justify text-sm sm:text-base">
        While I&apos;ve made significant strides in these areas, I&apos;m
        constantly seeking opportunities to deepen my knowledge and refine my
        skills. Whether it&apos;s staying updated on the latest advancements,
        exploring best practices, or diving into new technologies, I thrive on
        the continuous learning journey that comes with being a developer.
      </p>
      <p className="text-justify text-sm sm:text-base">
        For more information about my experience and skills, please check out my
        curriculum{" "}
        <Link
          href="/cv"
          className="bg-gradient-to-r from-sky-500 via-sky-500 to-sky-500 bg-bottom bg-no-repeat bg-[length:100%_3px] hover:bg-[length:100%_100%] transition-[background-size]"
        >
          here
        </Link>
        .
      </p>
    </>
  );
};

export default AboutMe;
