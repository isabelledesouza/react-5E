import './App.css';
import Hero from  './Components/Hero'
import Footer from  './Components/Footer'
import NavBar from  './Components/NavBar'
import Rooms from  './Components/Rooms'
import Testemonials from  './Components/Testemonials'



function App() {
  return (
    <>
    <div className="bg-p-bl">
      <NavBar/>
      <Hero/>
    </div>
    <div className="bg-w-f">
      <Rooms/>
    </div>
    <div className="bg-p-bl">
      <Testemonials/>
    </div>

   
    <div className="bg-p-bl">
      <Footer/>
    </div>
    </>
  )
    
    

}

export default App;
