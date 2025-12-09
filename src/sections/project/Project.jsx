import ProjectCard from "../../common/ProjectCard";
import montongmoonPic from "../../assets/projectpic/Montongmoon.png";
import KUrequestPic from "../../assets/projectpic/KUrequest.png";
import KUsportPic from "../../assets/projectpic/KUsport&activities.png";
import ParkinsonPic from "../../assets/projectpic/Parkinson.png";
import EyesightPic from "../../assets/projectpic/Eyesight_Besideyou.png";

export default function Project() {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-primary">PROJECTS</h2>
        <ProjectCard
          image={montongmoonPic}
          projectName="MontongMoon"
          alt="montongmoon image"
          projectLink="https://github.com/NaTiSive/MontongMoon"
          linkTitle="Github"
          description="Web-based Durian Farm Management System built with React, Node.js, and MySQL to digitize inventory and optimize farm operations."
        />
        <ProjectCard
          image={KUrequestPic}
          projectName="Kasetsart University’s request submission"
          alt="montongmoon image"
          projectLink="https://github.com/CS211-671/cs211-project-sud-yod-tang-praw"
          linkTitle="Github"
          description="JavaFX-based desktop application for Kasetsart University’s request system, featuring robust multi-role access control for secure student and faculty workflow processing."
        />
        <ProjectCard
          image={EyesightPic}
          projectName="Eyesight Besideyou"
          alt="EyesightBesideyou image"
          projectLink="https://github.com/NaTiSive/EyesightBesideyou"
          linkTitle="Github"
          description="Real-time eye fatigue detection application built with Python (OpenCV, dlib). It monitors blink rates via webcam and triggers alerts if the frequency drops below the healthy threshold."
        />
        <ProjectCard
          image={ParkinsonPic}
          projectName="Parkinson’s Disease Prediction Model"
          alt="parkinson_prediction image"
          projectLink="https://github.com/NaTiSive/parkinson_prediction"
          linkTitle="Github"
          description="Developed a Machine Learning model for early Parkinson’s detection using voice data, achieving 71% accuracy and deployed on Hugging Face Spaces."
        />
        <ProjectCard
          image={KUsportPic}
          projectName="KUSport&Activity : UX/UI Design"
          alt="KUSport&Activity image"
          projectLink="https://www.figma.com/design/8N3r9IiscwI9JCOr8Mlgxc/KU-Sport---Activity?node-id=68-2&t=yYvXISaI7jEL97Hk-1"
          linkTitle="Figma"
          description="Conceptualized and designed a mobile-first UX/UI prototype for a university sports and activity booking system using Figma, strictly applying established Laws of UX to solve student pain points."
        />
      </div>
    </>
  );
}
