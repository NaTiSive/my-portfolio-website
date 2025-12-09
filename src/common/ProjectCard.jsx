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
      <div className="border border-2 rounded-2xl border-black-500 max-w-3xl mx-auto m-5 p-6 flex flex-row items-center justify-between shadow-2xl">
        
        <a href={link} className="flex-shrink-0 w-2/5 pr-4"> 
          <img className="w-full h-auto rounded-xl object-cover" src={image} alt={alt} />
        </a>

        <div className="flex flex-col items-start justify-center text-left flex-grow space-y-4 pl-4"> 
        
          <h3 className="text-2xl font-secondary font-bold">{projectName}</h3>
          <a href={projectLink}>
            <button
              className="border rounded-2xl p-2 font-secondary border-2 font-semibold hover:bg-gray-100"
            >
              {linkTitle}
            </button>
          </a>
        </div>
      </div>
    </>
  );
}