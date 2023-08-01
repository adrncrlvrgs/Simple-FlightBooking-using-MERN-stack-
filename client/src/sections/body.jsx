import React from "react";
import customGrdnt from './body.module.css'
import plane from '../assets/plane.png'
import Form from "./form";
const Body = () => {
    return(
        <>
            <div className={`w-full h-[250px] absolute flex justify-end ${customGrdnt["custom-gradient"]}`} style={{overflow: "hidden"}} >
               <div className="w-1/2 ">
                <img src={plane} style={{scale: "80%"}} />
               </div>
            </div>
            <div className="relative">
                <section className={`w-full flex z-10 px-10 py-5 top-0 left-0 `}>
                    <div className=" m-5 container">
                        <h1 className="text-3xl text-white font-bold">Start Traveling Now</h1>
                        <p className="text-white font-medium">Get flights and hotels worldwide for your trip with the best deals</p>
                        <button className="rounded-full text-slate-300 p-4 mt-2 hover:text-slate-100 bg-cyan-950/50 hover:bg-cyan-950" >Start Booking</button>    
                    </div>
                </section>
                <section className="w-full z-20">
                    <div className="container w-4/5 mx-auto px-10">
                        <Form/>
                    </div>
                </section>
                <div className=" relative absolute">
                   Blank for now
                </div>
                
            </div>
        </>
    )
}

export default Body;