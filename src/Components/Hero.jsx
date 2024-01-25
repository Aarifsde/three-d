import React from "react";
import heroimg from "../Assets/heroimg.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["esign", "evelopement", "atabase"],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div
      name="hero"
      className="w-full h-screen bg-gradient-to-b from-blue-200 to-white"
    >
      <div className="max-w-screen-lg mx-auto px-4 h-full flex flex-col items-center justify-center md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl font-bold">
            We are Three-<span className="text-blue-500">D</span>
            <span className="text-blue-500">
              {text}
              <Cursor cursorColor="blue" cursorStyle="|" />
            </span>{" "}
          </h1>
          <p className="mr-10 my-4 text-sm leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            distinctio quasi delectus culpa quod tempora facilis aut illum
            nesciunt animi, necessitatibus fuga. Voluptatum adipisci molestias
            laudantium non harum reiciendis nobis amet magni distinctio repellat
            vel voluptas accusamus repellendus quis esse expedita, sequi debitis
            doloremque sapiente incidunt. Delectus adipisci aut, sed voluptatum
            maiores, totam molestiae omnis unde reprehenderit, ex perferendis
            voluptas eum sint aperiam voluptate laudantium.
          </p>
          <div>
            <button className="text-white w-fit px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              <Link to="Projects" smooth={true} duration={500}>
                Our Work
              </Link>
            </button>
          </div>
        </div>
        <div>
          <img
            src={heroimg}
            alt="hero profile"
            className="rounded-2xl mx-auto w-[150%] h-[150%] shadow-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
