// TODO upDate likes
export const updateLike = (id, likes) => firebase.firestore().collection('publicaciones').doc(id).update({ likes });
// TODO upDate privacy
export const updatePrivacy = (id, status) => firebase.firestore().collection('publicaciones').doc(id).update({ privacy: status });
