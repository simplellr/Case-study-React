import React, { useState } from "react";
import './App.css';
import { Navigation } from './Navigation'

export const Reservation = () => {
  const [Id, setId] = useState();
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [PhoneNumber, setPhoneNumber] = useState();
  const [Address, setAddress] = useState();
  const [IdProof, setIdProof] = useState();
  const [RoomType, setRoomType] = useState();
  const [NoOfMembers, setNoOfMembers] = useState();
  const [CheckIn, setCheckIn] = useState();
  const [CheckOut, setCheckOut] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      fetch("http://localhost:24396/api/Reservation", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

          Id: Id,
          Name: Name,
          Email: Email,
          PhoneNumber: PhoneNumber,
          Address: Address,
          IdProof: IdProof,
          RoomType: RoomType,
          NoOfMembers: NoOfMembers,
          CheckIn: CheckIn,
          CheckOut: CheckOut

        })
      }).then(() => {
        alert("Reservation Done Successfully! please enter card details");
        console.log('Successful');

      }).error((err) => {
        alert("Unsuccessful");
      })
      console.log(Id, Name, Email, PhoneNumber, Address, IdProof, RoomType, NoOfMembers, CheckIn, CheckOut);
    }
    catch (error) {
      console.log(error);

    }
  };
  return (
    <div>
      <Navigation />
      <div className="boxed">

        <h2>Reservation</h2>
        <form onSubmit={submitHandler}>
          <section className="flex-row wid100">
            <div className="input-group wid50">
              <label>Id : <span className="star-important">*</span></label>
              <input
                type="text"
                name="Id"
                value={Id}
                placeholder="Id"
                onChange={(e) => setId(e.target.value)}
                required
              />
            </div>
            <div className="input-group wid50 margin-left5">
              <label>Name : <span className="star-important">*</span></label>
              <input
                type="text"
                name="Name"
                value={Name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </section>
          <section className="flex-row wid100">
            <div className="input-group wid50">
              <label>Email : <span className="star-important">*</span></label>
              <input
                type="text"
                name="Email"
                value={Email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group wid50 margin-left5">
              <label>PhoneNumber <span className="star-important">*</span></label>
              <input
                type="text"
                name="PhoneNumber"
                value={PhoneNumber}
                placeholder="PhoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </section>
          <section className="flex-row wid100">
            <div className="input-group wid50">
              <label>Address : <span className="star-important">*</span></label>
              <input
                type="text"
                name="Address"
                value={Address}
                placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="input-group wid50 margin-left5">
              <label>IdProof : <span className="star-important">*</span></label>
              <input
                type="text"
                name="IdProof"
                value={IdProof}
                placeholder="IdProof"
                onChange={(e) => setIdProof(e.target.value)}
                required
              />
            </div>
          </section>
          <section className="flex-row wid100">
            <div className="input-group wid50">
              <label>RoomType <span className="star-important">*</span></label>
              <input
                type="text"
                name="RoomType"
                value={RoomType}
                placeholder="RoomType"
                onChange={(e) => setRoomType(e.target.value)}
                required
              />
            </div>
            <div className="input-group wid50 margin-left5">
              <label>NoOfMembers : <span className="star-important">*</span></label>
              <input
                type="text"
                name="NoOfMembers"
                value={NoOfMembers}
                placeholder="NoOfMembers"
                onChange={(e) => setNoOfMembers(e.target.value)}
                required
              />
            </div>
          </section>
          <section className="flex-row wid100">
            <div className="input-group wid50">
              <label>CheckIn : <span className="star-important">*</span></label>
              <input
                type="date"
                name="CheckIn"
                placeholder="CheckIn"
                onChange={(e) => setCheckIn(e.target.value)}
                required
              />
            </div>
            <div className="input-group wid50 margin-left5">
              <label>CheckOut : <span className="star-important">*</span></label>
              <input
                type="date"
                name="CheckOut"
                placeholder="CheckOut"
                onChange={(e) => setCheckOut(e.target.value)}
                required
              />
            </div>
          </section>

          <button onClick={submitHandler} className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );

};
export default Reservation;