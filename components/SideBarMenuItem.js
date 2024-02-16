import Link from "next/link";

export default function SideBarMenuItem({ text, Icon, href, active }) {
  return (
    <div className="hoverEffect flex items-center gap-3 text-gray-700 justify-center xl:justify-start">
      <Icon className="h-7" />
      <span className={`${active && "font-bold"} hidden xl:inline text-lg`}>
        {text}
      </span>
    </div>
  );
}
