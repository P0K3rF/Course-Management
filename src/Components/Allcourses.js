import React, { useState,useEffect } from 'react'
import Course from "./Course"
import base_url from '../Api/boot';
import axios from 'axios';
import { toast } from 'react-toastify';

const Allcourse = () => {

    useEffect(()=>{
       getcourse();
    },[]);

    const removeCourse=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id))
    }

    const getcourse=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                console.log(response.data);
                toast.success("All Course Loaded",{
                    position:'bottom-center'
                })
                setCourses(response.data)
            },
            (error)=>{
                console.log(error)
                toast.error("Something Went Wrong",{
                    position:'bottom-center'
                })

            }
        )
    }

    const [courses, setCourses] = useState([]);

    return (


        <div>
            <h1>All Courses</h1>
            <p>List of Courses</p>

            {
                courses.length > 0
                    ? courses.map((item) => 
                        <Course key={item.id} course={item} remove={removeCourse}/>
                    ) 
                    : "No course"
            }

        </div>
    );

};
export default Allcourse;
