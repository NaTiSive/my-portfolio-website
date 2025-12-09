import React from "react";
import pfImage from "../../assets/Profile.jpg";
import CV from "../../assets/Resume.pdf";
import gitIcon from "../../assets/skillsIcon/github.svg";
import linkedInIcon from "../../assets/skillsIcon/linkedin.svg";

export default function Hero() {
  return (
    <div className="flex flex-col items-center text-center px-4 mt-10">
      <img
        className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mb-8 shadow-xl"
        src={pfImage}
        alt="Nattakorn Profile picture"
      />
      <h1 className="text-4xl md:text-6xl font-primary font-bold">
        NATTAKORN KLANGKHONG
      </h1>

      <h2 className="text-xl md:text-2xl font-secondary text-gray-600 mt-4">
        Software Engineer Intern
      </h2>

      <p className="text-base md:text-lg font-secondary max-w-2xl mt-6 leading-relaxed text-gray-700">
        Third-year Computer Science student focused on building high-quality
        software solutions across the entire development cycle. Proficient in
        both Front-End (React) and Back-End (Node.js/MySQL), with strong
        problem-solving abilities using core languages like Python, Java, and
        C++. Quick to learn and adapt to new technologies.
      </p>

      {/* Social Icons with Hover Effect */}
      <div className="flex flex-row gap-8 pt-8 pb-8">
        <a
          href="https://github.com/NaTiSive"
          className="hover:scale-110 transition-transform"
        >
          <img className="w-10 md:w-12" src={gitIcon} alt="github icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/nattakorn-klangkhong/"
          className="hover:scale-110 transition-transform"
        >
          <img
            className="w-10 md:w-12"
            src={linkedInIcon}
            alt="linkedin icon"
          />
        </a>
      </div>

      <a href={CV}>
        <button
          download
          className="cursor-pointer bg-black text-white px-6 py-3 rounded-full font-secondary font-semibold hover:bg-gray-800 transition-colors shadow-lg"
        >
          Download CV
        </button>
      </a>
    </div>
  );
}
