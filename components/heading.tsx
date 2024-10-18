interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
  return (
    <h1 className="= font-rubik text-5xl font-bold uppercase text-secondary">
      {children}
    </h1>
  );
};
