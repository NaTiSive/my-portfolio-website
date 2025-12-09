export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto sticky top-0 bg-white/80 backdrop-blur-md z-50">
      <h1 className="text-xl font-bold font-primary">Nattakorn.</h1>
      <ul className="flex gap-6 font-secondary text-gray-600">
        <li className="hover:text-black cursor-pointer"><a href="#hero">Home</a></li>
        <li className="hover:text-black cursor-pointer"><a href="#skills">Skills</a></li>
        <li className="hover:text-black cursor-pointer"><a href="#projects">Projects</a></li>
        <li className="hover:text-black cursor-pointer"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}