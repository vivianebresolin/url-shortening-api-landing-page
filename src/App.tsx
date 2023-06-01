import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

function App() {

  return (
    <div className="max-w-[1440px] flex flex-col items-center mx-auto overflow-hidden">
      <Header/>
      <SectionOne/>
      <SectionTwo/>
    </div>
  )
}

export default App
