import {types} from '../Types/types'
import firebase from '../firebase/firebaseConfig'

export const registerEmailPasswordName = ( name, email, pass ) =>{

    return(dispatch)=>{
        firebase.auth.createUserWithEmailAndPassword(email,pass)
        .then( async({user})=>{
            
            console.log(user);
            await user.updateProfile({displayName: name})
            
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e =>{
                console.log(e);
            })
    }

}