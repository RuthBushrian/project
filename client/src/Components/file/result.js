import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Get } from '../../Hooks/fetchWithHook';
import doc from './doc.jpg'
import { Avatar } from "primereact/avatar";
import { FetchFileData } from '../../Hooks/fetchData';

function Result(props) {

    const { data, loading, error, refetch } = props.details ? Get(`document/file/${props.details.idfile}`) : {};

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) { return <p>Error!</p>; }
    const ProductTemplate = (data) => {
        const getDocuments = async () => {
            const x = await FetchFileData(`${props.details.idfile}/${data.name}`);
            setFile(x);
        }

        const [file, setFile] = useState('');
        useEffect(() => {
            getDocuments();
        }, [])

        return (
            <>
            <div class="grid">
                <div className="flex flex-row flex-column border-1 surface-border border-round m-2 text-center py-1 px-2 ">
                    <div className="mb-3 flex align-items-start flex-wrap card-container yellow-container justify-content-center flex-wrap card-container yellow-container">
                        {/* {file && (<iframe
                            style={{
                                width: "100%",
                                height: "100vh",
                            }}
                            src={blobUrlDocs}
                            type={"image/jpeg"}
                            title="בדיקה"
                        /> 
                        )*/}
                        <div className="col-12 ">
                        <iframe src= {`http://localhost:4321/document/${props.details.idfile}/${data.name}/${data.docType}`}
                        style={{height:"500px"}}></iframe>
<p></p></div>

                        <div>מספר מסמך: {data.iddocument} תוצאת מסמך: {data.result}</div>
                        <Avatar
                            label="56%"
                            className="mr-2"
                            padding="9px"
                            size="large"
                            style={{ margin: "20px", fontSize: "18px", backgroundColor: "#2196F3", color: "#ffffff" }}
                            shape="circle"
                        />
                    </div>
                </div>
                </div>
            </>
        );
    };

    return (<>

        {/* <div className="card flex justify-content-center"> */}
        {data && <div dir={'ltr'} style={{ dir: 'ltr' }}>
            <Carousel value={data} numVisible={1} numScroll={1} orientation="horizontal" verticalViewPortHeight="360px"
                itemTemplate={ProductTemplate} />
        </div>}
        {/* </div> */}
    </>
    )
}
export default Result;
