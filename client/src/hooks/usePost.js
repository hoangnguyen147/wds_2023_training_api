import { useEffect, useState } from "react";
import { getPostList, createNewPost } from "../apis/post";

const usePost = () => {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const controller = new AbortController();
  const signal = controller.signal;

  async function getPost() {
    setIsLoading(true);

    const res = await getPostList(signal);
    setPosts(res);
    setIsLoading(false);
  }

  useEffect(() => {
    getPost();

    return () => {
      controller.abort();
    };
  }, []);

  const createPost = async (data) => {
    await createNewPost(data);
    getPost();
  };

  return {
    posts,
    isLoading,
    createPost,
  };
};

export default usePost;
