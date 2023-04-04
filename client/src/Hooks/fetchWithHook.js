import useAxios from 'axios-hooks'


const Post = (url, body={}) => {

    const [{ data, loading, error }, refetch]= useAxios(
        {
            url:url,
            method:'post',
            data:body
        }
    );
    if(error)
        console.log(error);
   
    return { data, loading, error, refetch };
  
};

const Get = (url) => {

  const [{ data, loading, error }, refetch]= useAxios(url
      // {
      //     url:url,
      //     method:'get',
      // }
  );
  
  if(error)
      console.log(error);
  return { data, loading, error, refetch };

};

export {Post, Get}