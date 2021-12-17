const loginForm = document.querySelector(".login-form");
const loginBtnN = document.querySelector(".btn__login");

db.collection("articles")
  .get()
  .then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
    });
  })
  .catch((err) => {
    console.log(err);
  });

auth.onAuthStateChanged((user) => {
  if (user) {
    db.collection("experience")
      .get()
      .then((snapshot) => {
        console.log("successful");
      })
      .catch((error) => {
        console.log(error);
        console.log("error");
      });
  } else {
    console.log("no user logged in");
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm.querySelector("#email").value;
  const password = loginForm.querySelector("#password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log(cred.user);
      console.log("loged in user");
    })
    .catch((err) => {
      console.log(err);
    });

  loginForm.reset();
  loginForm.parentElement.parentElement.classList.remove("active");
});
