import Link from "next/link";

const AboutMe = () => {
  return (
    <>
      <p className="font-bold text-3xl py-2">About me</p>
      <p className="text-justify">
        My expertise primarily lies in leveraging the power of JavaScript, more
        concretely React, to build dynamic, responsive web applications that not
        only look great but also deliver exceptional user experiences. In my
        past experiences learned to implement Typescript which has become an
        integral part of my development toolkit, empowering me to write safer
        and more maintainable code.
      </p>
      <p className="text-justify">
        While I&apos;ve made significant strides in these areas, I&apos;m
        constantly seeking opportunities to deepen my knowledge and refine my
        skills. Whether it&apos;s staying updated on the latest advancements,
        exploring best practices, or diving into new technologies, I thrive on
        the continuous learning journey that comes with being a developer.
      </p>
      <p className="text-justify">
        For more information about my experience and skills, please check out my
        curriculum{" "}
        <Link href="/cv" className="text-blue-700 underline">
          here
        </Link>
        .
      </p>
    </>
  );
};

export default AboutMe;
