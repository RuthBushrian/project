const fileDal=require('../dal/file');
const stageDal = require("../dal/stage");
const {createFolder, deleteFolder}= require("../service/folder")
const {uploadDocument}= require("../service/document");
const { login } = require('./officer');

exports.addFile = (req, res) => {

    fileDal.addFile(req.body)
   .then(file=>{
      if(file)
      { 
        const folderName = process.env.PATH_FILE+file.idfile;
        createFolder(folderName);
        //uploadFile();
        res.status(201).json({ message: 'created file' });
      }
    else 
    return res.status(400).json({ message: 'error' })
    })
    .catch(err => {
      res.status(500).send({
          message: err.message|| "Error creating file with id=" + id
      })
    });
    };

    
exports.getFileByID=(req, res)=>{
    const id =req.params.id;
    fileDal.getFileByID(id).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
            message: `Cannot find File with id=${id}.`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: err.message||"Error retrieving file with id=" + id
        });
    });
}

exports.getAllFiles=(req, res)=>{//לשים לב למיין
    fileDal.getAllFiles(req.body)
    .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving files."
        });
        });
}
// getAllFilesByOfficer=(req, res)=>{//לשים לב למיין
//     res.send("getAllFiles");
// }

exports.updateFile=async(req, res)=>{
  const id=req.params.id;
  let lfile;
  try{
    const data= await fileDal.getFileByID(id);
    if (data) {
      lfile=data;
    } 
    else {
      res.status(404).send({
        message: `Cannot find file with id= ${id}.`,
      });
    }
  }
  catch(err){
    res.status(500).send({
      message: `Error retrieving last file with id= ${id}.`,
    });
  };
  // lfile=lfile[0];
  console.log(lfile);
  console.log(lfile.statusId);
  console.log(req.body.statusId);
  console.log(req.body.statusId && lfile.statusId!=req.body.statusId);
  if(req.body.statusId && lfile.statusId!=req.body.statusId){
    const ts = Date.now();
    // const date_ob = new Date(ts);
  stageDal
    .addStage({fileId:id,statusId:req.body.statusId,date:ts})
    .then()
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Stage.",
      });
    });
  }
  console.log(id);
  fileDal.updateFile(id ,req.body)
  .then(num => {
      if (num == 1) {
        res.send({
          message: "File was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update File with id=${id}. Maybe File was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message||"Error updating File with id=" + id
      });
    });

}
// closeFile=(req, res)=>{//????
//     res.send("closeReques");
// }
exports.deleteFileByID=(req, res)=>{//????
    const id = req.params.id;
   fileDal.deleteFileByID(id).then(num => {
    if (num == 1) {
      const folderName=  process.env.PATH_FILE+id;
      deleteFolder(folderName);
      res.send({
        message: "File was deleted successfully!"
      });
    } else {
      res.send({
        message: `Cannot delete File with id=${id}. Maybe File was not found!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: err.message||"Could not delete File with id=" + id
    });
  });
}
