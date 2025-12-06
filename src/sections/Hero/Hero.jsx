import React from "react";
import pfImage from "../../assets/Profile.jpg";
import CV from "../../assets/Resume.pdf";

export default function Hero() {
  return (
    <>
      <img
        class="rounded-full w-100 h-100"
        src={pfImage}
        alt="Nattakorn Profile picture"
      />
      <h1 class="text-xl">Nattakorn Klangkhong</h1>
      <h2>Softvare Devloper</h2>
      <br />
      <p>
        Third-year Computer Science student passionate about Software
        Engineering. My expertise lies in front-end development, creating
        responsive and high-performance systems using HTML, CSS, JavaScript, and
        React. I also have experience with JavaFX for desktop apps and
        foundational knowledge in Flutter. I am committed to delivering
        intuitive user experiences through strong UX/UI principles. Seeking an
        internship to leverage my skills, gain real-world experience, and grow
        as a developer.
      </p>
      <div>
        <a href="https://github.com/NaTiSive">Github</a>
        <br />
        <a href="https://www.linkedin.com/in/nattakorn-klangkhong/">Linkedin</a>
      </div>
      <a href={CV}>
        <button download>
            resume
        </button>
      </a>
    </>
  );
}
