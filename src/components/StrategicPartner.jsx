import '../assets/css/StrategicPartner.css';
import GreenLogo from '../assets/images/ksa-green.png';

const StrategicPartner = () => {
    return (
        <>
            <div className="stratigic-partners">
                <div className="section-heading headingedit pt-5 pb-3" data-aos="fade-up" data-aos-duration="3000">
                    <h2>Strategic<em style={{color: '#0274B8'}}> Partners</em></h2>
                </div>
                <div className="st-partner-wrap" data-aos="fade-up" data-aos-duration="3000">
                    <div className="partner-left">
                        <a href="https://greencpa.info/" target="_blank"><img src={GreenLogo} alt="ksa-green" title="ksa-green" /></a>
                        <p style={{textAlign:'justify'}}>Green is an auditing, accounting and consulting firm established in 2022. Greene focuses and specializes in startups and investments along with auditing and insurance for all types of companies, solving financial problems, incorporation and outsourcing.</p>
                        <a href="https://maps.app.goo.gl/Dz4axG1PPhks9zkx8?g_st=ic" target="_blank" className="part-links"><i className="fa fa-map-marker"></i> Almalqa, Riyadh , Saudi Arabia</a>
                        <a href="tel:+966541705513" className="part-links"><i className="fa fa-phone"></i> 966541705513</a>
                        <a href="mailto:Info@greencpa.info" className="part-links"><i className="fa fa-envelope"></i> Info@greencpa.info </a>
                    </div>
                    <div className="partner-right">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.5747915596294!2d46.6208834!3d24.810009599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee5505c7dea6b%3A0xf07b7e243c026656!2sBusiness%20Valley!5e0!3m2!1sen!2ssa!4v1691419961187!5m2!1sen!2ssa" 
                        style={{border:'0'}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">                           
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StrategicPartner