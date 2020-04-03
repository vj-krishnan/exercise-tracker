import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios"

export default function CreateExercise() {
    let [exerciseList,setExerciseList] = useState({
        username:"",
        description:"",
        duration:0,
        date:new Date(),
        users:[]
    });

    useEffect(() => {
        axios.get("http://localhost:5000/users/")
        .then(response => {
            if(response.data.length > 0) {
                setExerciseList({
                    users: response.data.map(user => user.username),
                    username: response.data[0].username
                })
            }
        })
    },[])

    function handleChange(e) {
        let {name, value} = e.target;
        setExerciseList({
            [name]: value
        })
    }

    function handleChangeDate(date) {
        setExerciseList({
            date: date
        })
    }

    function handleSubmit(e) {
        e.preventDefault();

        let exercise = {
            username: exerciseList.username,
            description: exerciseList.duration,
            duration: exerciseList.duration,
            date: exerciseList.date
        }

        console.log(exercise);

        axios.post("http://localhost:5000/exercises/add", exercise)
        .then(res => console.log(res.data));

        window.location = "/";
    }

    return(
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <select required className="form-control" name="username" value={exerciseList.username} onChange={handleChange}>
                        {
                            exerciseList.users.map((name, index) => {
                                console.log(name);
                                return <option key={index + 1} value={name}>{name}</option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" className="form-control" name="description" value={exerciseList.description} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input type="number" className="form-control" name="duration" value={exerciseList.duration} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker selected={exerciseList.date} onChange={handleChangeDate}/>
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    );
}