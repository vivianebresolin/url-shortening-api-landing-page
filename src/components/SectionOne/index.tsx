import Button from "../Button";
import mainImage from "../../assets/illustration-working.svg"

export default function SectionOne() {
  return(
    <section className="flex mt-20 items-center justify-between w-[1096px]">
      <div className="w-[50%]">
        <h1 className="text-7xl leading-tight font-bold">More than just shorter links</h1>
        <p className="text-grayish-violet mb-8 text-xl">Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <Button rounded text='Get Started'/>
      </div>
      <img src={mainImage} className="mx-[-25%]"/>
    </section>
  );
}