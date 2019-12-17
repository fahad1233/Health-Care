import React from 'react'
import { Link } from 'react-router-dom';

function ContactPageContent(){
    return(
        
<div>
  <br />
  <br />
  <br />
  <br />
  <br />
  
  <div className="col-lg-4">
    <div className="media contact-info">
      <span className="contact-info__icon"><i className="ti-home" /></span>
      <div className="media-body">
        <h3>Dhanmondi-32, Dhaka.</h3>
        <p>Cell : +8801552368668</p>
      </div>
    </div>
    <div className="media contact-info">
      <span className="contact-info__icon"><i className="ti-tablet" /></span>
      <div classname="media-body">
  <h3>01552368668 , 01762536446  , 01515626625 </h3>
  <p>Sat to Thu 9am to 6pm</p>
</div>

    </div>
    <div className="media contact-info">
      <span className="contact-info__icon"><i className="ti-email" /></span>
      <div classname="media-body">
  <h3>musfiq.swe@diu.edu.bd</h3>
  <h3>shuvo3485@gmail.com</h3>
  <h3>ashfaqmahmud015@gmail.com</h3>
  <p>Send us your query anytime!</p>
</div>
    </div>
  </div>
  <div classname="col-md-6 col-lg-6">
  <h1>Thank You for Being with us....</h1>
</div>

  <br />
  <br />
  <br />
  <br />
</div>


    );
}


export default ContactPageContent;