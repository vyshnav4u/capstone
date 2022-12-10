import React from 'react';
import { createuserDocumentFormAuth, signInWithGooglePopup } from "../../utils/firebase/FireBaseUtils";

const SignIn = () => {
    const logGoogle = async ()=>{
        const {user} = await signInWithGooglePopup ();
        console.log(user);
        createuserDocumentFormAuth(user);
    }
  return (
    <div>SignIn
        <button onClick={logGoogle}>CLick</button>

    </div>
  )
}

export default SignIn