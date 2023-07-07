// Auth.js

const users = [
    { username: 'sharda', repoPATToken: 'token1' },
    { username: 'user2', repoPATToken: 'token2' },
    // Add more user data if needed
  ];
  
  export const checkCredentials = (username, repoPATToken) => {
    const user = users.find((user) => user.username === username && user.repoPATToken === repoPATToken);
    return user;
  };
