const baseURL = `http://localhost:4002/`;

const loginSubmitButton = document.querySelector("#loginSubmit");
const signSubmitButton = document.querySelector("#registerSubmit");

const sUsername = document.querySelector("#signup-username");
const sEmailAddress = document.querySelector("#signup-email");
const sFirstName = document.querySelector("#signup-firstName");
const sLastName = document.querySelector("#signup-lastName");
const sPassword = document.querySelector("#signup-password");

let newUsername = sUsername.textContent
let newEmail = sEmailAddress.textContent
let newFName = sFirstName.textContent
let newLName = sLastName.textContent
let newPWord = sPassword.textContent

let user = {
  username: newUsername,
  email: newEmail,
  firstName: newFName,
  lastName: newLName,
  password: newPWord,
};

sUsername.addEventListener("", () => {
  newUsername = sUsername.textContent;
  user = {
    username: newUsername,
    email: newEmail,
    firstName: newFName,
    lastName: newLName,
    password: newPWord,
  };
});

sEmailAddress.addEventListener("change", () => {
  newEmail = sEmailAddress.textContent;
  user = {
    username: newUsername,
    email: newEmail,
    firstName: newFName,
    lastName: newLName,
    password: newPWord,
  };
});

sFirstName.addEventListener("change", () => {
  newFName = sFirstName.textContent;
  user = {
    username: newUsername,
    email: newEmail,
    firstName: newFName,
    lastName: newLName,
    password: newPWord,
  };
});

sLastName.addEventListener("change", () => {
  newLName = sLastName.textContent;
  user = {
    username: newUsername,
    email: newEmail,
    firstName: newFName,
    lastName: newLName,
    password: newPWord,
  };
});

sPassword.addEventListener("change", () => {
  newPWord = sPassword.textContent;
  user = {
    username: newUsername,
    email: newEmail,
    firstName: newFName,
    lastName: newLName,
    password: newPWord,
  };
});

const createAccount = (user) => {
  // console.log(appointment)
  axios
    .post("http://localhost:4002/api/login", user)
    .then((res) => {
      console.log(res.data);
      createAccount(res.data);
    })
    .catch((err) => console.log(err));
};
