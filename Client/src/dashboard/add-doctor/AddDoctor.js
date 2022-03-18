import { useState } from 'react';

function AddDoctor() {

    const [doctor, setDoctor] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const info = { ...doctor }
        info[e.target.name] = e.target.value
       // console.log("Im out 1 ", info)
        setDoctor(info);
    }
    const handlePicChange = (e) => {
        const info = e.target.files[0];
        //console.log("im out 2 ", info)
        setFile(info);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', doctor.name);
        formData.append('email', doctor.email);
        formData.append('phone', doctor.phone);
        console.log(formData)
        fetch('http://localhost:8080/addadoctor', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert("Insertion done");
        })
        .catch(error => {
            console.error(error.message)
        })
    }
    return (
        <>
            <form className="p-4" onSubmit={handleSubmit}>
                <h4 className="bg-main header-text">Add Doctor</h4>
                <div className="form-group mt-3">
                    <input type="text" onBlur={handleBlur} name="name" placeholder='Name' className="form-control" />
                </div>
                <div className="form-group mt-3">
                    <input type="text" onBlur={handleBlur} name="phone" placeholder='Phone number' className="form-control" />
                </div>
                <div className="form-group mt-3">
                    <input type="email" onBlur={handleBlur} name="email" placeholder='Email' className="form-control" />
                </div>
                <div className="form-group mt-3">
                    <input onChange={handlePicChange} className="form-control" type="file" />
                </div>
                <button type="submit" className="btn btn-main mt-3">Submit</button>
            </form>
        </>
    );
}

export default AddDoctor;