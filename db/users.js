export const getUsers = JSON.parse(localStorage.getItem("users")) || [];

const users = [
  { username: 'admin', password: 'admin' },
];

if (!getUsers) {  
  localStorage.setItem('users', JSON.stringify(users));
}

