import { SparklesIcon } from "@heroicons/react/outline";
export default function FeedHeader() {
  return (
    <div className="flex items-center justify-between py-2 px-3 sticky top-0 z-50 border-b-2 border-gray-300">
      <h4 className="text-lg sm:text-xl font-bold">Home</h4>
      <SparklesIcon className="w-8 h-8 hoverEffect p-1.5 " />
    </div>
  );
}
