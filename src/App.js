import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skillls/skills";
import Works from "./components/Works/works";
function App() {
  return (
    <div className="App">
     <Navbar />
     <Intro />
     <Skills />
     <Works/>
    </div>
  );
}

export default App;
 