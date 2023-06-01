import Button from "../Button";
import bg from "../../assets/bg-boost-desktop.svg"

export default function LinkShortener() {
  return(
    <div className="bg-dark-violet relative w-[1096px] rounded-lg h-32">
      <img src={bg} className="z-0 rounded-lg w-full h-full"/>
      <div className="absolute top-1/2 -translate-y-2/4 flex w-full px-10">
        <input placeholder="Shorten a link here..." className="flex-1 py-2 px-4 rounded-md mr-4"/>
        <Button text="Shorten It!"/>
      </div>
    </div>
  );
}