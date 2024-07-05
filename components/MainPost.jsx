import PostLayout from "./PostLayout";

export default function MainPost({ posts, users }) {
  return (
    <main className="col-start-1 col-end-11 mt-[7%] md:col-start-4 lg:col-start-3 ">
      <div className="mt-4">
        <header className="flex flex-row ">
          <button className="ml-2 text-xl">Relevant</button>
          <button className="ml-4 text-xl">Latest</button>
          <button className="ml-4 text-xl">Top</button>
        </header>
        <PostLayout posts={posts} users={users} />
      </div>
    </main>
  );
}
