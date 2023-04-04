
import {Get} from '../../Hooks/fetchWithHook';



function Active()
{
  
    const {data, loading, error, refetch } = Get("http://localhost:4321/dash/active/7");
    
    if (loading) 
    {
        return <p>Loading...</p>;
}
    if (error){ return <p>Error!</p>;}



    return (
        <>
        <span style={{textAlign:"center", fontSize:"30px",borderColor:"black","borderStyle":"double",backgroundColor:"white",display: "block",width: "150px",height:" 120px"}}>active: {data[0].active}</span>
        </>
    )
}
export default Active;