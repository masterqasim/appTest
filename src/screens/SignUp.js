import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import {connect} from 'react-redux'
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import {islogin ,signUpAction} from '../store/actions/globalAction'
 class SignUp extends Component {
    state={
        fName:"",
        lName:"",
        email:"",
        password:"",

    }
ValidateEmail = (mail) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
        {
        return (true)
        }
        alert("You have entered an invalid email address!")
        return (false)
    } 
submitForm = ( e ) =>{
e.preventDefault();
// async call

    let users={
        fName:this.state.fName,
        lName:this.state.lName,
        email:this.state.email,
    }
    if(this.ValidateEmail(this.state.email)){

        this.props.signUpAction(this.state)
        this.props.history.push("/Dashboard")
        this.setState({
            fName:"",
            lName:"",
            email:"",
            password:"",
        })
    }
    
}
    
handleInput = ( e ) =>{
this.setState({
    [e.target.name]:e.target.value
})
console.log(this.state)
}

    render() {
          
        return (
            <Container style={{
                    marginTop: '5%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                    maxWidth="xs"
                >

                <form  
                    style={{
                        width:'100%',
                        marginTop:'25%',
                        backgroundColor:'white',
                        padding:'5%'

                    }}
                    onSubmit={this.submitForm}
                    >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete="fname"
                            name="fName"
                            variant="outlined"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            value={this.state.fName}
                            onChange={this.handleInput}

                        />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lName"
                            autoComplete="lname"
                            value={this.state.lName}
                            onChange={this.handleInput}


                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={this.state.email}
                            onChange={this.handleInput}


                        />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={this.state.password}
                            onChange={this.handleInput}


                        />
                        </Grid>   
                    </Grid>
                    <Grid item xs={12} style={{marginTop:'10px'}}>
                        <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" labelStyle={{color: 'white'}}/>}
                            label="I want to receive inspiration, marketing promotions and updates via email."
                        />
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ 
                            margin: '16px auto ',
                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        }}

                    >
                        Sign Up
                    </Button>
                    <Button
                        
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ 
                            margin: '16px auto ',
                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        }}

                    >
                        SignUp with Google
                    </Button>
                </form>
            </Container>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        islogin:(data)=>dispatch(islogin(data)),
        signUpAction:(data)=>dispatch(signUpAction(data))
    }
}    
export default  connect(null,mapDispatchToProps)(SignUp)
