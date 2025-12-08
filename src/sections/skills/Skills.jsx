import SkillsList from "../../common/SkillsList";
import jsIcon from "../../assets/skillsIcon/js.svg";
import htmlIcon from "../../assets/skillsIcon/html.svg";
import bootstrapIcon from "../../assets/skillsIcon/bootstrap.svg";
import cIcon from "../../assets/skillsIcon/c.svg";
import cppIcon from "../../assets/skillsIcon/c++.svg";
import cssIcon from "../../assets/skillsIcon/css.svg";
import flutterIcon from "../../assets/skillsIcon/flutter.svg";
import javaIcon from "../../assets/skillsIcon/java.svg";
import mysqlIcon from "../../assets/skillsIcon/mysql.svg";
import nextjsIcon from "../../assets/skillsIcon/nextjs.svg";
import nodejsIcon from "../../assets/skillsIcon/nodejs.svg";
import pythonIcon from "../../assets/skillsIcon/python.svg";
import reactIcon from "../../assets/skillsIcon/react.svg";
import tailwindIcon from "../../assets/skillsIcon/tailwind.svg";

export default function skills() {
  return (
    <>
      <h2 className="text-3xl font-primary">SKILLS</h2>
      <div>
        <SkillsList
          icon={htmlIcon}
          title="HTML"
          expert="Advance"
          alt="html icon"
        />
        <SkillsList
          icon={cssIcon}
          title="CSS"
          expert="Advance"
          alt="css icon"
        />
        <SkillsList
          icon={jsIcon}
          title="Javascript"
          expert="Intermediate"
          alt="javascript icon"
        />
        <SkillsList
          icon={reactIcon}
          title="React"
          expert="Advance"
          alt="react icon"
        />
        <SkillsList
          icon={tailwindIcon}
          title="TailwindCSS"
          expert="Advance"
          alt="tailwindcss icon"
        />
          <SkillsList
          icon={bootstrapIcon}
          title="Bootstrap"
          expert="Intermediate"
          alt="Bootstrap icon"
        />
        <SkillsList
          icon={nodejsIcon}
          title="Node.js"
          expert="Intermediate"
          alt="Node.js icon"
        />
        <SkillsList
          icon={mysqlIcon}
          title="MySQL"
          expert="Intermediate"
          alt="mySQL icon"
        />
        <SkillsList
          icon={pythonIcon}
          title="Python"
          expert="Advance"
          alt="python icon"
        />
        <SkillsList icon={cIcon} title="C" expert="Advance" alt="C icon" />
        <SkillsList
          icon={cppIcon}
          title="C++"
          expert="Advance"
          alt="c++ icon"
        />
        <SkillsList
          icon={javaIcon}
          title="Java"
          expert="Intermediate"
          alt="java icon"
        />
        <SkillsList
          icon={nextjsIcon}
          title="Next.js"
          expert="Basic"
          alt="next.js icon"
        />
        <SkillsList
          icon={flutterIcon}
          title="Flutter"
          expert="Basic"
          alt="Flutter icon"
        />
      </div>
    </>
  );
}
