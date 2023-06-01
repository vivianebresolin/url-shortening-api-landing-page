import InformativeCards from "../InformativeCards";

export default function SectionTwo() {
  return(
    <section className="bg-light-gray mt-32 w-full flex flex-col items-center py-20">
      <div className="w-full flex flex-col items-center mb-20">
        <h2 className="text-3xl font-bold mb-3">Advanced Statistics</h2>
        <p className="text-grayish-violet w-1/3 leading-relaxed text-center">Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>
      <div className="relative">
        <div className="border-b-[6px] border-solid border-cyan h-6 w-full z-0 absolute top-24"></div>
        <InformativeCards/>
      </div>
    </section>
  );
}