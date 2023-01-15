const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const createSamplePost = (id) => {
  return {
    id,
    title: `Post ${id}`,
    content: `Content ${id}`,
  };
};

const createMockPostList = (count) => {
  return Array.from({ length: count }).map((_, index) =>
    createSamplePost(index)
  );
};

const listPosts = createMockPostList(10);

const getPosts = async (req, res) => {
  await delay(1000);

  res.status(200).json(listPosts);
};

const createPost = async (req, res) => {
  const { id, title, content } = req.body;
  console.log(req.body);
  listPosts.push({
    id,
    title,
    content,
  });
  res.status(200).json(listPosts);
};

module.exports = {
  getPosts,
  createPost,
};
