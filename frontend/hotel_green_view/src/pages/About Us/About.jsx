import React, {useEffect, useState} from 'react'
import './About.scss'
import Banner from '../../components/Banner/Banner';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import Room from '../../components/Room/Room';
import Testimonials from '../../components/Testimonials/Testimonials';
import config from '../../config';

const About = () => {
    const [banners, setBanner] = useState([]);
    const [rooms, setRoom] = useState([]);
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try{
            const resBan = await axios.get(`${config.apiBaseUrl}/gallery/Gallery/`);
            setBanner(resBan.data)
            const resRoom = await axios.get(`${config.apiBaseUrl}/room/Room/`);
            setRoom(resRoom.data)
            const resTest = await axios.get(`${config.apiBaseUrl}/testimonial/Testimonial/`);
            setTestimonials(resTest.data)
          } catch (error){
            console.error(error);
          }
        }
      fetchData();
    }, [])
  return (
    <div className='about'>
        <div className="container">
            <div className="banner">
            <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false} showIndicators={false} autoFocus>
                    {banners.slice(3, 5).map(ban => (
                        <Banner item={ban} key={ban.id} />
                    ))}
                </Carousel>
            </div>
            <div className="cmpTitle">
                <h1>About Hotel Greenery View</h1>
            </div>
            <div className="desc">
                <p>
                One of the finest hotels in Gangtok is Hotel Greenery View, located in Tadong, Gangtok. This well-known business serves both 
                local and out-of-town consumers as a one-stop shop for services. This company has made significant progress along the way and now 
                firmly holds a position in its sector. This business has amassed a sizable client base that is only continuing to expand because of 
                its firm belief that customer happiness is just as vital as its goods and services.
                </p>
            </div>
            <div className="content-1">
                <div className="left">
                    <img src='organic.jpg' />
                </div>
                <div className="right">
                    <div className="title">
                        <h1>The Organic</h1>
                        <p>
                            We are offer 60 cover seating capacity fine dining multicuisine restaurant
                            with Delicious food .hotel greenery view offer to you three to six type”s 
                            of cuisine Like (indian, chines, tandoori, mughlai, continental, and 
                            nepalish also)  Our restaurent (the organic) also offer sikkim traditional 
                            food which is made by organic vegetable and herbs. 
                            This is unforgettable.
                        </p>
                    </div>
                </div>
            </div>
            <div className="content-2">
                <div className="left">
                    <div className="title">
                        <h1>Meetings & Conferences</h1>
                        <p>
                            Hotel greenery offer a versatile locale for everybanqueting requirement.hotel greenery offer you         
                            80 people capacity conference hall. 150 people capacity of 
                            Banquet hall which is very attractiveof social funtion like,birthday party, 
                            Anniversary, get-togather, meny others. Hotel greenery always give you special
                            priority for your respectable busness promotion and your improtent 
                            Conference.
                        </p>
                    </div>
                </div>
                <div className="right">
                    <img src='meeting.jpg' />
                </div>
            </div>
            <div className="content-1">
                <div className="left">
                    <img src='banquet.jpg' />
                </div>
                <div className="right">
                    <div className="title">
                        <h1>Benquate, Hall Facility</h1>
                        <p>
                            Eighteen hundred square feet of Banquet hall and SUITABLE FOR 
                            THE Marriage party, birthday celebration.Get-together and others 
                            programmed. At time 250 to 300 people doing party.
                        </p>
                    </div>
                </div>
            </div>
            <div className="cmpTitle">
                <h1>Rooms & Suites</h1>
            </div>
            <div className="room">
                {rooms.slice(0,2).map(room => (
                <Room item={room} key={room._id} />
                ))}
            </div>
            <div className="testimonials">
                <div className="cmpTitle test">
                    <h1>What Guest are Saying</h1>
                </div>
                <div className="review">
                    {testimonials.slice(0,2).map(test => (
                        <Testimonials item={test} key={test.id} />
                    ))}
                </div>
            </div>
            <div className="cmpTitle">
                <h1>TERMS & CONDITIONS</h1>
            </div>
            <div className="conditions">
                <ul>
                    <li>All room rates are inclusive of buffet breakfast, Lunch, Dinner and Exclude taxes</li>
                    <li>CHECK IN 12 PM / CHECK OUT 11 AM</li>
                    <li>Booking : Can be made at any time with advance payment</li>
                    <li>Valid permit orAdvance Payment Invoice and ID proof has to be presented by visitors at the time check in.</li>
                    <li>Each room having the specified number of beds is meant strictly for such number of persons. Only two children below the age of 10 years will be allowed free.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About
