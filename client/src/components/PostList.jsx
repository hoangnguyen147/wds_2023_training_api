import usePost from "../hooks/usePost";

const PostList = () => {
  const { posts, isLoading, createPost } = usePost();

  const handleCreatePost = async () => {
    const id = posts.length + 1;
    await createPost({
      id,
      title: `Post ${id}`,
      content: `Content ${id}`,
    });
  };

  return (
    <div className="">
      <p>Post List</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : posts && posts.length > 0 ? (
        posts.map((post) => {
          return (
            <div className="border border-blue-500 rounded-md w-36 my-5 mx-auto" key={post.id}>
              <p className="text-3xl text-orange">{post.title}</p>
              <p className="text-base">{post.content}</p>
            </div>
          );
        })
      ) : null}
      <button onClick={handleCreatePost}>Add Post</button>
    </div>
  );
};

export default PostList;
