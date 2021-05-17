import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl'
import {islogin ,signUpAction} from '../store/actions/globalAction'
import {connect} from 'react-redux'

// import Sign from './SignUp'

 class SignIn extends Component {
    state={
        email:"",
        password:"",
    }
componentDidMount() {
    if(this.props.loggedIn){
        this.props.history.push("/Dashboard")
    }
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
if(this.ValidateEmail(this.state.email)){
    this.props.islogin(this.state)
    console.log(this.props.loggedIn)
    this.props.history.push("/Dashboard")
}

    

}
handleInput = ( e ) =>{
    this.setState({
        [e.target.name]:e.target.value
    })
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
                        Sign In
                    </Button>
                </form>
            </Container>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        islogin:(data)=>dispatch(islogin(data)),
    }
}
const mapStateToProps = (state) => {
    return{
        loggedIn: state.globalReducer.loggedIn
    }
}    
export default  connect(mapStateToProps,mapDispatchToProps)(SignIn)