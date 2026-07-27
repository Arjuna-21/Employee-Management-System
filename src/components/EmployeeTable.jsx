import React from 'react'
// import Dashboard from '../pages/Dashboard';
import './EmployeeTable.css';

function EmployeeTable({
    employees= [], editEmployee, setDeleteId, setShowDeleteModal, search=""
})
    
    {
        
        const filterEmployees = employees.filter((employee) => {
        return employee.name.toLowerCase().includes(search.toLowerCase()) ||
                employee.email.includes(search);
    })

    
  return (
    <div className='table-container'>
        <table className='employee-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filterEmployees.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td><b>{emp.name}</b></td>
                                <td>{emp.email}</td>
                                <td>{emp.salary}</td>
                                <td><button className='edit-btn' onClick={() => editEmployee(emp)}>Edit</button></td>
                                <td><button className='delete-btn' onClick={() => { 
                                    setDeleteId(emp.id); 
                                    setShowDeleteModal(true) }}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    </div>
  )
}

export default EmployeeTable