import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import './BusinessAreas.css';
import { useEffect, useRef } from 'react';
import Footer from '../../components/Footer';

function IndiaBranded() {
    const listRefs = useRef([]);

    useEffect(() => {
        AOS.init({ duration: 1400 });
        // AOS.refresh();
    }, []);

    useEffect(() => {
        if (listRefs.current) {
            ""
        }
        const observers = [];

        listRefs.current.forEach((listRef) => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const listItems =
                            listRef.current.querySelectorAll(".list-group-item");
                        listItems.forEach((item) => {
                            item.classList.add("list-item-animation");
                        });
                        observer.unobserve(entry.target);
                    }
                });
            });

            if (listRef.current) {
                observer.observe(listRef.current);
            }
            observers.push(observer);
        });
    }, []);
    return (
        <>
            <div className="BusinessArea">
                <section className="innerBanner">
                    <picture>
                        <img src="https://ajantapharma.com/assets/frontend/images/inner_banner/businessareas_indiabranded.jpg"
                            style={{ maxWidth: '100%' }} />
                    </picture>
                    <div className="container">
                        <div className="innerpageTitle">
                            <div className="row h-100">
                                <div className="col-md-6 align-self-center aos-init aos-animate" >
                                    <h1 data-aos="fade-right">INDIA - BRANDED GENERICS</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='businesspage'>
                    <div className="row">
                        <div className="linkerItem col-md-3">
                            <div className="container mt-5">
                                <div className="card p-4 bg-light">
                                    <div className='d-flex flex-column align-items-start'>
                                        <Link to="/businessareas" data-aos="fade-right"> <button className='btn btn-warning mb-1'>Overview</button></Link>
                                        <Link to="/indiabranded" data-aos="fade-right"> <button className='btn btn-warning mb-1'>India-Branding Generics</button></Link>
                                        <Link to="/emergingmarkets" data-aos="fade-right"> <button className='btn btn-warning mb-1'>Emerging Markets - Branded Generics</button></Link>
                                        <Link to="/usgenerics" data-aos="fade-right"> <button className='btn btn-warning mb-1'>USA - Generics</button></Link>
                                        <Link to="/africainstitution" data-aos="fade-right"> <button className='btn btn-warning mb-1'>Africa - Institution Business</button> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="container">
                                <div className="heading-business m-4" data-aos="fade-left">
                                    At Ajanta Pharma we are proud to be among the top 30 companies in India with 26th rank in December 2023 as per IQVIA.
                                </div>
                                <div className="m-4 text-secondary" data-aos="fade-left">
                                    In last 10 years, Ajanta has galloped ranking in India market with clear focus on 4 fast growing specialty therapeutic segments, supported by launching first of its kind innovative products in the market. Today Ajanta is in an enviable position in all the 4 major therapeutic segments of Cardiology, Dermatology, Ophthalmology and Pain Management with many of our brands enjoying leadership positions in respective sub-therapeutic segments. We have been growing faster than the industry in all these segments.
                                </div>
                                <div className="m-4 text-secondary" data-aos="fade-left">
                                    Ajanta has a unique advantage of launching differentiated products ahead of competition, many of them being first of its kind in the market. Out of the rich basket of 300+ products launched in India, more than 50% products are 1st to market.
                                </div>
                            </div>
                            <div className="paratwo p-5 mb-4 d-flex">
                                <div className="overview-part2 p-1" data-aos="fade-right">
                                    In Ophthalmology segment, Ajanta has created many formulations in the eye-drop form for the 1st time in the country. Bimat (Anti Glaucoma), Nepaflam (Anti-inflammatory), Softdrops (Lubricant), and Olopat (Anti-Allergic) are some of the innovative products launched in India. Ajanta enjoys 2nd rank in Ophthalmology in India as per IQVIA Dec MAT 2023 ranking.
                                </div>
                                <div className="medicineImg p-2 m-20" data-aos="fade-left">
                                    <img src="https://ajantapharma.com//images/businessareas_indiabranded_1.png" className="w-75" />
                                </div>
                            </div>
                            <div className="p-5 d-flex">
                                <div className="medicineImg" data-aos="fade-right">
                                    <img src="https://ajantapharma.com//images/businessareas_indiabranded_2.png" className="w-51" />
                                </div>
                                <div className="overview-part2 p-1" data-aos="fade-left">
                                    Ajanta has a strong presence in Dermatology with 15th rank in India as per IQVIA Dec MAT 2023. Products like Melacare cream for Melasma problem; Pacroma, the topical immune-modulators; Antidandruff shampoo Salisia KT; moisturizing lotion Aquasoft are enjoying leading positions in their sub therapeutic segments.
                                </div>
                            </div>
                            <div className="paratwo p-5 mb-4 d-flex">
                                <div className="overview-part2 p-1" data-aos="fade-right">
                                    For Cardiology segment, Ajanta has many innovative products like MET XL (1st extended release formulation of Metoprolol), Atorfit CV (combination of Atorvastatin & Clopidogrel), Antihypertensive Cinod (Cilnidipine), Rosutor Gold (Triple combination - Aspirin, Rosuvastatin & Clopidogrel), Dapalex (SGLT 2 Inhibitor), and Vilatin (DDDP4 inhibitor). All these products are leaders in their sub-segments and have created strong brand equity with the medical professionals. We stand at 17th rank in Cardiology in India as per IQVIA MAT ranking for Dec 2023.
                                </div>
                                <div className="medicineImg p-2 m-20" data-aos="fade-left">
                                    <img src="https://ajantapharma.com//images/businessareas_indiabranded_3.png" className="w-90" />
                                </div>
                            </div>
                            <div className="p-5 d-flex">
                                <div className="medicineImg" data-aos="fade-right">
                                    <img src="https://ajantapharma.com//images/businessareas_indiabranded_4.png" className="w-100" />                                </div>
                                <div className="overview-part2 p-1" data-aos="fade-left">
                                    For Pain Management segment, Ajanta stands at 28th rank in India as per IQVIA MAT ranking for Dec 2023. Ajanta’s brand Feburic indicated for anti-gout therapy enjoys top position for the Febuxostat molecule.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndiaBranded
