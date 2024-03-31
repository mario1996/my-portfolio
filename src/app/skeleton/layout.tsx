import Header from "../header/page";
import Footer from "../footer/page";

export default function Skeleton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="content-center flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
