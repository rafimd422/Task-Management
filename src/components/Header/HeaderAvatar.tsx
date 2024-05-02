"use client";

import useAuthStore from "@/CustomHook/useAuthStore";
import { Avatar } from "antd";
import { useEffect } from "react";

const HeaderAvatar = () => {
  const { user, init } = useAuthStore();
  const userImage: string = user?.reloadUserInfo.photoUrl;


  useEffect(() => {
    const unsubscribe = init();

    return () => unsubscribe();
  }, [init]);

  return (
    <div className="sm:flex hidden">
      {user !== null && <Avatar size="large" src={userImage} alt="avatar" />}
    </div>
  );
};

export default HeaderAvatar;
