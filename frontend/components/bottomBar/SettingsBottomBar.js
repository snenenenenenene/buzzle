import { FiArrowDownLeft } from "react-icons/fi";
import Link from "next/link";

export default function SettingsBottomBar() {
  return (
    <div className="backdrop-filter backdrop-blur-lg fixed bottom-0 left-0 w-full ">
      <div className="z-10 h-20 px-5 flex justify-start relative bottom-5 ">
        <a className="my-auto title-font font-medium cursor-pointer text-main-1 hover:bg-main-3-transparent p-5 w-20 h-20 bg-main-5 rounded-full">
          <Link href="/">
            <FiArrowDownLeft className="h-full w-full" />
          </Link>
        </a>
      </div>
    </div>
  );
}
