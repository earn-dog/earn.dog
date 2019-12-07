import { storeUser, retrieveUser, removeUser } from "../authWrapper";
import { User } from "../../../types";

const lsSet = jest.fn();
const lsGet = jest.fn();
Storage.prototype.setItem = lsSet;
Storage.prototype.getItem = lsGet;

describe("When user exists", () => {
  const user: User = {
    displayName: "name",
    email: "email@email.com",
    photoUrl: "http://niceme.me",
    emailVerified: false
  };

  let retrievedUser: User;

  beforeAll(() => {
    lsGet.mockReturnValueOnce(JSON.stringify(user));

    storeUser(user);
    retrievedUser = retrieveUser() as User;
  });

  it("should store user in localstorage", () => {
    expect(lsSet).toHaveBeenCalledWith("currentUser", JSON.stringify(user));
  });

  it("should retrieve the user", () => {
    expect(lsGet).toHaveBeenCalledWith("currentUser");
    expect(retrievedUser).toStrictEqual(user);
  });
});

describe("Negative testing", () => {
  let retrievedUser: string;

  beforeAll(() => {
    lsGet.mockReset();
    lsGet.mockReturnValueOnce(null);

    retrievedUser = retrieveUser() as string;
  });

  it("should return an error message when no user exists in local storage", () => {
    let returnMessage = "No user found";
    expect(retrievedUser).toStrictEqual(returnMessage);
  });
});

describe("When the user signs out", () => {
  const user: User = {
    displayName: "name",
    email: "email@email.com",
    photoUrl: "http://niceme.me",
    emailVerified: false
  };

  beforeAll(() => {
    lsGet.mockReset();
    lsGet.mockReturnValueOnce(JSON.stringify(user));

    storeUser(user);
  });

  it("should remove the user from local storage", () => {
    let retrievedUser: string;
    let returnMessage = "No user found";
    removeUser();
    retrievedUser = retrieveUser() as string;
    expect(retrievedUser).toStrictEqual(returnMessage);
  });
});
