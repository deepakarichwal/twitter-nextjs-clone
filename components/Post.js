import {
  ChartBarIcon,
  ChatAlt2Icon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/outline";

export default function Post({ post }) {
  return (
    <div className="flex items-start gap-4 p-3 border-b-2 border-gray-300">
      <div className="overflow-hidden rounded-full ">
        <img src={post.userImage} alt="Profile picture" className="w-10" />
      </div>

      <div>
        <div className="flex justify-between mb-2">
          <div>
            <div className="space-x-1">
              <span className="font-bold">{post.name}</span>
              <span>@{post.userName} &#x2022;</span>
              <span>{post.timestamp}</span>
            </div>
            <p>{post.text}</p>
          </div>

          <DotsHorizontalIcon className="hoverEffect p-1.5 h-9 w-9" />
        </div>

        <div className="overflow-hidden rounded-xl">
          <img src={post.image} alt={post.name} />
        </div>

        <div className="flex justify-between items-center mt-2 text-gray-600">
          <ChatIcon className="hoverEffect p-1.5 h-8 w-8" />

          <div className="inline-flex items-center gap-2">
            <HeartIcon className="hoverEffect p-1.5 h-8 w-8" />
            <span>{post.likes}</span>
          </div>

          <ShareIcon className="hoverEffect p-1.5 h-8 w-8" />
          <ChartBarIcon className="hoverEffect p-1.5 h-8 w-8" />
          <span></span>
        </div>
      </div>
    </div>
  );
}
