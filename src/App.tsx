import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";

function App() {

  return (
    <div className="max-w-[1440px] flex flex-col items-center mx-auto overflow-hidden">
      <Header/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
    </div>
  )
}

export default App
