import React from "react";
import pfImage from "../../assets/Profile.jpg";
import CV from "../../assets/Resume.pdf";
import gitIcon from "../../assets/skillsIcon/github.svg";
import linkedInIcon from "../../assets/skillsIcon/linkedin.svg";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <img
          className="rounded-full w-100 h-100 mt-20 mb-10"
          src={pfImage}
          alt="Nattakorn Profile picture"
        />
        <h1 className="text-6xl font-primary">NATTAKORN KLANGKHONG</h1>
        <br />
        <h2 className="text-2xl font-secondary">Intern software engineer</h2>
        <br />
        <p className="text-lg font-secondary w-300">
          Third-year Computer Science student passionate about Software
          Engineering. My expertise lies in front-end development, creating
          responsive and high-performance systems using HTML, CSS, JavaScript,
          and React. I also have experience with JavaFX for desktop apps and
          foundational knowledge in Flutter. I am committed to delivering
          intuitive user experiences through strong UX/UI principles. Seeking an
          internship to leverage my skills, gain real-world experience, and grow
          as a developer.
        </p>
        <div className="flex flex-row gap-10 pt-10 pb-5">
          <a href="https://github.com/NaTiSive">
            <img className="w-20" src={gitIcon} alt="github icon" />
          </a>
          <br />
          <a href="https://www.linkedin.com/in/nattakorn-klangkhong/">
            <img className="w-20 " src={linkedInIcon} alt="linkedin icon" />
          </a>
        </div>
        <a href={CV}>
          <button
            download
            className="border rounded-2xl p-2 font-secondary border-2 font-semibold hover:bg-gray-100"
          >
            Download CV
          </button>
        </a>
      </div>
    </>
  );
}
