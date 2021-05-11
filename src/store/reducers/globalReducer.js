const initState = {
    user:''
}
const globalReducer = (state = initState, action) => {
    switch(action.type){
      case 'ISLOGIN':
        return {
          user : action.data
        };
      default :
      return state
    }
    
  };
  
  export default globalReducer;