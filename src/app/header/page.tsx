import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white rounded-lg shadow m-4 sliderGradient w-11/12 sm:w-1/2 mx-auto">
      <div className="w-full mx-auto max-w-screen-xl p-4 text-center flex items-center justify-center gap-4">
        <Link
          href="/"
          className="hover:scale-110 hover:opacity-75 font-semibold text-lg"
        >
          Home
        </Link>
        <Link
          href="/cv"
          className="hover:scale-110 hover:opacity-75 font-semibold text-lg"
        >
          CV
        </Link>
      </div>
    </header>
  );
};

export default Header;
