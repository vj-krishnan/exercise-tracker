import React, { useState } from "react"
import axios from "axios"

export default function CreateUser() {
    let [userList, setUserList] = useState({
        username: ""
    });

    function handleChange(e) {
        setUserList({
            username: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        let user = {
            username: userList.username
        }

        console.log(user);

        axios.post("http://localhost:5000/users/add", userList)
        .then(res => console.log(res.data));

        setUserList({
            username: ""
        });
    }
    return(
        <div>
            <h3>Create New User</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" required
                        className="form-control"
                        value={userList.username}
                        onChange={handleChange}
                        />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>
        </div>   
    );
}