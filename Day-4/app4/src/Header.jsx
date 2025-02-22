import React from 'react'

export default function Header(props) {
  return (
    <div>
        Header
        <h1>{props.email}</h1>
        <h1>Varaible from App:{props.a}</h1>
        <h1>Student Name= {props.student.name}</h1>
        <h1>Student RollNo: {props.student.rollno}</h1>


    </div>
    
    
  )
}
