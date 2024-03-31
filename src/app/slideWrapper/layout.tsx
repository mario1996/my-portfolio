const SlideWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="flex flex-col p-10">{children}</div>;
};

export default SlideWrapper;
