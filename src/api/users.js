export const getUserInfo = async (email) => {
  const response = await fetch(`https://mobile-library-server.vercel.app/users/${email}`);
  const user = await response.json();
  return user;
};
