import React, {useState, useEffect} from 'react'
import './Reserve.scss'
import axios from 'axios';

const Reserve = () => {
    const [reservationData, setReservationData] = useState({
        check_in: '',
        check_out: '',
        room_type: '', // You might want to add this field
        phone: '',
    });
    
    const handleReservation = async(e) => {
        e.preventDefault();
        try {
            const resReservation = await axios.post('http://localhost:8000/reservation/Reservation/', reservationData);
            window.location.href = '/'
        } catch (error) {
            console.error(error.response?.data || error);
        }
    }
    const handleChange = (e) => {
        setReservationData({
            ...reservationData,
            [e.target.name]: e.target.value,
        });
    };
  return (
    <div className='reserve'>
      <div className="container">
        <h1>Book Your Room</h1>
        <p>Details:</p>
        <form onSubmit={handleReservation}>
            <span>
                <label>Check In</label>
                <input type='date' name="check_in" placeholder="yyyy-MM-dd" onChange={handleChange}/>
            </span>
            <span>
                <label>Check Out</label>
                <input type='date' name="check_out" placeholder="yyyy-MM-dd" onChange={handleChange}/>
            </span>
            <span>
                <label>Room Type</label>
                <select name="room_type" onChange={handleChange}>
                    <option>--Select Room--</option>
                    <option>Deluxe</option>
                    <option>Premium</option>
                </select>
            </span>
            <span>
                <label>Phone</label>
                <input type='text' name='phone' placeholder='Phone Number' onChange={handleChange}/>
            </span>
            <span>
                <button type='submit'>Reserve Now</button>
            </span>
        </form>
      </div>
    </div>
  )
}

export default Reserve
