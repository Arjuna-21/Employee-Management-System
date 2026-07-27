import React from 'react'
// import "./components/DashboardCards.css";
import './DashboardCards.css'


function DashboardCards({ employees }) {
    const totalSalary = employees.reduce((sum, emp) => {
        return sum + Number(emp.salary);
    }, 0);

    const averageSalary =
        employees.length > 0 ? Math.round(totalSalary / employees.length) : 0;

    const highestSalary = employees.length > 0 ? Math.max(...employees.map(emp => Number(emp.salary))) : 0;

    return (
        <div className="cards-container">
            <div className="card">
                <h3>Total Employees</h3>
                <h1>{employees.length}</h1>
            </div>

            <div className="card">
                <h3>Average Salary</h3>
                <h1>₹{averageSalary}</h1>
            </div>

            <div className="card">
                <h3>Highest Salary</h3>
                <h1>₹{highestSalary}</h1>
            </div>
        </div>
    )
}

export default DashboardCards