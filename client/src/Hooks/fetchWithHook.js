import useAxios from 'axios-hooks'
import {URL} from '../Constant'

const Post = (url, body={}) => {

    console.log(body);
    const [{ data, loading, error }, refetch]= useAxios(
        {
            url:URL + url,
            method:'post',
            data:body
        }
    );
    if(error)
        console.log(error);
   
    return { data, loading, error, refetch };
  
};
//  const CloseFileByOfficer= (details) => {
//     const [{ data, loading, error }, refetch] = useAxios(
//       {
//     url:"http://localhost:4321/file/401",
//     method:'put',
//     data:details}
//   );
//     return { data, loading, error, refetch }
//   };

const Get = (url) => {
    console.log(URL + url);
  const [{ data, loading, error }, refetch]= useAxios(URL + url);
  if(error)
      console.log(error);
  return { data, loading, error, refetch };

};




export {Post, Get}