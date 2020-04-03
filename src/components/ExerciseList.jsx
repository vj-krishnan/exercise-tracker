import React, { useState, useEffect } from "react"
import axios from "axios"
import Exercise from "../components/Exercise"

export default function ExerciseList() {
    let [exercises, setExercises] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/exercises/').then(res => {
            setExercises(res.data);
        }).catch(err => console.log(err));
    },[])

    function deleteExercise(id) {
        axios.delete(`http://localhost:5000/exercises/${id}`).then(res => console.log(res)).catch(err => console.log(err));
        setExercises(exercises.filter(el => el._id !== id))
    }

    return(
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map(current => {
                        return <Exercise exercise={current} deleteExercise={deleteExercise} key={current._id}/>
                    })}
                </tbody>
            </table>
        </div>
    );
}