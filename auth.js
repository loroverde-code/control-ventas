function getPassword() {
  return localStorage.getItem("password") || "8322";
}

function login(pass) {
  return pass === getPassword();
}

function changePassword(oldP, newP) {
  if (oldP === getPassword()) {
    localStorage.setItem("password", newP);
    return true;
  }
  return false;
}
