interface LinkProps {
  children: React.ReactNode;
}

export default function Link({children}: LinkProps) {
  return(
    <a href="#" className="text-grayish-violet">{children}</a>
  );
}