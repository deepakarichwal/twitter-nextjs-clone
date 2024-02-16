import FeedHeader from "./FeedHeader";

export default function Feed() {
  return (
    <div className="border-x-2 border-gray-300 overflow-y-scroll h-auto max-h-screen no-scrollbar min-w-[500px]">
      <FeedHeader />
    </div>
  );
}