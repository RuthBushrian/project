import React from "react";
import GetAllFiles from "../Hooks/files";
import AllFiles from "./file/allFiles";
import FileDetail from "./file/fileDetails";
import ValidInput from "./validInput";
import UploadDocuments from "./file/uploadDocuments";
import OpenFile from "./file/openFile";
import Login from "./login";
import File from "./file/file"

const Home= ()=>
{
    return (
        <>
        {/* hello home*/}
        {/* <AllFiles></AllFiles>  */}
        {/* <Login></Login> */}
        <UploadDocuments></UploadDocuments>
        {/* <OpenFile></OpenFile> */}
        {/* <File></File> */}
        {/* <FileDetail></FileDetail> */}
        {/* <ValidInput invalidFunction={(x)=>x.length>5} name="שם משתמש" ></ValidInput> */}
        </>
    )
}

export default Home;