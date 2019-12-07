import { User } from "../../types";

const storeUser = (user: User): void => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

const retrieveUser = (): User | string => {
  const stringifiedUser = localStorage.getItem("currentUser");

  if (stringifiedUser === null) {
    return "No user found";
  }

  return JSON.parse(stringifiedUser);
};

export { storeUser, retrieveUser };
