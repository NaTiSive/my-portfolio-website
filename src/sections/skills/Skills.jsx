import SkillsList from "../../common/SkillsList";
import jsIcon from "../../assets/js.svg";

export default function skills() {
  return (
    <>
      <div>
        <SkillsList
          icon={jsIcon}
          title="Javascript"
          expert="advance"
          alt="javascript icon"
        />
      </div>
    </>
  );
}
