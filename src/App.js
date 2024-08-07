import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skillls/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contacts/contact";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
     <Navbar />
     <Intro />
     <Skills />
     <Works/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
 