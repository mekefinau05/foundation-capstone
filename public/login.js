const baseURL = `http://localhost:4002/`;

const loginSubmitButton = document.querySelector("#loginSubmit");
const signSubmitButton = document.querySelector("#registerSubmit");

const sUsername = document.querySelector("#signup-username");
const sEmailAddress = document.querySelector("#signup-email");
const sFirstName = document.querySelector("#signup-firstName");
const sLastName = document.querySelector("#signup-lastName");
const sPassword = document.querySelector("#signup-password");

const lUsername = document.querySelector('#login-username')
const lPassword = document.querySelector('#login-password')

let newUsername = sUsername.innerHTML
let newEmail = sEmailAddress.innerHTML
let newFName = sFirstName.innerHTML
let newLName = sLastName.innerHTML
let newPWord = sPassword.innerHTML

 

let user = {
  username: newUsername,
  email: newEmail,
  firstName: newFName,
  lastName: newLName,
  password: newPWord,
};

let loginUser = {
  username: lUsername.value,
  password: lPassword.value
}


lUsername.addEventListener("change", () => {
  // console.dir(lUsername)
  // console.log(lUsername)
  loginUser = {
    username: lUsername.value,
    password: lPassword.value
  }
})

lPassword.addEventListener("change", () => {
  // console.dir(lUsername)
  // console.log(lUsername)
  loginUser = {
    username: lUsername.value,
    password: lPassword.value
  }
})



sUsername.addEventListener("change", () => {
  newUsername = sUsername.innerHTML;
  user = {
    username: newUsername,
    email: newEmail,
    firstName: newFName,
    lastName: newLName,
    password: newPWord,
  };
});

sEmailAddress.addEventListener("change", () => {
  newEmail = sEmailAddress.innerHTML;
  user = {
    username: newUsername,
    email: newEmail,
    firstName: newFName,
    lastName: newLName,
    password: newPWord,
  };
});

sFirstName.addEventListener("change", () => {
  newFName = sFirstName.innerHTML;
  user = {
    username: newUsername,
    email: newEmail,
    firstName: newFName,
    lastName: newLName,
    password: newPWord,
  };
});

sLastName.addEventListener("change", () => {
  newLName = sLastName.innerHTML;
  user = {
    username: newUsername,
    email: newEmail,
    firstName: newFName,
    lastName: newLName,
    password: newPWord,
  };
});

sPassword.addEventListener("typed", () => {
  newPWord = sPassword.innerHTML;
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
  .post("http://localhost:4002/api/register", user)
  .then((res) => {
    console.log(res.data);
    createAccount(res. data);
  })
  .catch((err) => console.log(err));
};

const homescreen = "http://127.0.0.1:5500/public/home.html?"
const navigate = (pathName) => {
  
}

const login = async(loginUser) => {
  console.log(loginUser)
  await axios
  .post("http://localhost:4002/api/login", loginUser)
  .then((res) => {
    if(res.data) {
      // navigate(homescreen)
      window.location.replace(homescreen)
    }else {
      console.log('Please check username or password')
    }
  })
  .catch((err) => console.log(err));
}

