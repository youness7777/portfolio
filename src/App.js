import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { SocialLinks } from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      
    </div>
  );
}

export default App;
