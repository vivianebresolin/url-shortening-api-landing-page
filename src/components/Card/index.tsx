interface CardProps {
  src: string;
  title: string;
  text: string;
  paddingTop?: string;
}

export default function Card({src, title, text, paddingTop = 'pt-0'}: CardProps) {
  return(
    <div className={paddingTop}>
      <div className="bg-white px-6 py-8 relative">
        <div className="bg-very-dark-blue rounded-full w-16 h-16 flex justify-center items-center absolute -top-8">
          <img src={src} className="w-8"/>
        </div>
        <h1 className="font-bold text-lg mb-3 mt-5">{title}</h1>
        <p className="text-grayish-violet leading-relaxed">{text}</p>
      </div>
    </div>
  );
}