
import cama from "../images/cama.jpg"
import CamaSize from "../images/bed-bedroom.svg"
import twoPeople from "../images/twoPeople.svg"
import  Line from "../images/title-line-blue.svg"


const Rooms  = () => {
    return (
        <div className=" md:container">
            <div className= "mb-8">
                <h3 className= "text-title-text  text-6xl text-dark-yellow ">Rooms</h3>
                <span><img src={Line} alt=""/></span>
            </div>
            <div className="grid gap-y-8  md:grid-cols-3"> 
                <div class="card bg-bege w-72 rounded-xl p-6">
                <a href="#0"> <img className="rounded-md" src={cama} alt="cama"/></a>
                <div class="description space-y-4">
                    <a className=" text-p-bl font-semibold text-xl transition hover:opacity-75" href="#0"><h2>Suite Deluxe</h2></a> 
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    
                    <div className="flex items-center justify-between">
                    <span><img src={CamaSize} alt="cama Icon"/>1 doble</span> 
                    <span><img src={twoPeople} alt="cama Icon"/>2</span>
                    <a href="#0" className="text-bege bg-dark-yellow hover:bg-gray-200  font-bold py-2 px-4 rounded-full   hover:text-p-bl duration-300">Book Now</a> 
                    </div>
                </div>

                </div>
                <div class="card bg-bege w-72 rounded-xl p-6">
                <a href="#0"> <img className="rounded-md" src={cama} alt="cama"/></a>
                <div class="description space-y-4">
                    <a className=" text-p-bl font-semibold text-xl transition hover:opacity-75" href="#0"><h2>Suite Deluxe</h2></a> 
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    
                    <div className="flex items-center justify-between">
                    <span><img src={CamaSize} alt="cama Icon"/>1 doble</span> 
                    <span><img src={twoPeople} alt="cama Icon"/>2</span>
                    <a href="#0" className="text-bege bg-dark-yellow hover:bg-gray-200  font-bold py-2 px-4 rounded-full   hover:text-p-bl duration-300">Book Now</a> 
                    </div>
                </div>
                </div>
                <div class="card bg-bege w-72 rounded-xl p-6">
                <a href="#0"> <img className="rounded-md" src={cama} alt="cama"/></a>
                <div class="description space-y-4">
                    <a className=" text-p-bl font-semibold text-xl transition hover:opacity-75" href="#0"><h2>Suite Deluxe</h2></a> 
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    
                    <div className="flex items-center justify-between">
                    <span><img src={CamaSize} alt="cama Icon"/>1 doble</span> 
                    <span><img src={twoPeople} alt="cama Icon"/>2</span>
                    <a href="#0" className="text-bege bg-dark-yellow hover:bg-gray-200  font-bold py-2 px-4 rounded-full   hover:text-p-bl duration-300">Book Now</a> 
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms