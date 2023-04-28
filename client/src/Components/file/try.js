import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Create } from '../../Hooks/fetchData'
import { FileUpload } from 'primereact/fileupload';


export default function Try(props) {

    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileUpload = async (event) => {
        const curFiles = [...selectedFiles];
        for (let i = 0; i < event.files.length; i++) {
            const file = event.files[i];
            if (file.objectURL == undefined)
                file.objectURL = URL.createObjectURL(file);
            const reader = new FileReader();
            reader.onload = (event) => {
                curFiles.push({
                    document: event.target.result,
                    name: file.name.slice(0, file.name.lastIndexOf('.')),
                    objectURL: file.objectURL
                })
            }
            reader.readAsDataURL(file);
        }

        setSelectedFiles(curFiles);
    }


    const createFile = async () => {
        const fileToCreate = {
            ApplicationSubmissionDate: "2002-12-11T22:00:00.000Z",
            IDnumberOfApplicant: "111111118",
            name: "ddd",
            officerId: 7,
            remarks: "",
            statusId: 1,
            documents: selectedFiles,
        };
        console.log(fileToCreate);
        const res = await Create(`file`, fileToCreate);
        // formik.resetForm();
    }

    return (<>

        <div className="flex card-container blue-container overflow-hidden" style={{ fontFamily: 'fantasy' }}>

            <div className="flex-grow-1" >

                <FileUpload onSelect={handleFileUpload} multiple accept="*/*" maxFileSize={1000000000} />

            </div>
        </div>


        <div className="card flex justify-content-center">
            {console.log(selectedFiles)}
            <Button type="submit" label={"צור תיק"} className="mt-2"
                onClick={() => createFile()} />
            <Button onClick={() => console.log(selectedFiles)}></Button>
        </div>
    </>);
}