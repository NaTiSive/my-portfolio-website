import ProjectCard from "../../common/ProjectCard";
import montongmoonPic from "../../assets/projectpic/Montongmoon.png";
import KUrequestPic from "../../assets/projectpic/KUrequest.png";
import KUsportPic from "../../assets/projectpic/KUsport&activities.png";
import ParkinsonPic from "../../assets/projectpic/Parkinson.png";
import EyesightPic from "../../assets/projectpic/Eyesight_Besideyou.png";

export default function Project() {
  return (
    <>
      <h2 className="text-3xl font-primary">PROJECTS</h2>
      <ProjectCard
        image={montongmoonPic}
        projectName="MontongMoon"
        projectDate="june 2023 - june 2024"
        alt="montongmoon image"
        projectLink="https://github.com/NaTiSive/MontongMoon"
        linkTitle="Github"
      />
      <ProjectCard
        image={KUrequestPic}
        projectName="MontongMoon"
        projectDate="june 2023 - june 2024"
        alt="montongmoon image"
        projectLink="https://github.com/NaTiSive/MontongMoon"
        linkTitle="Github"
      />
      <ProjectCard
        image={KUsportPic}
        projectName="MontongMoon"
        projectDate="june 2023 - june 2024"
        alt="montongmoon image"
        projectLink="https://github.com/NaTiSive/MontongMoon"
        linkTitle="Github"
      />
      <ProjectCard
        image={ParkinsonPic}
        projectName="MontongMoon"
        projectDate="june 2023 - june 2024"
        alt="montongmoon image"
        projectLink="https://github.com/NaTiSive/MontongMoon"
        linkTitle="Github"
      />
      <ProjectCard
        image={EyesightPic}
        projectName="MontongMoon"
        projectDate="june 2023 - june 2024"
        alt="montongmoon image"
        projectLink="https://github.com/NaTiSive/MontongMoon"
        linkTitle="Github"
      />
    </>
  );
}
