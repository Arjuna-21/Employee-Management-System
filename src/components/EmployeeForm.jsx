import React from 'react'
import './EmployeeForm.css';

function EmployeeForm({
    id, name, setName, email, setEmail, salary, setSalary, password, setPassword, addEmployee, updateEmployee
}) {
  return (
    <div className='form-container'>
      <h1 className="form-title">{id ? "Update Employee" : "Add Employee"}</h1>
        <div className="form-group">
                <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />

                <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />

                <input type="number" placeholder='Enter Salary' value={salary} onChange={(e) => setSalary(e.target.value)} />

                <input type="password" value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />

                <button className='submit-btn' onClick={id ? updateEmployee : addEmployee}>{id ? "UpdateEmployee" : "Add Employee"} </button>
            </div>
    </div>
  )
}

export default EmployeeForm