import {Button, Card, CardBody, CardGroup} from "reactstrap"
import React from "react"


function Home(){

    return(
       
      <Card style={{backgroundColor:'rgb(209, 227, 240)'}}>
        <CardBody className="text-center">
          <h1>Course Management</h1>
          <p className="my-3">This Application use to manage the courses</p>
          <Button color="danger my-2 mb-4" outline> Get Started</Button>
        </CardBody>
      </Card>
    );
};
export default Home;