import React from 'react'

function About() {
  return (
    <section className="our_ability section_padding">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 col-lg-6">
            <div className="our_ability_img">
              <img src="img/ability_img.png" alt="" />
            </div>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="our_ability_member_text">
              <h2>Our Patients
                Are at the Centre of
            Everything We Do</h2>
              <p>Kind lesser bring said midst they're created signs made the beginni years
                created Beast upon whales herb seas evening she'd day green dominion
                evening in moved have fifth in won't in darkness fruitful god behold
            whos without bring created creature.</p>
              <ul>
                <li><span className="ti-mouse" />Modern Technology</li>
                <li><span className="ti-heart-broken" />Worldclass Facilities</li>
                <li><span className="ti-package" />Experienced Nurse</li>
                <li><span className="ti-headphone-alt" />24 Hours Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-5 col-lg-5">
            <div className="our_ability_member_text">
              <h2>We Analyse Your
                Health States In Order
          To Top Service</h2>
              <p>Kind lesser bring said midst they're created signs made the beginni years
                created Beast upon whales herb seas evening she'd day green dominion
                evening in moved have fifth in won't in darkness fruitful god behold
          whos without bring created creature.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="our_ability_img">
              <img src="img/top_service.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default About;