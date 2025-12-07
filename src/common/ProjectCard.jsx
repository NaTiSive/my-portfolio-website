export default function ProjectCard({image,projectName,projectDate,link,alt}){
    return(
        <>
        <a href={link}><img src={image} alt={alt} /></a>
        <h3>{projectName}</h3>
        <h3>{projectDate}</h3>
        </>
    )
}