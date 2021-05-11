import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import {islogin} from '../store/actions/globalAction'
import {connect} from 'react-redux'

 class Header extends Component {
     componentDidMount(){
     }

   signOut = () =>{
        this.props.islogin('');
         
    }
    render() {
        console.warn(this.props.user,'aa')
        return (
            <AppBar 
                style={{
                    flexGrow: '1',
                    display:'inline' ,  
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                }}>
                <Toolbar>
                    <Typography variant="h5"  style={{ margin:'5px' , flexGrow: 1,  }}> Test Code</Typography>
                    { this.props.user?
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
        login:state.globalReducer.islogin
    }
}
const mapDispatchToProps = dispatch => {
    return {
        islogin:(data)=>dispatch(islogin(data))
    }
}    
export default  connect(mapStateToProps,mapDispatchToProps)(Header)