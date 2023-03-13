const base64toFile = require('node-base64-to-file');
const {unlink}= require('node:fs/promises');
exports.uploadDocument=(base64String)=>
{
  
    //const base64String ='data:image/png;base64,iVBORw0KGgo...';
    // create an image with the a given name ie 'image'
    // try {
    // const imagePath = await base64toFile(base64String, { filePath: './uploads', fileName: "image", types: ['png'], fileMaxSize: 3145728 });
    // console.log(imagePath)
    // } catch (error) {
    // console.log(error)
    // }


}
exports.deleteDocument=async(document)=>
{
  
    try {
      await unlink(process.env.PATH_FILE+document.fileId+"//"+document.name);
      console.log('successfully deleted /tmp/hello');
    } catch (error) {
      console.error('there was an error:', error.message);
    }
}