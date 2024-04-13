import Header from "../components/header";
import Footer from "../components/footer";

export default function Skeleton({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="content-center flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
