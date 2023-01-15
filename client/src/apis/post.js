import { axiosInstance } from "../axiosInstance";

export const getPostList = async (signal) => {
  const res = await axiosInstance.get("post", {
    signal,
  });

  return res;
};

export const createNewPost = async (data) => {
  const res = await axiosInstance.post("post", data);

  return res;
};
