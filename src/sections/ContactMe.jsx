import mailIcon from "../assets/skillsIcon/mail.svg";
import linkedInIcon from "../assets/skillsIcon/linkedin.svg";

export default function Contactme() {
  return (
    <>
      <div className="flex flex-col items-center text-center p-4 mb-10">
        {" "}
        <h2 className="text-3xl font-primary mb-6">CONTACT ME</h2>
        <div className="border-2 border-gray-200 rounded-2xl p-6 shadow-xl max-w-xl w-full mx-auto bg-white">
          <div className="flex flex-col space-y-2">
            {" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nattakorn4082@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start border-b border-gray-200 pb-4 p-2 rounded-lg hover:bg-gray-50 transition duration-300 cursor-pointer"
            >
              <img
                className="w-10 h-10 mr-4 flex-shrink-0"
                src={mailIcon}
                alt="mail logo"
              />
              <span className="text-lg font-secondary text-left break-all text-gray-700">
                nattakorn4082@gmail.com
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/nattakorn-klangkhong/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start pt-4 p-2 rounded-lg hover:bg-gray-50 transition duration-300"
            >
              <img
                className="w-10 h-10 mr-4 flex-shrink-0"
                src={linkedInIcon}
                alt="linkedin icon"
              />
              <span className="text-lg font-secondary text-left text-gray-700">
                LinkedIn Profile
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
