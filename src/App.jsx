import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <section className="text-center mt-40 mb-20  ">
        <h2 className="font-semibold  md: text-2xl lg:text-3xl   text-yellow-400 tracking-wide  drop-shadow-lg transition duration-500 ease-in-out hover:text-yellow-500 m-3 ">
          Publish your passions, your way
        </h2>
        <p className="font-bold m-4 md:text-lg lg:text-xl text-slate-500">
          Create a unique and beautiful blog easily.
        </p>
        <button className="bg-yellow-600 p-3 rounded-lg text-white font-bold font-mono transition duration-500 ease-in-out hover:bg-yellow-400 hover:text-black">
          Create Your Blog
        </button>
      </section>

      <section
        className="items-center text-start p-3 relative overflow-hidden h-96"
        style={{
          backgroundImage: `url('src/assets/Scenery.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8,
        }}
      >
        <div className="m-6 z-10 flex flex-col justify-end">
          <h2 className="text-emerald-900 font-medium m-4 ">
            Choose the perfect design
          </h2>
          <p className="text-white m-4 w-2/4 font-bold ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eos
            ducimus fugit officia asperiores error nihil harum aliquam adipisci,
            iste, et, ea eveniet consequatur! Earum id voluptate, doloribus
            officia cum non blanditiis placeat commodi aliquid, laborum ex dolor
            error perspiciatis veritatis eaque deserunt provident! Quo, libero
            ratione nostrum ex itaque aspernatur esse dolorem laboriosam sint
            expedita alias exercitationem reiciendis magni voluptatem minima,
            perferendis magnam, minus omnis quidem hic molestias cum debitis!
            Necessitatibus laboriosam dolor, officia eos vel voluptatibus! Cum
            et asperiores quis quisquam similique ullam ipsa. Dolor facere
            molestias commodi quis. Consequuntur cupiditate natus praesentium
            cum fuga ea dolore nostrum.
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
