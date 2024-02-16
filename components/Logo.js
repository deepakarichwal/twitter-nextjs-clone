import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"
      alt="logo"
      width={50}
      height={50}
      className="hoverEffect hover:bg-blue-100"
    />
  );
}
