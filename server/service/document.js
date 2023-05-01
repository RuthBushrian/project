const base64toFile = require('node-base64-to-file');
const {unlink}= require('node:fs/promises');

exports.uploadDocument=async(base64String, name, type, fileId)=>
{
  
  const document=`data:${type};base64,`.concat(base64String);

  console.log(`${process.env.PATH_FILE}${fileId}//`);

    await base64toFile(base64String, 
      {
        filePath: `${process.env.PATH_FILE}${fileId}//`,
        fileName: name,
        types: [type],
        fileMaxSize: 1000000000
      }
    );

};




exports.deleteDocument=async(document)=>
{
  
    try 
    {
      await unlink(process.env.PATH_FILE+document.fileId+"//"+document.name);
      console.log('successfully deleted /tmp/hello');
    } 
    
    catch (error) 
    {
      console.error('there was an error:', error.message);
    }
}

exports.getOpenDocument=(path)=>
{
  
  const fileName = '1.jpg';
  res.sendFile(fileName, options, function (err) {
      if (err) {
          next(err);
      } else {
          console.log('Sent:', fileName);
      }
  });

}