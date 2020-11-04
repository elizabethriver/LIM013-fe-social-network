// TODO create user
// eslint-disable-next-line max-len
export const signUp = (emailSignUp, passwordSignUp) => firebase.auth().createUserWithEmailAndPassword(emailSignUp, passwordSignUp);
// TODO sigIn with mail and password
// eslint-disable-next-line max-len
export const signIn = (emailSignIn, passwordSignIn) => firebase.auth().signInWithEmailAndPassword(emailSignIn, passwordSignIn);
// TODO SingOut
export const logOut = () => firebase.auth().signOut();
// TODO SigIn with Google account
export const googleSignIn = () => {
  const base = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(base);
};
