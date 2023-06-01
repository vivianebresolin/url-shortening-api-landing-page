import Button from "../Button";
import bg from "../../assets/bg-boost-desktop.svg"

export default function SectionThree() {
  return(
    <section className="bg-dark-violet relative">
      <img src={bg} className="z-0"/>
      <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl mb-4 text-white">Boost your links today</h1>
        <Button rounded text="Get Started"/>
      </div>
    </section>
  );
}