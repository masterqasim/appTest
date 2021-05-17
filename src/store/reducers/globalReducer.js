const initState = {
    user:[],
    loggedIn: false,
    userInfo:{}
}
const globalReducer = (state = initState, action) => {
  let userInfo1 = {
    fName:state.userInfo.fName ?state.userInfo.fName :null,
    lName:state.userInfo.lName ?state.userInfo.lName :null,
    email:state.userInfo.email ?state.userInfo.email :null,
  };
  let logIn = false;
    switch(action.type){
      case 'ISLOGIN':
        return {

          user : [...state.user.map((res)=>{
            if(res.email === action.data.email && res.password === action.data.password){
              userInfo1.email = res.email;
              userInfo1.fName = res.fName;
              userInfo1.lName = res.lName;
              logIn = true

              return res
            }
            else{
              return res
            }
          })],
          loggedIn : logIn,
          userInfo: userInfo1
        };
      case 'SIGN_UP_ACTION':
        return {
          user : [...state.user, action.data],
          loggedIn : true,
          userInfo: {
            fName:action.data.fName,
            lName:action.data.lName,
            email:action.data.email,
          }
        };
      case 'SIGN_OUT' :
        return {
          user : [...state.user],
          loggedIn : false,
          userInfo: {
          }
        };  
      default :
      return state
    }
    
  };
  
  export default globalReducer;