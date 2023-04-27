
import {Get} from '../../Hooks/fetchWithHook';


function Checked(props)
{
    
    
    const {data, loading, error, refetch } = Get(`dash/checked/${props.id}`);
    
    if (loading) 
    {
        return <p>Loading...</p>;
}
    if (error){ return <p>Error!</p>;}




    return (
        <>
       <span>{data[0].Checked}</span>
        </>
    )
}
export default Checked;