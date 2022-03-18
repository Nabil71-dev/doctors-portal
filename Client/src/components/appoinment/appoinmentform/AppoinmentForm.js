import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');


function AppoinmentForm({ ...rest }) {
    const {appoinmentOn,modalIsOpen,closeModal,date}={...rest};

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        
        data.service=appoinmentOn;
        data.appoinment_date=date;
        data.created=new Date();

        fetch('http://localhost:8080/addAppoinment',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(success=>{
            closeModal();
            alert("Appoinment done successfully")
        })
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="header-text bg-main text-center">{appoinmentOn}</h2>
                <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mt-3">
                        <input type="text" name="name" {...register("name", { required: true })} placeholder='Name' className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" name="phone" {...register("phone", { required: true })} placeholder='Phone number' className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group mt-3">
                        <input type="email" name="email" {...register("email", { required: true })} placeholder='Email' className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row mt-3">
                        <div className="col-4">
                            <select className="form-control" name="gender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not select">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input type="number" name="age" {...register("age", { required: true })} placeholder='Age' className="form-control" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input type="number" name="weight" {...register("weight", { required: true })} placeholder='Weight' className="form-control" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>
                    <div className="form-group text-end mt-3">
                        <button type="submit" className="btn btn-main">Submit</button>
                    </div>
                </form>
            </Modal>
        </>
    );
}
export default AppoinmentForm;