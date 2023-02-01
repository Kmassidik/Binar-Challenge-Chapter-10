import Router from "next/router";


const authenticate = () => {
    let storage = localStorage.getItem("accesstoken")
    if (storage === "" || storage === null){
      Router.push('/login')
    } 
  }

  export default authenticate;