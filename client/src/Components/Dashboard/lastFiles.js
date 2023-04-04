
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Get} from '../../Hooks/fetchWithHook';



function GetLasts()
{
    const {data: dataFiles, loading:loadingFiles, error:errorFiles, refetch:refetchFiles } = Get("http://localhost:4321/dash/5/7");
    
    if (loadingFiles) 
    {
        return <p>Loading...</p>;
}
    if (errorFiles){ return <p>Error!</p>;}

    return(
        
        <div  style={{height:"10%",width:"70%"}}>
            <DataTable  value={dataFiles}  dataKey="file.idfile" className="text-right" >
            <Column className="text-right" field="file.IDnumberOfApplicant" header="מספר בקשה" sortable style={{ minWidth: '12rem' }}></Column>
            <Column className="text-right" field="file.ApplicationSubmissionDate" header="תאריך פתיחת הבקשה" sortable style={{minWidth: '12rem' }}></Column>
            <Column className="text-right" field="date" header="תאריך סיום בדיקה" sortable style={{ minWidth: '12rem' }}></Column>
            </DataTable> 
        </div>
    )
}
export default GetLasts;