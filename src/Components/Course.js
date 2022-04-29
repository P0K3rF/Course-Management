import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
}from 'reactstrap'
import base_url from '../Api/boot';


function Course({course,remove}){


    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Deleted Succsefully");
                remove(id);
            },
            (error)=>{
                toast.error("Something Went Wrong");
            }
        )
    }

    return(


        <Card className='text-center'>
            <CardBody>
                <CardTitle tag="h5">
                   {course.title}
                </CardTitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color='danger' onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>{'   '}
                    <Button color="warning ml-3">Update</Button>
                    
                </Container>
            </CardBody>
        </Card>
    );



}
export default Course;