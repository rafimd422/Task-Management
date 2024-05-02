import Image from "next/image";
import logo from "@/assets/image.png";
import SearchBox from "./SearchBox";
import HeaderAvatar from "./HeaderAvatar";
import { Button } from "antd";
import useAuthStore from "@/CustomHook/useAuthStore";

const Header: React.FC = () => {

  const { logOut } = useAuthStore();

  return (
    <header className="lg:container h-20 flex justify-between items-center md:mx-auto sm:mx-2 mx-1">
      <Image
        src={logo}
        alt="logo"
        width={300}
        height={100}
        className="w-44 md:w-56 md:pb-0 object-contain"
      />

      <div className="flex items-center md:gap-4 sm:gap-2">
        <SearchBox />
        <Button onClick={() => logOut()}>Log Out</Button>
        <HeaderAvatar />
      </div>
    </header>
  );
};

export default Header;
