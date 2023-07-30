import { get } from "../../utils";

const api = "https://api.github.com";

export async function getUser(user) {
  return await get(`${api}/users/${user}`);
}

export async function getRepos(user) {
  return await get(`${api}/users/${user}/repos`);
}