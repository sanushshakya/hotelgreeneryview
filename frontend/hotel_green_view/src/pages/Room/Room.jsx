import React, {useState, useEffect} from 'react'
import "./Room.scss"
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import config from '../../config';

const Room = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const roomName = queryParams.get('room_name');
    const description = queryParams.get('description');
    const image = queryParams.get('image');
    const price = queryParams.get('price');

    const [reservationData, setReservationData] = useState({
        check_in: '',
        check_out: '',
        room_type: roomName,
        phone: '',
    });
    
    const handleReservation = async(e) => {
        e.preventDefault();
        try {
            const resReservation = await axios.post(`${config.apiBaseUrl}/reservation/Reservation/`, reservationData);
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
    <div className='room'>
        <div className="container">
            <div className="top">
                <img src={image} />
            </div>
            <div className="bottom">
                <div className="left">
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
                            <input type='text' name="room_type" value = {roomName}/>
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
                <div className="right">
                    <img src={image} />
                    <span className='desc'>{description}</span>
                    <span className='price'>Rs. {price}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Room
