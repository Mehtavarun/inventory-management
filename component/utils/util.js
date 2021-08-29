export function getUserObject(username, password, type) {
  return {
    username,
    password,
    type,
  };
}

export const userType = Object.freeze({ ADMIN: 0, USER: 0 });
