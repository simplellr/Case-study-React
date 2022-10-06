import React,{Component} from 'react';
import {Form} from 'react-bootstrap';
import {Navigation} from './Navigation'
import {Link} from "react-router-dom";

export class SearchRoom extends Component{
render(){

 return(
        <div className='search'>
            <Navigation/>
            <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="Check_IN_DATE">
                        <Form.Label >Check In Date</Form.Label>
                        <Form.Control type="date" name="Check_IN_DATE" required 
                        placeholder="Check_IN_DATE"/>
                    </Form.Group>
                    <Form.Group controlId="Check_OUT_DATE">
                        <Form.Label>Check Out Date</Form.Label>
                        <Form.Control type="date" name="Check_OUT_DATE" required 
                        placeholder="Check_OUT_DATE"/>
                    </Form.Group>
                    <Form.Group controlId="Number_of_Adults">
                        <Form.Label>Number of Adults</Form.Label>
                        <Form.Control type="number" name="Number_of_Adults" required 
                        placeholder="Number of Adults"/>
                    </Form.Group>
                    <Form.Group controlId="RoomType">
                        <Form.Label>RoomType</Form.Label>
                        <Form.Control type="text" name="RoomType" required 
                        placeholder="RoomType"/>
                    </Form.Group>            
                    {/* <div >
                    <button onClick={() => alert('Rooms Available: 8')}>Check Availability</button>
                    </div> */}
                    <Link className="btnlink" to="/Booking"><b>Check Availability</b></Link>
           </Form>
        </div>
    )

    }   
}

export default SearchRoom