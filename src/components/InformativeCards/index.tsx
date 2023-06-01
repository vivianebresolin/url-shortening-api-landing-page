import Card from "../Card";
import icon1 from "../../assets/icon-brand-recognition.svg";
import icon2 from "../../assets/icon-detailed-records.svg";
import icon3 from "../../assets/icon-fully-customizable.svg";

export default function InformativeCards() {
  return(
    <div className="grid grid-cols-3 gap-6 max-w-[1096px]">
      <Card
        src={icon1}
        title="Brand Recognition"
        text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
      />
      <Card
        src={icon2}
        title="Detailed Records"
        text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        paddingTop="pt-8"
      />
      <Card
        src={icon3}
        title="Fully Customizable"
        text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        paddingTop="pt-16"
      />
    </div>
  );
}