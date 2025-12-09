export default function ProjectCard({
  image,
  projectName,
  link,
  alt,
  projectLink,
  linkTitle,
  description,
}) {
  return (
    <>
      <div className="border border-2 rounded-2xl border-gray-200 max-w-3xl mx-auto m-5 p-6 flex flex-col md:flex-row items-center justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <a
          href={link}
          className="w-full md:w-2/5 mb-4 md:mb-0 md:pr-4 flex-shrink-0"
        >
          <img
            className="w-full h-auto rounded-xl object-cover"
            src={image}
            alt={alt}
          />
        </a>

        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow space-y-3 md:pl-4">
          <h3 className="text-2xl font-secondary font-bold">{projectName}</h3>

          <p className="text-base font-secondary text-gray-700 leading-relaxed mb-2">
            {description}
          </p>

          <a href={projectLink}>
            <button className="cursor-pointer border rounded-2xl p-2 font-secondary border-2 font-semibold hover:bg-gray-100">
              {linkTitle}
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
