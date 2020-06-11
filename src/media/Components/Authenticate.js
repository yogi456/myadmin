import React,{useState} from 'react'
import { firebaseAuth } from '../../firebase'

import {Redirect} from 'react-router-dom'

const Authenticate = (props) => {
    const [loggedIn, setloggedIn] = useState(null)
    firebaseAuth.onAuthStateChanged((user)=>{
        
        if(user){
            setloggedIn(true);

        }
        else{

            setloggedIn(false);
        }
    });

    if(loggedIn==null){
        return <Redirect to="/login" /> ;
    }
    else if(loggedIn){
        return props.children;
    }
      else if(!loggedIn)
      {
         return <Redirect to="/login"/>;
      }
}

export default Authenticate

