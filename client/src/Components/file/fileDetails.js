import {React, useEffect, useState} from "react";
import { InputText } from "primereact/inputtext";
import {InputTextarea} from "primereact/inputtextarea"
import {Calendar} from "primereact/calendar"

function FileDetail()
{

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [remarks, setRemarks] = useState('');

    return (
        <div className="card flex justify-content-center" dir="ltr" class="flex flex-column card-container green-container">
            <span className="p-float-label" style={{margin:"15px"}}>
                <InputText id="id" value={id} onChange={(e) => setId(e.target.value)} />
                <label htmlFor="id">ת"ז מגיש הבקשה</label>
            </span>

            <span className="p-float-label" style={{margin:"15px"}}>
                <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="id">שם מגיש הבקשה</label> 
            </span> 
 
            <span className="p-float-label" style={{margin:"15px"}}>
                <Calendar inputId="date" value={date} onChange={(e) => {setDate(new Date(e.target.value))}} />
                <label htmlFor="date">תאריך הגשת הבקשה</label>
            </span>

            <span className="p-float-label" style={{margin:"15px"}}>
                <InputTextarea id="remarks" value={remarks} onChange={(e) => setRemarks(e.target.value)} rows={5} cols={30} />
                <label htmlFor="remarks">הערות</label>
            </span>
        </div>
    )
      
}

export default FileDetail;
