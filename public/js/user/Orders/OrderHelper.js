import axios from 'axios';

import { showAlert } from '../alerts';

const getMyOrder = (userid,token,usersalt) => {

    axios({
        headers : {
            'Content-Type': 'application/json;charset=UTF-8',
            
            Authorization : `Bearer ${token}`
        },
        method : 'get',
        url : `/gvj-api/check/${userid}`
    })
    .then(
        (response) => {
            // console.log('getting order Page')
            location.assign(`/gvj-api/myorders/${userid}/${usersalt}`)
        }
    )
    .catch(
        (error) => {

            if (error.response.data.error){
                // console.log(error.response.data.error)
                showAlert('fail',error.response.data.error)
                
            }
            else{
                showAlert('fail',"Internal Server Error")
            }
            

        }
    )
    


}


const getMyPurchases = (userid,token,usersalt) =>{

    axios({
        headers : {
            'Content-Type': 'application/json;charset=UTF-8',
            
            Authorization : `Bearer ${token}`
        },
        method : 'get',
        url : `/gvj-api/check/${userid}`
    })
    .then(
        (response) => {
            // console.log('getting purchase Page')
           location.assign(`/gvj-api/mypurchases/${userid}/${usersalt}`)
        }
    )
    .catch(
        (error) => {

            if (error.response.data.error){
                // console.log(error.response.data.error)
                showAlert('fail',error.response.data.error)
                
            }
            else{
                showAlert('fail',"Internal Server Error")
            }
            

        }
    )
    

}




module.exports = {
    getMyOrder : getMyOrder,
    getMyPurchases : getMyPurchases,
}