import React, { useEffect, useState } from 'react'
import api from '../services/api';
import EmployeeTable from '../components/EmployeeTable';
import EmployeeForm from '../components/EmployeeForm';
import SearchBar from '../components/SearchBar';
import DeleteModal from '../components/DeleteModal';
import DashboardCards from '../components/DashboardCards';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { toast } from 'react-toastify';

function Dashboard() {
    const [employees, setEmployees] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [verifyPassword, setVerifyPassword] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadEmployees();
    }, []);

    const navigate = useNavigate();

    const token = localStorage.getItem("token");
    let username = "";

    if(token) {
        const decode = jwtDecode(token);
        username = decode.sub;
    }

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    const loadEmployees = async () => {
        const token = localStorage.getItem("token");

        const response = await api.get("/employees", {
            headers: {
                Authorization: "Bearer " + token
            }
        });
        setEmployees(response.data);
    }

    const addEmployee = async () => {
        const token = localStorage.getItem("token");
        console.log(token);
        try {
            await api.post("/employees", {
                name, email, salary, password
            },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            toast.success("Employee Added successfully");
            setName("");
            setEmail("");
            setSalary("");
            setPassword("");

            loadEmployees();

        } catch (error) {
            console.log(error);
            console.log(error.response);
            console.log(error.response?.status);
            console.log(error.response?.data);
            toast.error("Failed to add Employee");
        }
    };

    const editEmployee = (employee) => {
        setId(employee.id);
        setName(employee.name);
        setEmail(employee.email);
        setSalary(employee.salary);
    }

    const updateEmployee = async () => {
        const token = localStorage.getItem("token");

        try {
            await api.put(`/employees/${id}`, {
                name, email, salary, password
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success("Employee updateded successfully");
            setId(null);
            setName("");
            setEmail("");
            setSalary("");
            setPassword("");

            loadEmployees();

        } catch (error) {
            console.log(error);
            toast.error("Update Failed")
        }
    }

    const verifyDeletePassword = async () => {
        const token = localStorage.getItem("token");

        try {
            console.log(deleteId);
            console.log(verifyPassword);
            const response = await api.post("/employees/verify-password", {
                id: deleteId,
                password: verifyPassword
            }, 
            {
                headers: {
                    Authorization: `Bearer ${token}`
            }
            })
            console.log(response.data);
            console.log(typeof response.data);
            console.log(response.status);
            if (response.data) {
                await deleteEmployee(deleteId);
                setShowDeleteModal(false);
                setVerifyPassword("");
                setDeleteId(null);
            } else {
                toast.error("Wrong Password");
            }
        } catch (error) {
            console.log(error);
            toast.error("Verification Failed");
        }
    }
    const deleteEmployee = async (id) => {
        const token = localStorage.getItem("token");
        try {
            const response = await api.delete(`/employees/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            toast.success("Deleted Successfully");

            loadEmployees();
        } catch (error) {
            console.log(error);
            toast.error("Delete Failed");
        }
    }

    return (
        <div>
            <Navbar username={username} logout={logout} />

            <DashboardCards employees={employees} />

            <EmployeeForm id={id} name={name} setName={setName} email={email} setEmail={setEmail} salary={salary} setSalary={setSalary} password={password} setPassword={setPassword} addEmployee={addEmployee} updateEmployee={updateEmployee} />

            <div className="search-bar">
                <SearchBar search={search} setSearch={setSearch} />
            </div>

            <EmployeeTable employees={employees} editEmployee={editEmployee} setShowDeleteModal={setShowDeleteModal} setDeleteId={setDeleteId} search={search} />

            <DeleteModal showDeleteModal={showDeleteModal} verifyPassword={verifyPassword} setVerifyPassword={setVerifyPassword} verifyDeletePassword={verifyDeletePassword} setShowDeleteModal={setShowDeleteModal} />
        </div>
    )
}

export default Dashboard