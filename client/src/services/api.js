import axios from "axios";

const URL="http://localhost:8000";

export const addUser= async (data)=>{

    try{
        return await axios.post(`${URL}/adduser`, data);
    } catch(error){
        console.log("Error while calling api", error);
    }

}


export const getUsers= async ()=>{
    try{
        return await axios.get(`${URL}/alluser`);
    } catch(error){
        console.log("Error while calling the getApi", error);
    }
}

export const getUser= async (id)=>{

    try{

        return await axios.get(`${URL}/edituser/${id}`); 

    } catch(error){
        console.log("Error", error);
    }
}

export const editUser=async (data, id)=>{

    try{ 

        return await axios.put(`${URL}/edituser/${id}`, data);

    } catch(error){
        console.log("Error", error);
    }

}

export const deleteUser=async (id)=>{

    try{

        return await axios.delete(`${URL}/alluser/${id}`, id); 

    } catch(error){
        console.log("Error in connecting the api",error);
    }

}