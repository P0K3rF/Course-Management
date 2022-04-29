import React, { Fragment, useState } from 'react'
import { Container, Form, FormGroup, Input,Button } from 'reactstrap';
import axios from 'axios';
import base_url from '../Api/boot';
import { toast } from 'react-toastify';
function AddCourse(){

    const[course,setCourse]=useState({});

    const handleForm=(e)=>{
        if(typeof course.id==='undefined' || course.id==='' || typeof course.title==='undefined' || course.title==='' || typeof course.description==='undefined' || course.description===''){
            e.preventDefault();
            toast.warning("Every Field is Required")

        }else{
            console.log(course.id,course.title)
            postdatatoserver(course)    
            e.preventDefault();
               const input1=document.querySelector('#userId');
        const input2=document.querySelector('#Title');
        const input3=document.querySelector('#Description'); 
      input1.value='';
      input2.value='';
      input3.value='';
        }
        // console.log(course);
      
      
     
        
    }

    const postdatatoserver=(data)=>{
        axios.post(`${base_url}/addcourse`,data).then(
            (response)=>{
                // console.log(response)
                toast.success("Success")
            },
            (error)=>{
                console.log(error)
                toast.error("Error")
            }
        )
    }

    return(
        <Fragment>
            <h1 className="text-center my-3"> Fill Course Details</h1>
           <Form onSubmit={handleForm}>
           <FormGroup>
           <label for="userId">Course Id</label>
           <Input type="text" placeholder="Enter Id" name="userId" id="userId"
           onChange={(e)=>{
               setCourse({...course,id:e.target.value});
           }}
           
        //    ref="refid"
           />
           </FormGroup>

           <FormGroup>
           <label for="Title">Course Title</label>
           <Input type="text" placeholder="Enter Title" name="Title" id="Title"
           onChange={(e)=>{
            setCourse({...course,title:e.target.value});
        }}
        //   ref="reftitle"
           />
           </FormGroup>

           <FormGroup>
           <label for="Description">Course Description</label>
           <Input type="textarea" placeholder="Enter Description" name="Description" id="Description"
           onChange={(e)=>{
               

                   setCourse({...course,description:e.target.value});
               
        }}
        // ref="refdesc"
        />
           </FormGroup>
         <Container className='text-center'> 
             <Button type="submit" color='success'>Add Course</Button>{' '}
             <Button type="reset" color='warning'>Clear</Button>
         </Container>
           
         
           </Form>

        </Fragment>

    );
}

export default AddCourse;