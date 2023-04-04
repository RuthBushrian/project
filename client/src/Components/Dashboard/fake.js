import {Get} from '../../Hooks/fetchWithHook';



function Fake()
{
    const {data: dataFake, loading:loadingFake, error:errorFake, refetch:refetchFake} = Get("http://localhost:4321/dash/fake/7");
    console.log(dataFake);
    if (loadingFake) return <p>Loading...</p>;
    if (errorFake){ return <p>Error!</p>;}
    console.log(dataFake[0].fake);


    return (
        <>
        <span style={{textAlign:"center", fontSize:"30px",borderColor:"black","border-style":"double",backgroundColor:"white",display: "block",width: "150px",height:" 120px"}}>fake: {dataFake[0].fake}</span>
        </>
    )
}
export default Fake;