import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import {islogin ,signOutAction} from '../store/actions/globalAction'
import { Route , withRouter} from 'react-router-dom';
import {connect} from 'react-redux'

 class Header extends Component {
     componentDidMount(){
     }

   signOut = () =>{
        this.props.signOutAction();
        this.props.history.replace("/SignIn") 
    }
    render() {
        console.warn(this.props.loggedIn,'aa')
        return (
            <AppBar 
                style={{
                    flexGrow: '1',
                    display:'inline' ,  
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                }}>
                <Toolbar>
                    <Typography variant="h5"  style={{ margin:'5px' , flexGrow: 1,  }}> Test Code</Typography>
                    { this.props.loggedIn?
                    <Link to='/SignIn' style={{textDecoration:'none'}}>
                        <Button 
                            variant="outlined" 
                            size="small"    
                            style={{ marginRight:'15px',color:'white',borderColor:'white' }}
                            onClick={this.signOut}
                        > SignOut
                        </Button>
                    </Link>
                    :
                    <div>
                <Link to='/SignIn' style={{textDecoration:'none'}}>
                    <Button 
                        variant="outlined" 
                        size="small"    
                        style={{ marginRight:'15px',color:'white',borderColor:'white' }}
                    > SignIn
                    </Button> 
                </Link>
                <Link to='/' style={{textDecoration:'none'}}>
                    <Button 
                        variant="outlined" 
                        size="small"    
                        style={{ marginRight:'15px',color:'white',borderColor:'white' }}
                    > SignUp
                    </Button>
                </Link>
                </div>}
                
                </Toolbar>
            </AppBar>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        loggedIn:state.globalReducer.loggedIn
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signOutAction:()=>dispatch(signOutAction())
    }
}    
export default  connect(mapStateToProps,mapDispatchToProps)(withRouter(Header))