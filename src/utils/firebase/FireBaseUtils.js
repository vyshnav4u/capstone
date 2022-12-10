import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';
import { async } from '@firebase/util';
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
	apiKey: 'AIzaSyBGoZIK1d3VH6OssclFUJskhdm14WsiiwI',
	authDomain: 'capstone-7ed43.firebaseapp.com',
	projectId: 'capstone-7ed43',
	storageBucket: 'capstone-7ed43.appspot.com',
	messagingSenderId: '987782133485',
	appId: '1:987782133485:web:35b9bbfe473ec09a86bee4',
};

const fireBaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();

export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);
export const db = getFirestore();

export const createuserDocumentFormAuth = async(userAuth)=>{
    const userDocRef  = doc(db, 'users', userAuth.uid );
    const userSnapShot = await getDoc(userDocRef);

	if(!userSnapShot.exists()){
		const {displayName, email} = userAuth;
		const createAt = new Date();
		try{
			await setDoc(userDocRef, {
				displayName,
				email,
				createAt,
			});
		}
		catch(e){
			console.log('err');
		}
	}
}