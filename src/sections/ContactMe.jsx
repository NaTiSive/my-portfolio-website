import mailIcon from "../assets/skillsIcon/mail.svg";
import linkedInIcon from "../assets/skillsIcon/linkedin.svg";

export default function ContactMe() {
  return (
    <>
      <div className="flex flex-col items-center text-center p-4">
        <h2 className="text-3xl font-primary mb-6">CONTACT ME</h2>
        
        <div className="border border-2 rounded-2xl p-6 shadow-2xl max-w-xl w-full mx-auto">
          
          <div className="flex flex-col space-y-4">
            
            <div className="flex items-center justify-start border-b pb-4"> 
              <img className="w-10 h-10 mr-4 flex-shrink-0" src={mailIcon} alt="mail logo" />
              <h1 className="text-lg font-secondary text-left break-all">
                nattakorn4082@gmail.com
              </h1>
            </div>

            <a 
              href="https://www.linkedin.com/in/nattakorn-klangkhong/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-start pt-4 hover:opacity-80 transition duration-300"
            >
              <img className="w-10 h-10 mr-4 flex-shrink-0" src={linkedInIcon} alt="linkedin icon" />
              <h1 className="text-lg font-secondary text-left">LinkedIn Profile</h1>
            </a>
            
          </div>
        </div>
      </div>
    </>
  );
}