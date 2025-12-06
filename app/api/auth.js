import client from "./client";

const endpoint = "/auth";

const login = async (email, password) => {
  const response = await client.post(endpoint, { email, password });
  return response;
};

export default {
  login,
};