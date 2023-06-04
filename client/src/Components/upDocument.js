import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [fileData, setFileData] = useState(null);

  const fetchFileData = async () => {
    try {
      const response = await axios.get('http://localhost:1111/file', { responseType: 'arraybuffer' });
      const base64Data = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );
      setFileData(base64Data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <button onClick={fetchFileData}>Fetch File</button>
      {fileData && (
        <img src={`data:image/jpg;base64,${fileData}`} alt="file" />
      )}
    </div>
  );
}

export default App;
