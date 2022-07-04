import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex items-center justify-center p-2 z-[100] w-full absolute">
      <h1 className="text-blue-800  text-4xl font-bold cursor-pointer">
        NEY-MOVIES
      </h1>
    </div>
  );
}
export default Navbar;
