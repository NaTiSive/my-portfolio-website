
export default function SkillsList({icon, title, expert, alt}){
    return(
        <>
            <div className="border border-2 border-black-500 w-30 rounded-2xl m-2 p-4 justify-items-center">
                <div className="w-15 h-15">
                    <img src={icon} alt={alt} />
                </div>
                <h3 className="text-base font-secondary font-bold">{title}</h3>
                <h4 className="text-sm font-secondary">{expert}</h4>
            </div>
        </>
    )
}