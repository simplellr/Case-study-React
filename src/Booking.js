/* eslint-disable no-undef */
import React, { Component } from 'react'
import {Table} from 'react-bootstrap';
import {Navigation} from './Navigation';
import {Link} from "react-router-dom";

export class Booking extends Component {
    constructor(props) {
        super(props)

        this.state = {setrates:[], addModalShow:false}
    }

    refreshList(){
        fetch("http://localhost:24396/api/booking")
        .then(response=>response.json())
        .then(data=>{
            this.setState({setrates:data});
        });
    }
    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    displaymessage(ev) {
        alert("Booking is Successfully Done. Proceed with Resveration.")
    }

    render() {
        const {setrates}=this.state;
        return (
            <form onSubmit={this.displaymessage}>
            <div>
                <Navigation/>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>RoomType</th>
                        <th>Facilities</th>
                        <th>No_of_Adults</th>
                        <th>BasePrice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {setrates.map(setrate=>
                            <tr key={setrate.RoomType}>
                                <td>{setrate.RoomType}</td>
                                <td>{setrate.Facilities}</td>
                                <td>{setrate.No_of_Adults}</td>
                                <td>{setrate.BasePrice}</td>
                                <Link className="btnlink" to="/reservation"><b>reservation</b></Link>
                            </tr>)}
                    </tbody>
                    </Table>
            </div>
            </form>
        )
    }

}
export default Booking