import React from "react";
import { TypeAnimation } from "react-type-animation";
import SectionTemplate from "../Components/SliderSection";
import SectionSeperater from "../Components/Seperater";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

SectionTemplate;
const Home = () => {
  return (
    <div>
      <section className="text-center mt-40 mb-20  ">
        <h2 className="font-semibold  md: text-2xl lg:text-3xl   text-yellow-400 tracking-wide  drop-shadow-lg transition duration-500 ease-in-out hover:text-yellow-500 m-3 ">
          Publish your passions, your way
        </h2>
        <p className="font-bold m-4 md:text-lg lg:text-xl text-slate-500">
          Create a unique and beautiful blog easily.
        </p>
        <Link to="/404">
          <button className="bg-yellow-600 p-3 rounded-lg text-white font-bold font-mono transition duration-500 ease-in-out hover:bg-yellow-400 hover:text-black">
            Create Your Blog
          </button>
        </Link>
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
        <div className="m-6 z-10 flex flex-col">
          <h2 className="text-emerald-900 font-medium m-4 text-sm md:text-xl lg:text-3xl ">
            Choose the perfect design
          </h2>
          <TypeAnimation
            sequence={[
              "Building a digital presence is essential in today's fast-paced, tech-driven world.A well-crafted blog not only showcases your ideas but also connects you with like-minded individuals.Whether you're sharing knowledge, expressing creativity, or documenting your journey,having an engaging platform is key.Designing a blog involves more than just aesthetics it requires intuitive navigation,responsive design, and optimized performance to deliver a seamless experience across devices. With the right approach, your blog can become a space where thoughts flourish, discussions thrive, and lasting connections are made. Explore, create, and let your voice be heard.",
            ]}
            className="text-white w-full m-4 md:w-3/4 font-bold text-xs md:text-lg"
            speed={80}
            repeat={1}
            wrapper="p"
          />
        </div>
      </section>
      <SectionTemplate
        heading="Earn money"
        paragraph="Get paid for your hard work. Google AdSense can automatically display relevant targeted ads on your blog so that you can earn income by posting about your passion."
        imgSrc="src/assets/Money.jpg"
      />
      <SectionSeperater />
      <SectionTemplate
        heading="Know your audience"
        paragraph="Find out which posts are a hit with Blogger’s built-in analytics. You’ll see where your audience is coming from and what they’re interested in. You can even connect your blog directly to Google Analytics for a more detailed look."
        imgSrc="src/assets/audience.jpg"
        reverse={true}
      />
      <SectionSeperater />
      <SectionTemplate
        heading={"Hang onto your memories"}
        paragraph={
          "Save the moments that matter. Blogger lets you safely store thousands of posts, photos, and more with Google."
        }
        imgSrc={"src/assets/Memory.jpg"}
      />
      <Footer />
    </div>
  );
};

export default Home;
