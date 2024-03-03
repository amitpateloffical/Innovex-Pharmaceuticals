import React from 'react'
import "./Home.css";
const Manufacturing = () => {
    return (
        <div className=''>
            <section className="innerBanner">
                <picture>
                    <img
                        className="responsive-image"
                        src="https://ajantapharma.com/assets/frontend/images/inner_banner/business_areas.jpg"
                        alt="Business Areas"
                        style={{ maxWidth: '100%' }}
                    />

                </picture>

                <div className="container">
                    <div className="innerpageTitle">
                        <div className="row h-100">
                            <div className="col-md-6 align-self-center aos-init aos-animate" >
                                <h1 data-aos="fade-right">Manufacturing</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className='Manufacturing-head'>   
         <h1 className='manufacturing-heading'>Manufacturing</h1>
     </div> */}

            <div className="container-fluid p-5 hero-header  mt-4">
                <div >
                    <div className=" g-5 align-items-center slider-img">
                        <div className=" " >
                            <div className="">
                                <img width="1200px" style={{ borderRadius: "15px 50px", boxShadow: "-5px -5px 9px rgba(184, 184, 184, 0.45) 5px 5px 9px rgba(78, 88, 104, 0.3)" }} className="img-fluid" src="https://img.freepik.com/free-photo/nobody-scientific-laboratory-with-research-instruments_482257-19303.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
                            </div>
                        </div>
                        <div

                        >
                            {/* <div className="home-head rounded-pill  px-3 mb-3">
                Business Area
              </div> */}
                            <h1 className="Manu-about">Precision Pharma Manufacturing Excellence</h1>
                            <p className="Manu-para">" Our pharmaceutical manufacturing is at the leading edge of precision and innovation. Using state-of-the-art facilities and technology, we produce high-quality and effective medications that meet the needs of patients worldwide. Our commitment to quality, efficiency, and sustainability ensures that every dose is produced to the highest standards. Join us in the journey towards better healthcare and pharmaceutical advancements.."</p>


                        </div>
                    </div>
                </div>
            </div>
            
            <div className=" p-5">
                <div style={{ background: "#AFEEEE", paddingLeft: "20px", paddingTop: "30px", paddingBottom: "30px", borderLeft: "4px solid green" }}>
                    <div className="  wow fadeIn p-2" data-wow-delay="0.5s" style={{ fontSize: "19px", fontWeight: "500" }}>
                    Welcome to the pinnacle of pharmaceutical manufacturing excellence. Our state-of-the-art facilities are dedicated to creating precision medications that empower the healing journey. With a commitment to quality and innovation, we ensure every dose is made with care, using the latest in technology and industry-leading standards. Discover the future of pharmaceutical manufacturing
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Manufacturing