export default function ProjectCard({
  image,
  projectName,
  link,
  alt,
  projectLink,
  linkTitle
}) {
  return (
    <>
      <div className="border border-2 rounded-2xl border-black-500 w-100 m-5 p-2 justify-items-center ">
        <a href={link}>
          <img className="w-100" src={image} alt={alt} />
        </a>
        <h3 className="text-2xl font-secondary font-bold">{projectName}</h3>
        <a href={projectLink}>
          <button
            className="border rounded-2xl p-2 font-secondary border-2 font-semibold"
          >
            {linkTitle}
          </button>
        </a>
      </div>
    </>
  );
}
