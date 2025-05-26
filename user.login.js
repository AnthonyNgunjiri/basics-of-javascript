const users = [
  { username: "tonie", password: "1234" },
  { username: "admin", password: "adminpass" },
];

function login(username, password) {
  const foundUser = users.find(
    user => user.username === username && user.password === password
  );

  if (foundUser) {
    console.log(`✅ Welcome back, ${username}!`);
    return true;
  } else {
    console.log("❌ Invalid credentials");
    return false;
  }
}

// Test login
login("tonie", "1234");     // Valid
login("tonie", "wrong");    // Invalid
