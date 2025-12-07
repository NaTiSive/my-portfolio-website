
export default function SkillsList({icon, title, expert, alt}){
    return(
        <>
            <div>
                <div className="w-15 h-15">
                    <img src={icon} alt={alt} />
                </div>
                <h3>{title}</h3>
                <h4>{expert}</h4>
            </div>
        </>
    )
}