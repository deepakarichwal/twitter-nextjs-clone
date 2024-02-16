import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";

export default function AddPost() {
  return (
    <div className="flex items-start gap-3 p-3 justify-between border-b-2 border-gray-300">
      <div className="overflow-hidden rounded-full">
        <img
          src="https://mir-s3-cdn-cf.behance.net/user/276/0aa7f4568301073.5ed744a263fff.jpg"
          alt="Profile picture"
          className="w-10 h-10"
        />
      </div>

      <div className="flex-1">
        <form>
          <textarea
            placeholder="What's happening?"
            rows="5"
            className="border-b-2 w-full outline-none placeholder:text-gray-800 p-2 resize-y"
          />
        </form>
        <div className="flex justify-between items-center">
          <div className="flex">
            <PhotographIcon className="hoverEffect h-9 w-9 p-1.5 text-sky-500 hover:bg-sky-100" />
            <EmojiHappyIcon className="hoverEffect h-9 w-9 p-1.5 text-sky-500 hover:bg-sky-100" />
          </div>
          <button
            className="bg-sky-500 px-5 py-1 rounded-full text-white font-bold disabled:opacity-50"
            disabled
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
