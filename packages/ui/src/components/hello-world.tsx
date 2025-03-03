const HelloWorld = ({
  className = "bg-red-700",
}: {
  className?: string;
}) => {
  return <h1 className={className}>Hello World</h1>;
};

export { HelloWorld };
