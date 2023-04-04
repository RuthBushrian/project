import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useNavigate } from "react-router-dom"
import {Post} from "../../Hooks/fetchWithHook"
import {Delete} from "../../Hooks/fetchData"
import { classNames } from 'primereact/utils';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';
import { ProgressSpinner } from 'primereact/progressspinner';

function AllFiles(props) 
{    

    const { data, loading, error, refetch } = Post("http://localhost:4321/file/getfiles");
    const [files, setFiles]=  useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [statuses] = useState(["נבדק עי הפקיד", "בבדיקה עי הפקיד", "נסגר"]);
    const [filters, setFilters] = useState({
        IDnumberOfApplicant: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        ApplicationSubmissionDate: { value: null, matchMode: FilterMatchMode.CONTAINS },
        "status.name": { value: null, matchMode: FilterMatchMode.IN },
        result: { value: null, matchMode: FilterMatchMode.EQUALS }
    });
    const dt= useRef(null);

    useEffect(()=>{
        if(data)
            setFiles(data.map(i=>
                {
                    if(i.result==null)
                        i.result=2
                    return i;
                }
                ))
    },[data])

    const navigate = useNavigate();
 
    if (loading) 
        return <div style={{textAlign: "center", margin:"40%"}}><ProgressSpinner></ProgressSpinner></div>;
    if (error) 
       {return <p>Error!</p>;} 

    const openNew = (navigate) => {
        navigate("/openfile")
    }

    const ConfirmDeleteSelected = async (selectedFiles) => {
        console.log(selectedFiles);
        const idSelectedFiles = selectedFiles.map(file => file.idfile)
        await Delete('http://localhost:4321/file', {"filesToDelete":idSelectedFiles})
    }

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const rightToolbarTemplate = () => {
        return <Button label="Export" icon="pi pi-upload" onClick={exportCSV} />;
    };

    const leftToolbarTemplate = (selectedFiles, refetch,navigate) => {
        return (
            <div className="flex flex-wrap align-items-center justify-content-between gap-2" >
                <Button label="New " icon="pi pi-plus" severity="success" onClick= {() => 
                    {
                        openNew (navigate)
                    }
                } />
                &nbsp;
                <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={async () => 
                    {
                        await ConfirmDeleteSelected(selectedFiles);
                        refetch()
                    }
                } />
            </div>
        );
    }

    const header = (
        <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput=
                {
                    (e) => setGlobalFilter(e.target.value)
                }
                placeholder="חיפוש" />
            </span>
        </div>
    );

    const statusFilter = (options) => {
        return (
            <MultiSelect value={options.value} options={statuses} onChange=
            {(e) =>
                {  
                    options.filterApplyCallback(e.value);
                }
            } 
            placeholder="בחר סטטוס" className="p-column-filter" style={{ minWidth: '12rem' }} />
        );
    };


    const ResultBody= (options) => {
        return ResultItemTemplate(options.result);
    };

    const dateBody= (options) => {
        return new Date(options.ApplicationSubmissionDate).toLocaleDateString();
    };


    const ResultItemTemplate= (options) => {
        return options==1?
        <i style={{color:"green"}}className={classNames('pi', 'true-icon pi-check-circle')}></i>:
        options==0?
        <i style={{color:"red"}}className={classNames('pi','false-icon pi-times-circle')}></i>:
        <i className="pi pi-spin pi-spinner"></i>    
    };

    const resultFilter = (options) => {
        return (
            <Dropdown value={options.value} options={[0,1,2]}
            onChange={(e) =>{
            options.filterApplyCallback(e.value);}} 
            placeholder="בחר" className="p-column-filter"  
            style={{ minWidth: '3rem' }} itemTemplate={ResultItemTemplate}/>
        );
    };

        return (
            <div>
                <Toolbar className="mb-4"  right={rightToolbarTemplate} left={leftToolbarTemplate(selectedFiles, refetch, navigate)}></Toolbar>
                <DataTable ref={dt} onRowClick={(e)=>{alert(`enter to page of file ${e.data}`)}} value={files} selection={selectedFiles} 
                onSelectionChange={(e) =>{setSelectedFiles(e.value)}} filters={filters} 
                filterDisplay="row" globalFilterFields={['IDnumberOfApplicant','status.name', 'ApplicationSubmissionDate']}  
                emptyMessage="No files found." selectionMode={'checkbox'}
                dataKey="idfile" className="text-right" paginator rows={10} rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="{first} עד {last} מתוך {totalRecords} תיקים" 
                    globalFilter={globalFilter} header={header}>

                    <Column className="text-right" selectionMode="multiple"  exportable={false}></Column>
                    <Column className="text-right" field="IDnumberOfApplicant" filter filterPlaceholder="חיפוש" style={{ minWidth: '12rem' }} header= 'ת"ז מגיש הבקשה' sortable ></Column>
                    <Column className="text-right" field="ApplicationSubmissionDate" body={dateBody} filter filterPlaceholder="חיפוש" style={{ minWidth: '12rem' }} header="תאריך פתיחת הבקשה" sortable></Column>
                    <Column className="text-right" field='status.name' filter filterElement={statusFilter} style={{ minWidth: '12rem' }} header="סטאטוס" sortable showFilterMenu={false}></Column>
                    <Column className="text-right" field="result" body={ResultBody} style={{ minWidth: '3rem' }} header="תוצאה"filter filterElement={resultFilter} showFilterMenu={false}/>
                </DataTable> {/*   */}
            </div>
        );
    }

export default AllFiles;