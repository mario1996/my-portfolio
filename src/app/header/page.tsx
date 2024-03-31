import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row content-center m-4 space-x-5 mx-auto">
      <Link href="/" className="underline hover:scale-110">
        Home
      </Link>
      <Link href="/cv" className="underline hover:scale-110">
        CV
      </Link>
    </div>
  );
};

export default Header;
