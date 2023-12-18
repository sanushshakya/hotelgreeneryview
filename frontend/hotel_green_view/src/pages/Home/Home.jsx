import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import './Home.scss';
import Banner from '../../components/Banner/Banner';
import { Link } from 'react-router-dom';
import Room from '../../components/Room/Room';
import Amenities from '../../components/Amenities/Amenities';
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = () => {
  const [banners, setBanner] = useState([]);
  const [rooms, setRoom] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
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



  useEffect(() => {
    const fetchData = async () => {
      try {
        const resBan = await axios.get(`http://localhost:8000/gallery/Gallery/`);
        setBanner(resBan.data);
        const resRoom = await axios.get(`http://localhost:8000/room/Room/`);
        setRoom(resRoom.data);
        const resTest = await axios.get(`http://localhost:8000/testimonial/Testimonial/`);
        setTestimonials(resTest.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
  <div className='home'>
    <div className="container">
      <div className="banner">
          <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} autoFocus>
              {banners.slice(0, 3).map(ban => (
              <Banner item={ban} key={ban.id} />
              ))}
          </Carousel>
      </div>
      <div className="cmpTitle explore">
        <h1>Hotel Greenery View</h1>
        <p>Peaceful stay! Have an amazing stay here.</p>
        <Link to='/gallery' className='link'>Explore more {'>'}</Link>
      </div>
      <div className="search">
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
            <label>Search</label>
            <button type='submit'>Check Now</button>
          </span>
        </form>
      </div>
      <div className="desc">
        <div className="left">
          <span className='text'>
            Book Your Room & Enjoy
            The Comfort With
          </span>
          <span className='title'>
            Hotel Greenery View
          </span>
        </div>
        <div className="right">
          <span>
          Hotel GREENERY view located at Lingding East Sikkim is 10 minute drive for Gangtok main town and 5 minutes drive from
         siliguri Taxi stand . The Hotel Greenery view gives you pleasure of homely environment 
          where you can enjoy the Mesmerising view of floora funna of of Sikkim. Hotel gives you extremely alluring, 
          pleasantly boisterous and spectacular view of greenery nestled below Mt.Kanchenjunga ( The third highest mountain of the World.)
          </span>
        </div>
      </div>
      <div className="cmpTitle">
        <h1>Our Rooms & Suites</h1>
        <p>Modern Living made available in the most luxurious way for everyone to enjoy</p>
      </div>
      <div id= "1" className="room">
        {rooms.slice(0,2).map(room => (
          <Room item={room} key={room._id} />
        ))}
      </div>
      <div className="cmpTitle">
        <h1>Amenities Offered</h1>
        <p>A wide range of amenities for the visitors and guests to enjoy and relax</p>
      </div>
      <div className="amenities">
        <Amenities />
      </div>
      <div className="restaurant">
        <div className="left">
          <img src='restaurant.jpg' />
        </div>
        <div className="right">
          <h1>
            Our family Restaurant is the most Ideal Eat
            & Local Foodies
          </h1>
          <p>
            The cuisine brings you foodielicious delicacies from the Sikimese, 
            European, far eastern, oriental and north Indian kitchen located 
            in our restaurant. We provide you with the best flavour packed 
            delights that melt in your mouth and takes you on Sikimese food. 
            We prepare quality meals to serve you with wholesome and delicious 
            platters curated using selected ingredients, fresh herbs and spices.
          </p>
          <Link className='link' to='/about'><button>Read More</button></Link>
        </div>
      </div>
      <div className="testimonials">
        <div className="cmpTitle test">
          <h1>What Guest are Saying</h1>
        </div>
        <div className="logo">
          <img src='google.png' />
          <img src='trip.png' />
          <img src='booking.png' />
        </div>
        <div className="review">
          {testimonials.slice(0,2).map(test => (
            <Testimonials item={test} key={test.id} />
          ))}
        </div>
      </div>

    </div>
  </div>
  );
}

export default Home;
