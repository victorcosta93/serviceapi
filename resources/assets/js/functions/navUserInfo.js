const getUserInfo = () => {
  let user = '';
  
  try{
    user = localStorage.getItem('user');
  }
  catch(e){}
  
  return user;
}

export default getUserInfo;