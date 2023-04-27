import React, { useState, useEffect } from "react";
import axios from "axios";


const Home= ()=>
{

      const [fileUrl, setFileUrl] = useState('');
    
      useEffect(() => {
        axios.get('http://localhost:4321/a', {
      responseType: 'arraybuffer'
    })
    .then(response => {
      const blob = new Blob([response.data], { type: 'image/png' });
      const fileUrl = URL.createObjectURL(blob);
      setFileUrl({ fileUrl });
    })
    .catch(error => {
      console.error(error);
    });

      }, []);
    
      return (
        <div>
          {fileUrl && <iframe src={fileUrl} width="100%" height="500px" />}
        </div>
      );
    }
        
      
    


export default Home;