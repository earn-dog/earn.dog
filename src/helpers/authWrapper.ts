import { User } from "../../types";

const storeUser = (user: User): void => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

const retrieveUser = (): User | string => {
  const stringifiedUser = localStorage.getItem("currentUser");

  if (stringifiedUser === null || stringifiedUser === undefined) {
    return "No user found";
  }

  return JSON.parse(stringifiedUser);
};

const removeUser = (): void => {
  if (localStorage.getItem("currentUser") !== null) {
    localStorage.removeItem("currentUser");
  }
};

export { storeUser, retrieveUser, removeUser };
