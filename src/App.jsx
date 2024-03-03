import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Main from "./components/Main";
import Deals from "./components/Deals";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="bg-gray-100">
      <Navbar/>
      <Header/>
      <Main/>
      <Deals/>
      <Footer/>
    </div>
  )
}

export default App
