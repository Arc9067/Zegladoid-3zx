import React from "react";
import logo from "../assets/logo.svg";

function About() {
  return (
    <section className="py-20 w-full">
      <div className="container ">
        <div
          id="aboutBg"
          className="p-8 rounded-tr-3xl rounded-bl-3xl w-full grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16"
        >
          <article className="flex flex-col gap-3">
            <h2 className="text-white text-2xl font-futuraXBlkBT font-bold">
              Fully Decentralized
            </h2>
            <h1 className="text-white text-4xl md:text-5xl font-futuraXBlkBT font-bold ">
              Online Cryptocurrency Fighting Platform
            </h1>
            <p className="max-w-[500px] text-white text-base font-normal leading-loose tracking-tight">
              The project is fully decentralized and community based. We just do
              our best to keep everyone together as an army. If you want to do
              something then do it, if someone asks for a hand out you can tell
              them that Pepe never paid for a thing. The project is fully
              decentralized and community based.{" "}
            </p>
          </article>
          <img src={logo} alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
