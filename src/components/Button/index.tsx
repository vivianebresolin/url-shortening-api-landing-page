interface ButtonProps {
  text: string;
  rounded?: boolean;
}

export default function Button({text, rounded}: ButtonProps) {
  const isRounded = rounded ? 'rounded-3xl' : '';
  return(
    <button className={`text-white bg-cyan py-2 px-7 ${isRounded}`}>{text}</button>
  );
}