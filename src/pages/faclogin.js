import React, { Component } from 'react'
import {Container, Box, Typography, TextField, CircularProgress, Button } from '@material-ui/core'
import logo from "../media/logo.png"
import firebase from "../firebase"


class faclogin extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            email:"",
            password:"",
            show_progress:false,
             
        };
        this.handelChange = this.handelChange.bind()
        this.login = this.login.bind()
    }

    handelChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
         })

        }
    login = ()=>{

        let valid_data = true;
        this.state.email_error=null;
        this.state.password_error=null;
        if(this.state.email ==="")
        {
            this.state.email_error = "Required!"
            valid_data = false;
        }

        if(this.state.password ==="")
        {
            this.state.password_error = "Required!"
            valid_data = false;
        }
        if(valid_data)
        {
            this.state.show_progress=true;
        }

    this.setState({
        update:true
    })

    if(valid_data){
        firebase.firestore().collection("users").where('email','==',this.state.email)
        .where('IsUser','==',true)
        .get()
        .then(querySnapshot=>{
            if(!querySnapshot.empty)
            {
                firebase.auth()
                .signInWithEmailAndPassword(
                    this.state.email,
                    this.state.password
                ).then(res=>{
                    this.props.history.replace("/dashboard");

                }).catch(err=>{
                    if(err.code=="auth/wrong-password"){
                        this.state.password_error="Incorrect Password";
                    }
                    this.setState({
                        show_progress:false
                    })

                })
            }
            else{
                this.state.email_error="Not Allowed";
                this.setState({
                    show_progress:false
                })
            }
        })
    }

    }
    
    
    render() {
        return (
            <Container maxWidth="xs">
                <Box bgcolor="white"
                boxShadow='2'
                borderRadius='15px'
                textAlign="center"
                p="24px"
                mt="50px"

                >
                    <img src={logo} height="50px"></img>
                    <Typography variant="h5" color="textSecondary" >Admin</Typography>
                    <TextField
          label="Email"
          id="outlined-size-small"
          variant="outlined"
          color="secondary"
          name="email"
          error = {this.state.email_error!=null}
          helperText={this.state.email_error}
          onChange = {this.handelChange}
          fullWidth
          margin="normal"
          size="small"
        />
          <TextField
          label="Password"
          id="outlined-size-small"
          variant="outlined"
          type="password"
          color="secondary"
          name="password"
          error = {this.state.password_error!=null}
          helperText={this.state.password_error}
         
          onChange = {this.handelChange}
          fullWidth
          margin="normal"
          size="small"
        />
        <br/>
        {this.state.show_progress?(
        <CircularProgress size={24} thickness={4} color="primary" />
        ):null}
        <br/>
        <br/>
<Button variant="contained" color="primary" 
onClick = {this.login}
fullWidth>
  Login
</Button>

                </Box>

            </Container>
        )
    }
}
export default faclogin;