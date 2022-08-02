import { Audio } from "react-loader-spinner";
function loader() {
  return (
    <div className="h-[78vh] inset-0 z-[9999] absolute flex justify-center bg-white items-center">
      <Audio
        height="80"
        width="80"
        radius="9"
        color="#00BFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
export default loader;
