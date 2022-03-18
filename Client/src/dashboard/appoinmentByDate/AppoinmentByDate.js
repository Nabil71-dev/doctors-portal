function AppoinmentByDate({ appoinment_data }) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" >Patients</th>
            <th scope="col" >Email</th>
            <th scope="col" >Service</th>
          </tr>
        </thead>
        <tbody>
          {
            appoinment_data && (appoinment_data.map(appoinment_data => 
              <tr key={Math.random()*10}>
                <td>{appoinment_data.name}</td>
                <td>{appoinment_data.email}</td>
                <td>{appoinment_data.service}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {
            appoinment_data.length === 0 && <p className="text-danger">No appoinments recorder</p>
      }
    </>
  );
}
export default AppoinmentByDate;