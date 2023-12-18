import React from 'react'
import './Testimonials.scss'
import { Link } from 'react-router-dom'

const Testimonials = ({item}) => {
  return (
    <div className='testimonials'>
        <div className="container">
            <h1>{`"${item.testimonial_name}"`}</h1>
            <p>{item.testimonial_desc}</p>
            <h3>{item.testimonial_address}</h3>
        </div>
    </div>
  );
}

export default Testimonials;
