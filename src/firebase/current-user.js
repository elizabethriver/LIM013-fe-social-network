// TODO user current data
export const currentUser = () => firebase.auth().currentUser;
// TODO update data user
// eslint-disable-next-line max-len
export const updateUserData = (userName, photoProfile) => firebase.auth().currentUser.updateProfile({
  displayName: userName,
  photoURL: photoProfile,
});
