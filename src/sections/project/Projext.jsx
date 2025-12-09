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
      />
      <ProjectCard
        image={KUrequestPic}
        projectName="Kasetsart University’s request submission"
        alt="montongmoon image"
        projectLink="https://github.com/CS211-671/cs211-project-sud-yod-tang-praw"
        linkTitle="Github"
      />
      <ProjectCard
        image={KUsportPic}
        projectName="KUSport&Activity : UX/UI Design"
        alt="montongmoon image"
        projectLink="https://www.figma.com/design/8N3r9IiscwI9JCOr8Mlgxc/KU-Sport---Activity?node-id=68-2&t=yYvXISaI7jEL97Hk-1"
        linkTitle="Figma"
      />
      <ProjectCard
        image={ParkinsonPic}
        projectName="Parkinson’s Disease Prediction Model"
        alt="montongmoon image"
        projectLink="https://github.com/NaTiSive/parkinson_prediction"
        linkTitle="Github"
      />
      <ProjectCard
        image={EyesightPic}
        projectName="Eyesight Besideyou"
        alt="montongmoon image"
        projectLink="https://github.com/NaTiSive/parkinson_prediction"
        linkTitle="Github"
      />
    </div>
    </>
  );
}
