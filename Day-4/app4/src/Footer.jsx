import React from 'react'

export default function Footer({ student, doctor }) {
    return (
        <div>Footer(Destructuring Props)
            <h1>Student</h1>
            <h2>{student.name}</h2>
            <h2>{student.rollno}</h2>


            <h1>Doctor</h1>
            <h2>{doctor.name}</h2>
            <h2>{doctor.department}</h2>

        </div>
    )
}
