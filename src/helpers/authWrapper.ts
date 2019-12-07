import { User } from "../../types";

const storeUser = (user: User): void => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

const retrieveUser = (): User => {
  const stringifiedUser = localStorage.getItem("currentUser");

  return JSON.parse(stringifiedUser || "");
};

export { storeUser, retrieveUser };
