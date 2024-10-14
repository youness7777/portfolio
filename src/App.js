import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { SocialLinks } from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar/>
      <SocialLinks/>
      <Home/>
    </div>
  );
}

export default App;
