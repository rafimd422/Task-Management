import Image from "next/image";
import logo from "@/assets/image.png";
import SearchBox from "./SearchBox";
import HeaderAvatar from "./HeaderAvatar";

const Header: React.FC = () => {

  return (
    <header className="h-20 flex justify-between items-center md:mx-6 sm:mx-2 mx-1">
      <Image
        src={logo}
        alt="logo"
        width={300}
        height={100}
        className="w-44 md:w-56 md:pb-0 object-contain"
      />

      <div className="flex items-center md:gap-4 sm:gap-2">
        <SearchBox />
        <HeaderAvatar />
      </div>
    </header>
  );
};

export default Header;
