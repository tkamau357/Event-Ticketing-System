import React from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import Card from "../Card/Card";
import img2 from '../../assets/gogle.png';
import img3 from '../../assets/moringa.png';
import img4 from '../../assets/safaricom.png';
import img5 from '../../assets/yotube.png';
import img6 from '../../assets/microsoft.png';
import './Industry.css';
import Footer from "../Footer/Footer";

function Industry(){
    return (
    <><div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 1}}>
            <div style={{ paddingTop: '250px', paddingLeft: '20px', color: '#fff', textAlign: 'left' }}>
                <h1 >
                The powerful ticketing<br></br> platform for all events
                </h1>
                <h4>Organize professional events such as conferences, <br></br>seminars, 
                    galas, dinners, and end of year parties with EventMS.
                </h4>          
            </div>
        </div>
        <img src="https://images.unsplash.com/photo-1690292877741-12bfea5c748f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" className="img-fluid" alt="Responsive image" style={{ width: '100%', height: '10%',   filter: 'brightness(0.8)', zIndex: 0 }} />
        <h3 style={{ paddingTop: '50px', textAlign: 'center' }}>Events created by thousands of organizations around the globe</h3>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', margin: '50px 0' }}>
            <img src={img2} className="img-fluid" alt="" style={{ maxWidth: '200px', margin: '10px' }} />
            <img src={img3} className="img-fluid" alt="" style={{ maxWidth: '200px', margin: '10px' }} />
            <img src={img4} className="img-fluid" alt="" style={{ maxWidth: '200px', margin: '10px' }} />
            <img src={img5} className="img-fluid" alt="" style={{ maxWidth: '200px', margin: '10px' }} />
            <img src={img6} className="img-fluid" alt="" style={{ maxWidth: '200px', margin: '10px' }} />
        </div> 
        <div class="reason">
            Why choose EventMS for your next business event?
        </div><br></br>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', margin: '50px 0' }}>
            {/* <Card>
                <h2>Powerful features</h2>
                <p>Lorem ipsum dolor sit amet. Est molestiae animi 
            eum voluptates quae et laborum voluptas et laborum voluptatem vel suscipit quia 
            qui assumenda distinctio aut tenetur sint. </p>
            </Card>
            <Card>
                <h2>Easy Tracking of bookings</h2>
                <p>Lorem ipsum dolor sit amet. Est molestiae animi 
            eum voluptates quae et laborum voluptas et laborum voluptatem vel suscipit quia 
            qui assumenda distinctio aut tenetur sint. </p>
            </Card>
            <Card>
                <h2>Secure payment</h2>
                <p>Lorem ipsum dolor sit amet. Est molestiae animi 
            eum voluptates quae et laborum voluptas et laborum voluptatem vel suscipit quia 
            qui assumenda distinctio aut tenetur sint. </p>
            </Card> */}
          <Card/>
        </div>
        <div class="review">
            Reviews from event organizers
        </div>
        <div class="review-card">
            <ReviewCard rating={5} review="Lorem ipsum dolor sit amet. Est molestiae animi 
            eum voluptates quae et laborum voluptas et laborum voluptatem vel suscipit quia 
            qui assumenda distinctio aut tenetur sint. " 
                 />
            <ReviewCard rating={4} review="Lorem ipsum dolor sit amet. Est molestiae animi 
            eum voluptates quae et laborum voluptas et laborum voluptatem vel suscipit quia 
            qui assumenda distinctio aut tenetur sint. "   />
            <ReviewCard rating={5} review="Lorem ipsum dolor sit amet. Est molestiae animi 
            eum voluptates quae et laborum voluptas et laborum voluptatem vel suscipit quia 
            qui assumenda distinctio aut tenetur sint. "   />
        </div>
    </div>
    <Footer/></>
    )
}

export default Industry;