import { storeUser, retrieveUser } from "../authWrapper";
import { User } from "../../../types";

const user: User = {
  displayName: "name",
  email: "email@email.com",
  photoUrl: "http://niceme.me",
  emailVerified: false
};

const lsSet = jest.fn();
const lsGet = jest.fn();
lsGet.mockReturnValueOnce(JSON.stringify(user));
Storage.prototype.setItem = lsSet;
Storage.prototype.getItem = lsGet;

let retrievedUser: User;

beforeAll(() => {
  storeUser(user);
  retrievedUser = retrieveUser();
});

it("should store user in localstorage", () => {
  expect(lsSet).toHaveBeenCalledWith("currentUser", JSON.stringify(user));
});

it("should retrieve the user", () => {
  expect(lsGet).toHaveBeenCalledWith("currentUser");
  expect(retrievedUser).toStrictEqual(user);
});
