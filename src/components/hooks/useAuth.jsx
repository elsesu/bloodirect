import React, {useContext, createContext, useState, useEffect} from 'react'
import {signInWithPopup, GoogleAuthProvider, onAuthStateChanged, getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, updateEmail, sendEmailVerification } from "firebase/auth";
import { collection, addDoc, getDocs, setDoc, serverTimestamp, doc } from "firebase/firestore"; 
import { app, db, auth } from '../../firebase.config';

const Authcontext = createContext({})
const provider = new GoogleAuthProvider(app);


export const AuthProvider = ({children}) => {


const [user, setUser] = useState(null)
const [loading, setIsLoading] = useState(true)
const [loadingInitial, setLoadingInitial] = useState(false)


const SignOut = (user, setUser) =>{
setIsLoading(true);
console.log('user signed out');
signOut(auth).then(()=>
console.log('user signed out')
).catch((error) => {
  console.error(error, 'erro signing out user');
}).finally(()=> setIsLoading(false));
}


const SignWithPop = async () => {
  try{
const result = await signInWithPopup(auth, provider)
// This gives you a Google Access Token. You can use it to access the Google API.
const credential = GoogleAuthProvider.credentialFromResult(result); 
const token = credential.accessToken;
console.log(token, 'success')

  }
  catch(error){
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    // The AuthCredential type that was used.
    console.error(errorCode, errorMessage, 'an error occurred')
  }
}



/*
const user = auth.currentUser;
const newPassword = getASecureRandomPassword();

updatePassword(user, newPassword).then(() => {
  // Update successful.
}).catch((error) => {
  // An error ocurred
  // ...
});
*/

const SignIn = async (formData) => {
  setIsLoading(true);
  const { email, password } = formData;
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    console.log(user, 'user signed in');

    // You can get the ID token using the getIdToken method
    const idToken = await user.getIdToken();
    console.log(idToken, 'ID token');

    // If you need to create GoogleAuthProvider credential
    // const credential = GoogleAuthProvider.credential(idToken);

    // Set the user in your state
    setUser(user);
  } catch (error) {
    if (error) {
      const errorMessage = error.message;
      console.log(errorMessage, "error signing in");
    }
  } finally {
    setIsLoading(false);
  }
};


const addProfile = (formData)=>{
  const {age, occupation, photoUrl, phoneNumber}=formData;
setDoc(doc(db, 'users', user.uid),{
  id: user.uid,
  age:age,
  occupation:occupation,
  phoneNumber:phoneNumber,
  photoUrl: photoUrl,
  timestamp:serverTimestamp()
  
}).then(()=>{
  console.log('updated successfully')


}).catch((error)=>{
  if(error){
    console.log(error, 'failed to update user');
  }
});
}



const getUser = async ()=>{
  setIsLoading(true);
  try{
    const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
  }
  catch(error){
    if(error){
      console.log(error), 'error getting user';
    }
  }
}



useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      setUser(user);
      // ...
    } else {
      setUser(null);
      // User is signed out
      // ...
    }
    setLoadingInitial(false);
  });
  
}, [user]);





const addData = async (formData) => {
    try {
      const docRef = await addDoc(collection(db, "users"), formData);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };



  const SignUp = async (formData) => {
    setIsLoading(true);
    const { email, password } = formData;
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const user = result.user;
        setUser(user);
        console.log('successfully signed up');
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode, "error signing up");
    }
};




/*sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });

*/

const updatedUser = async (formData) => {
  const { displayName, photoURL, phoneNumber } = formData;
try{
  const update = await updateProfile(auth.currentUser, {
    displayName:'mimi asa',
  })
  const user = auth.currentUser;
  setUser(user)
  console.log(user)
} catch(error){ if(error){
console.log(error, 'could not update')
}}
 
 }


const TryUpdateEmail = async (formData) => {
const { email } = formData;
try{
  const updatedEmail = await updateEmail(auth.currentUser, email)
  const user = auth.currentUser
} 
catch(error){ if(error){ console.log(error);

}

}}

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);
   




  return (
  <Authcontext.Provider value={{
    user,
    SignUp,
    addData,
    SignIn,
    getUser,
    SignOut,
    SignWithPop,
    updatedUser,
    addProfile
   }}>
   {!loadingInitial && children}
  </Authcontext.Provider>
  )
}

export const useAuth = () => {
    return useContext(Authcontext)
}








