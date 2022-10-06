import './App.css';
import UserLogin from './UserLogin'
import {Home} from './Home';
import {SetRoomRates} from './SetRoomRates';
import {RoomManagement} from './RoomManagement';
import {Navigation} from './Navigation';
import Payment from './Payment'
import {Reservation} from './Reservation'
import {Booking} from './Booking'
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import SearchRoom from './SearchRoom';
import UserRegistration from './UserRegistration';


function App() {
  return (
    <div className="App">
      <div className='text'>
      <div className='image'>
     <Router>
       <div className="container" >
       <h2 className="main-heading">
          Welcome to Grand Hyatt
      </h2>     

      {/* <Navigation/> */}
      {/* <UserLogin/> */}
      {/* <UserRegisteration/> */}
     
     <Routes>
       <Route path='/' element={<UserLogin/>} />
       <Route path='/Home' element={<Home/>} />
       <Route path='/SetRoomRates' element={<SetRoomRates/>}/>
       <Route path='/RoomManagement' element={<RoomManagement/>}/>
       <Route path='/Reservation' element={<Reservation/>}/>
       <Route path='/Payment' element= {<Payment/>} />
       <Route path='/SearchRoom' element={<SearchRoom/>}/>
       <Route path='/Booking' element={<Booking/>}/>
       <Route path='/UserRegistration' element={<UserRegistration/>} />
     </Routes>
    </div>
    </Router>
    </div>
    </div>
    </div>
  );
}

export default App;