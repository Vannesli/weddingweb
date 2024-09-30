import "../css/location.css"
import Bunga1 from "../assets/bunga1.png"
import Bunga2 from "../assets/bunga2.png"
import { withDefaults } from "vue"
function Location(){
    return(
        <>
            <div className="section-location">
                <div className="title-location">
                    <h1>Location</h1>
                </div>

                <div className="maps-location">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.483407392023!2d107.60166357604544!3d-6.952162668064851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8ec7a20343f%3A0x6109c03d02f8e3d5!2sYayasan%20Harapan%20Kasih%2C%20Mekarwangi%2C%20Kec.%20Bojongloa%20Kidul%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040237!5e0!3m2!1sid!2sid!4v1727356474791!5m2!1sid!2sid"
                        width="400px"
                        height="400px"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="detail-location">
                    <p> Gedung serbaguna Jl. Jend. Sudirman No 12 Kota Bandung Jawa Barat, Indonesia </p>
                </div>

                <img className="Bunga-kanan" src={Bunga1}></img>
                <img className="Bunga-kiri" src={Bunga2}></img>
            </div>
        </>
    )
}
export default Location