
import {Get} from '../../Hooks/fetchWithHook';



function Check()
{
    

    const {data, loading, error, refetch } = Get("http://localhost:4321/dash/check/7");
    
    if (loading) 
    {
        return <p>Loading...</p>;
}
    if (error){ return <p>Error!</p>;}




    return (
        <>
       <span style={{textAlign:"center", fontSize:"30px",borderColor:"black","border-style":"double",backgroundColor:"white",display: "block",width: "150px",height:" 120px"}}>check: {data[0].UnderCheck}</span>
        </>
    )
}
export default Check;