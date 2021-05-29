import React from 'react'
import Login from './Login';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../firebase_config';
import { Grid } from '@material-ui/core'



const Title = () => {

    const [user]=useAuthState(auth)

    const signOut = async () => {
    await auth.signOut();
     };

    

    return (
        <div>
        <Grid container justify="space-between" alignItems="center">
            <Grid>
                <h1 style={{letterSpacing: "3px", }}>  
                 <span style={{color: " #596854 " , fontWeight: "bolder" }}>a.</span>
                <span style={{color: " #7F803E " , fontWeight: "bolder" }}>e.</span>
                <span style={{color: " #CC9A52 " , fontWeight: "bolder" }}>s.</span>
                <span style={{color: " #AD794B " , fontWeight: "bolder" }}>t.</span>
                <span style={{color: " #f8c96c" , fontWeight: "bolder" }}>h.</span>
                <span style={{color: " #596854 " , fontWeight: "bolder" }}>e.</span>
                <span style={{color: " #7F803E " , fontWeight: "bolder" }}>t.</span>
                <span style={{color: " #CC9A52 " , fontWeight: "bolder" }}>i.</span>
                <span style={{color: " #AD794B " , fontWeight: "bolder" }}>c</span> 
                </h1>
            </Grid>    
            <Grid>
                {user ? <button onClick={signOut}
                 className="login-provider-button"
                >LogOut</button> : <Login/> }
            </Grid>
        </Grid>


       
        
        
        </div>
    )
}

export default Title;
   
