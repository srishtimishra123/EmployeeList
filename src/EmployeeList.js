import React, { useState } from 'react';
import './EmployeeList.css'
import { FaEdit, FaTrash } from 'react-icons/fa';


const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        gender: 'male',
        phoneNumber: '',
        contactModes: [],
        maritalStatus: 'single',
        immediateJoiner: 'No',
    });
    const [isEditMode, setIsEditMode] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? (checked ? [...prevData[name], value] : prevData[name].filter(mode => mode !== value)) : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEditMode) {
            
            const updatedEmployees = employees.map((emp) =>
                emp.id === formData.id ? { ...formData } : emp
            );
            setEmployees(updatedEmployees);
            setIsEditMode(false);
        } else {
          
            setEmployees([...employees, { ...formData, id: Date.now() }]);
        }

       
        setFormData({
            firstName: '',
            middleName: '',
            lastName: '',
            gender: 'male',
            phoneNumber: '',
            contactModes: [],
            maritalStatus: 'single',
            immediateJoiner: 'No',
        });
    };

    const handleEdit = (id) => {
        const employeeToEdit = employees.find((emp) => emp.id === id);
        setFormData({ ...employeeToEdit });
        setIsEditMode(true);
    };

    const handleDelete = (id) => {
        const updatedEmployees = employees.filter((emp) => emp.id !== id);
        setEmployees(updatedEmployees);
    };

    const handleClear = () => {
        setFormData({
            firstName: '',
            middleName: '',
            lastName: '',
            gender: 'male',
            phoneNumber: '',
            contactModes: [],
            maritalStatus: 'single',
            immediateJoiner: 'No',
        });
        setIsEditMode(false);
    };

    return (
        <div>
            <div className='row' >

                <div className='col-lg-4'></div>
                <div className='col-lg-4 ' style={{
                    border: '1px solid #00000029', borderRadius: "5px",
                    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
                }}>
                    <div className='row'>
                        <div className='col-lg-12 ves' style={{ borderRadius: '5px' }}>
                            <div className='' style={{ height: '100px' }}>
                                <div>
                                    <center>
                                        <h3 className='p-2' style={{ fontSize: '1.25rem', marginTop: '50px' }}>
                                            Employees List Project
                                        </h3>

                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label className='mt-2' style={{ float: 'left' }}>
                            First Name:    </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className='w-100'
                        />


                        <label className='mt-2' style={{ float: 'left' }}>
                            Middle Name:   </label>
                        <input
                            type="text"
                            name="middleName"
                            value={formData.middleName}
                            onChange={handleChange}
                            className='w-100'
                        />


                        <label className='mt-2' style={{ float: 'left' }}>
                            Last Name:   </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className='w-100'
                        />


                        <label className='mt-2' style={{ float: 'left' }}>Gender :</label>
                        <div className='mt-2' style={{ display: 'flex', flexDirection: 'row' }}>
                            <label style={{ display: 'flex', alignItems: 'center', marginRight: '10px', paddingLeft: '10px' }}>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleChange}
                                    className='w-100'
                                />
                                Male
                            </label>

                            <label style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleChange}
                                    className='w-100'
                                />
                                Female
                            </label>

                            <label style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="others"
                                    checked={formData.gender === 'others'}
                                    onChange={handleChange}
                                    className='w-100'
                                />
                                Others
                            </label>
                        </div>


                        <label className='mt-2' style={{ float: 'left' }}>
                            Phone Number: </label>
                        <input
                            type="number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className='w-100'
                        />

                        <label className='mt-2' style={{ float: 'left' }}>
                            Mode of contact : </label>
                        <div className='mt-2' style={{ display: 'flex', flexDirection: 'row', paddingLeft: '10px' }}>
                            <label style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                                <input
                                    type="checkbox"
                                    name="contactModes"
                                    value="email"
                                    checked={formData.contactModes.includes('email')}
                                    onChange={handleChange}
                                    className='w-100'
                                />
                                Email
                            </label>

                            <label style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="checkbox"
                                    name="contactModes"
                                    value="phone"
                                    checked={formData.contactModes.includes('phone')}
                                    onChange={handleChange}
                                    className='w-100'
                                />
                                Phone
                            </label>
                        </div>

                        <label className='mt-2' style={{ float: 'left' }}>
                            Marital Status:
                        </label>
                        <select
                            name="maritalStatus"
                            value={formData.maritalStatus}
                            onChange={handleChange}
                            className='w-100'
                        >
                            <option value="married">Married</option>
                            <option value="single">Single</option>
                            <option value="divorced">Divorced</option>
                            <option value="widowed">Widowed</option>
                        </select>


                        <div className='mt-2' style={{ display: 'flex', flexDirection: 'row' }}>
                            <label style={{ marginRight: '10px' }}>Immediate Joiner: </label>

                            <label style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                                <input
                                    type="radio"
                                    name="immediateJoiner"
                                    value="Yes"
                                    checked={formData.immediateJoiner === 'Yes'}
                                    onChange={handleChange}
                                    className='w-100'
                                />
                                Yes
                            </label>

                            <label style={{ display: 'flex', alignItems: 'center' }}>
                                <input
                                    type="radio"
                                    name="immediateJoiner"
                                    value="No"
                                    checked={formData.immediateJoiner === 'No'}
                                    onChange={handleChange}
                                    className='w-100'
                                />
                                No
                            </label>
                        </div>
                        <div className='row mt-3 mb-2'>
                            <div className='col-lg-6'>
                                <button type="submit" className='w-100 bg-dark text-white'
                                    style={{ borderRadius: '5px' }}>{isEditMode ? 'Update' : 'Submit'}</button>
                            </div>
                            <div className='col-lg-6'>
                                <button type="button" className='w-100 bg-white'
                                    style={{ borderRadius: '5px' }} onClick={handleClear}>
                                    Clear
                                </button>
                            </div>

                        </div>



                    </form>
                </div>
            </div>
            <div className='row mt-5' >
                <h5>Employee List Table</h5>
                <div className='col-lg-1'></div>
                <div className='col-lg-10'>
                    <table className="table table-bordered" style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Middle Name</th>
                                <th>Last Name</th>
                                <th>Gender</th>
                                <th>Phone Number</th>
                                <th>Contact Modes</th>
                                <th>Marital Status</th>
                                <th>Immediate Joiner</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((emp) => (
                                <tr key={emp.id}>
                                    <td>{emp.firstName}</td>
                                    <td>{emp.middleName}</td>
                                    <td>{emp.lastName}</td>
                                    <td>{emp.gender}</td>
                                    <td>{emp.phoneNumber}</td>
                                    <td>{emp.contactModes.join(', ')}</td>
                                    <td>{emp.maritalStatus}</td>
                                    <td>{emp.immediateJoiner}</td>
                                    <td className=''>
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <button onClick={() => handleEdit(emp.id)} className='p-1 text-white w-100'
                                                    style={{ border: '1px solid green', backgroundColor: 'green', borderRadius: '5px' }}>
                                                    <FaEdit /> Edit
                                                </button>
                                            </div>
                                            <div className='col-lg-6'>
                                                <button onClick={() => handleDelete(emp.id)} className='p-1 w-100 text-white'
                                                    style={{ border: '1px solid red', backgroundColor: 'red', borderRadius: '5px' }}>
                                                    <FaTrash /> Delete
                                                </button>
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>




        </div>
    );
};

export default EmployeeList;
