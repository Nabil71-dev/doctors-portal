function Patients({ patients }) {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" >Patients</th>
                        <th scope="col" >Email</th>
                        <th scope="col" >Age</th>
                        <th scope="col" >Weight</th>
                        <th scope="col" >Phone</th>
                        <th scope="col" >Service</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patients && (patients.map(patient =>
                         <tr key={Math.random()*10} >
                            <td>{patient.name}</td>
                            <td>{patient.email}</td>
                            <td>{patient.age}</td>
                            <td>{patient.weight} KG</td>
                            <td>{patient.phone}</td>
                            <td>{patient.service}</td>
                         </tr>
                        ))
                    }
                    {
                        patients.length===0 && <label className="text-danger">No appoinments recorder</label>
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Patients;