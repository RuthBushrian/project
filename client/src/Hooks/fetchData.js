import axios from 'axios';
import { URL } from '../Constant';

 const Delete= async(url, body={})=>
{
  try{
    console.log(body);
    const res= await axios.delete(URL+url, {data:body});
  }
  catch(err){
  console.error(`error ${err}`);
  }

}

 const Create= async(url, filesToCreate)=>
{
  try{
    const res= await axios.post(URL+url, filesToCreate);
    console.log(res);
    return res.data;
  }
  catch(err){
  console.error(`error ${err}`);
  }

}


const Update= async(url, objToUpdate)=>
{
  try{
    const res= await axios.put(`${URL}${url}`, objToUpdate);
    console.log(res);
    return res.data;
  }
  catch(err){
  console.error(`error ${err}`);
  }

}
 const Get = async(url)=>
{
  try{
    const res= await axios.get(`${URL}${url}`);
    return res;
  }
  catch(err){
  console.error(`error ${err}`);
  }

}

const FetchFileData = async (path) => {
  try {

    const response = await axios.get(`${URL}document/${path}`, { responseType: 'arraybuffer' });
    // const base64Data = btoa(
    //   new Uint8Array(response.data).reduce(
    //     (data, byte) => data + String.fromCharCode(byte),
    //     ''
    //   )
    // );
    console.log(response);
    return(response);
  } catch (error) {
    console.error(error);
  }
};


export {Delete, Create, Update, Get,FetchFileData}