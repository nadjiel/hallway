import { get } from "../../utils";

export async function getUser(user) {
  return await get(`https://api.github.com/users/${user}`);
}

export async function getRepos(user) {
  return await get(`https://api.github.com/users/${user}/repos`);
}