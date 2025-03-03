const HelloWorld = ({
  className = "bg-green-700",
}: {
  className?: string;
}) => {
  return <h1 className={className}>Helloooo World</h1>;
};

export { HelloWorld };
