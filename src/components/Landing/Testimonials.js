import React, { Component } from 'react';
import testimonial from '../../images/testimonials.jpg';
class Testimonials extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <br />
                        <p>Thank you for your support! Since we opened our clinic in this community, we have treated more and more people in need including world-famous wrestling star and Calgarian, Bret “Hitman” Hart.</p>
                        <p>After his Royal Meridian Massage, Bret said to a reporter “Harmonia Wellness's Therapy is a miracle compared to any other treatment I went through.”  It was a very rewarding experience to treat Bret.</p>
                        <h6>Bret “Hitman” Hart</h6>
                        <br /><br />
                        <p>When I was young and playing football, I never gave a second thought to the aches and pains that I would have to endure as my body got older. It's no fun awakening with the stiff joints and the soreness in many areas. In particular, I had a lot of back problems and I tried many different types of treatments without much success. I tried a variety of massages and never found much relief until I discovered the incredible Korean massage at Harmonia Wellness.</p>
                        <p>Wow!  It was amazing and for the first time I really felt like there was a relief for my aches and pains. Now I can hit a golf ball farther by loosening my muscles and joints; it means my flexibility and mobility are way more increased. Take it from an old football player, you must try their massage for yourself and see the difference.</p>
                        <h6>Joe Forzani, The Forzani Group</h6>
                        <br /><br />
                        <p>I was in so much pain with my sciatica that even sitting down presented a huge problem. I tried many different types of treatment and had resigned myself to living with the pain. Then I tried a massage treatment at Harmonia Wellness and after only one session I began to feel better. I have now had three treatments and I can walk normally and have even returned to work. I have recommended their services to all my family and friends. Thank you so much for your help in my recovery.</p>
                        <h6>Eunju Kim</h6>
                        <br />
                    </div>                    
                    <div className="col-sm">
                        <br />
                        <img src={testimonial} alt="testimonial" />
                        <br /><br />
                    </div>
                </div>                
            </div>
        );
    }
}

export default Testimonials;