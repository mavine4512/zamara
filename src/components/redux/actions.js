export function addUser(user) {
  console.log("added User Redux", user);
  return {
    type: "ADD_USER",
    payload: user,
  };
}
