import UploadDocuments from './uploadDocuments';
import FileDetails from './fileDetails';
import { Divider } from 'primereact/divider';
import {Panel} from 'primereact/panel'
import React, {useState, useRef } from "react";
import { Button } from 'primereact/button';
import { CreateFile } from '../../Hooks/files';
import { Create } from '../../Hooks/fetchData';
import { Dialog } from 'primereact/dialog';

const OpenFile = () => {


    // const toast = useRef(null);
    // const [items, setItems] = useState([]);

    // const show = () => {
    //     toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
    // };

    // const search = (event) => {
    //     setItems([...Array(10).keys()].map((item) => event.query + '-' + item));
    // };

    // const formik = useFormik({
    //     initialValues: {
    //         item: ''
    //     },
    //     validate: (data) => {
    //         let errors = {};

    //         if (!data.item) {
    //             errors.item = 'Value is required.';
    //         }

    //         return errors;
    //     },
    //     onSubmit: (data) => {
    //         data.item && show(data);
    //         formik.resetForm();
    //     }
    // });

    // const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

    // const getFormErrorMessage = (name) => {
    //     return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
    // };

    // return (
    //     <div className="card flex justify-content-center">
    //         <form onSubmit={formik.handleSubmit} className="flex flex-column gap-2">
    //             <label htmlFor="ac_item">Value</label>
    //             <Toast ref={toast} />
    //             <AutoComplete
    //                 inputId="ac_item"
    //                 name="item"
    //                 value={formik.values.item}
    //                 suggestions={items}
    //                 completeMethod={search}
    //                 className={classNames({ 'p-invalid': isFormFieldInvalid('item') })}
    //                 onChange={(e) => {
    //                     formik.setFieldValue('item', e.value);
    //                 }}
    //             />
    //             {getFormErrorMessage('item')}
               
    //         </form>
    //     </div>
    // )
    const [visible, setVisible] = useState(false);
    const footerContent = (
        <div style={{textAlign:"center"}}>
            <Button label="אישור"  onClick={() => setVisible(false)} className="p-button-text" />
        </div>
    );
    

return(
<>
    <div className="card flex justify-content-center">
        <div className="p-mr-2 p-col-6">
            <Panel header="פרטי התיק">
                <FileDetails />
            </Panel>
        </div>
        
        <Divider layout="vertical" />

        <div className="p-d-flex p-flex-row-reverse">
            <Panel header="העלאת מסמכים">
                <UploadDocuments />
            </Panel>
        </div>

        
    </div> 
    <div className="card flex justify-content-center">
            <Button label="לפתיחת תיק" icon="pi pi-external-link" onClick={() => 
                
                {
                    const a= {
                        "IDnumberOfApplicant": document.getElementById("id").value,
                        "ApplicationSubmissionDate":document.getElementById("date").value ,
                        "name": document.getElementById("name").value,
                        "remarks": document.getElementById("remarks").value,
                        "statusId":1
                    };
                    console.log(document.getElementById("name").value);
                    Create('http://localhost:4321/file', a);
                    setVisible(true)
                }
                } />
            <Dialog header="😊 התיק נפתח בהצלחה" visible={visible} style={{ width: '350px', textAlign:"center"}} onHide={() => setVisible(false)} footer={footerContent} >
                <p  style={{textAlign:"center"}}>
                    שם : {document.getElementById("name")!=null?document.getElementById("name").value==''?"לא הוכנס שם":document.getElementById("name").value:"   "} 
                </p>
                <p   style={{textAlign:"center"}}>
                    הערות : {document.getElementById("remarks")!=null?document.getElementById("remarks").value==''?"לא הוכנסו הערות":document.getElementById("remarks").value:"   "} 
                </p>
            </Dialog>
        </div>
        </>
    )
}
export default OpenFile;

// const OpenFile = () => {
//     return (<div className="card flex justify-content-center">
    
//         <Splitter style={{ margin:'100px' }}>
        
//             <SplitterPanel className="flex align-items-center justify-content-center" size={25} minSize={10}>
//               <div className="p-mr-2 p-col-6">  <FileDetails /> </div>
//             </SplitterPanel>
       
        
//             <SplitterPanel className="flex align-items-center justify-content-center" size={75}>
//                <div className="p-mr-2 p-col-6"> <UploadDocuments /></div>
//             </SplitterPanel>
      
//     </Splitter> 
//      </div>
//       );
// };





// const OpenFile = () => {
//     return (<div className="card flex justify-content-center">
    
//         <Splitter style={{ margin:'100px' }}>
        
//             <SplitterPanel className="flex align-items-center justify-content-center" size={25} minSize={10}>
//               <div className="p-mr-2 p-col-6">  <FileDetails /> </div>
//             </SplitterPanel>
       
        
//             <SplitterPanel className="flex align-items-center justify-content-center" size={75}>
//                <div className="p-mr-2 p-col-6"> <UploadDocuments /></div>
//             </SplitterPanel>
      
//     </Splitter> 
//      </div>
//       );
// }; 