import { FiHeart, FiX } from "react-icons/fi";

export default function SwipingDock() {
  return (
    <div>
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex text-main-cross">
        <div className="cursor-pointer mx-20 bg-main-5 w-20 h-20 rounded-full shadow-lg flex hover:bg-main-3-transparent backdrop-filter backdrop-blur-lg hover:text-white">
          <FiX className="w-7/12 h-full m-auto" />
        </div>
        <div className="cursor-pointer mx-20 bg-main-5 w-20 h-20 rounded-full shadow-lg flex hover:bg-main-3-transparent backdrop-filter backdrop-blur-lg hover:text-main-1">
          <FiHeart className=" m-auto w-7/12 h-full" />
        </div>
      </div>
    </div>
  );
}
