import Image from "next/image";
import Logo from "./Logo";
import SideBarMenuItem from "./SideBarMenuItem";
import MiniProfile from "./MiniProfile";
import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";

export default function SideBar() {
  return (
    <div className="hidden sm:flex flex-col xl:items-start p-2 xl:min-w-[300px]">
      {/* Twitter Logo */}
      <div className="">
        <Logo />
      </div>

      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SideBarMenuItem text="Home" href="/" Icon={HomeIcon} active />
        <SideBarMenuItem text="Explore" href="/" Icon={HashtagIcon} />
        <SideBarMenuItem text="Notifications" href="/" Icon={BellIcon} />
        <SideBarMenuItem text="Messages" href="/" Icon={InboxIcon} />
        <SideBarMenuItem text="Bookmarks" href="/" Icon={BookmarkIcon} />
        <SideBarMenuItem text="Lists" href="/" Icon={ClipboardIcon} />
        <SideBarMenuItem text="Profile" href="/" Icon={UserIcon} />
        <SideBarMenuItem text="More" href="/" Icon={DotsCircleHorizontalIcon} />
      </div>

      {/* Button */}
      <button className="bg-sky-500 w-56 h-12 rounded-full text-lg text-white font-bold hidden xl:inline hover:brightness-95 hover:shadow-md transition-shadow duration-100">
        Tweet
      </button>

      {/* Mini Profile */}
      <MiniProfile />
    </div>
  );
}
