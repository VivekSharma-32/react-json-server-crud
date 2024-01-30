import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Header from "../common/Header";
import { toast } from "react-toastify";

const ListUser = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:4000/users");
    const data = await res.json();
    setUsers(data);
  };

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      await fetch("http://localhost:4000/users/" + id, {
        method: "DELETE",
      });
    }
    const newUsers = users.filter((user) => user.id !== id);
    toast("User Deleted successfully");
    setUsers(newUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row py-4">
          <div className="col-md-6">
            <h3>Users</h3>
          </div>
          <div className="col-md-6 text-end">
            <Link to="/users/create" className="btn btn-primary">
              Create User
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card border-0 shadow p-3">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th width="150">Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>
                    <Link
                      to={`/users/edit/${user.id}`}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                    <Link
                      onClick={() => deleteUser(user.id)}
                      className="btn btn-danger ms-1"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListUser;
