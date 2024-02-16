import { DotsHorizontalIcon } from "@heroicons/react/outline";
import React from "react";

export default function MiniProfile() {
  return (
    <div className="flex gap-3 items-center hoverEffect mt-auto">
      <div className="overflow-hidden rounded-full">
        <img
          src="https://mir-s3-cdn-cf.behance.net/user/276/0aa7f4568301073.5ed744a263fff.jpg"
          alt="Profile picture"
          className="w-10"
        />
      </div>

      <div className="xl:inline hidden leading-5">
        <h1 className="font-bold">Code With Deepak</h1>
        <p className="text-gray-500">@codewithdeepak</p>
      </div>

      <DotsHorizontalIcon className="h-5 ml-8 hidden xl:inline" />
    </div>
  );
}
