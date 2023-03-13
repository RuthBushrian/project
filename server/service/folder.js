const fs= require("fs");

exports.createFolder=(folderName)=>
{
    if (!fs.existsSync(folderName)) 
    {
        fs.mkdir(folderName, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`Folder ${folderName} created successfully.`);
        }
        });
    } 
    else 
    {
        console.log(`Folder ${folderName} already exists.`);
    }
}

exports.deleteFolder=(folderName)=>
{

    fs.rmSync(folderName, { recursive: true, force: true });
    // if (!fs.existsSync(folderName)) 
    // {
    //     fs.mkdir(folderName, (err) => {
    //     if (err) {
    //         console.error(err);
    //     } else {
    //         console.log(`Folder ${folderName} created successfully.`);
    //     }
    //     });
    // } 
    // else 
    // {
    //     console.log(`Folder ${folderName} already exists.`);
    // }
}
