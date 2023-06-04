import useAxios from 'axios-hooks'


export const GetAllDocumentsForFile= () => {
    const [{ data, loading, error }, refetch] = useAxios(
      {
    url:"http://localhost:4321/document/file/168",
    method:'get'}
  );
    return { data, loading, error, refetch }
  };

export const CloseFileByOfficer= (details) => {
    const [{ data, loading, error }, refetch] = useAxios(
      {
    url:"http://localhost:4321/file/401",
    method:'put',
    data:details}
  );
    return { data, loading, error, refetch }
  };
