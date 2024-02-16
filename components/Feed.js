import FeedHeader from "./FeedHeader";
import AddPost from "./AddPost";
import Post from "./Post";

const posts = [
  {
    id: "1",
    name: "Deepak Arichwal",
    userName: "codewithdeepak",
    userImage:
      "https://mir-s3-cdn-cf.behance.net/user/276/0aa7f4568301073.5ed744a263fff.jpg",
    text: "Wow 🤗",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fHww",
    likes: 2,
    timestamp: "2 hours ago",
  },
  {
    id: "1",
    name: "Amar Sharma",
    userName: "codewithamar",
    userImage:
      "https://mir-s3-cdn-cf.behance.net/user/276/0aa7f4568301073.5ed744a263fff.jpg",
    text: "Superb 😍",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww",
    timestamp: "3 days ago",
  },
];

export default function Feed() {
  return (
    <div className="border-x-2 border-gray-300 overflow-y-scroll h-auto max-h-screen no-scrollbar min-w-[500px]">
      <FeedHeader />
      <AddPost />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
