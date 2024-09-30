import "../css/invite.css"
import Image2 from "../assets/bginvite.png"
import Foto1 from "../assets/4.jpg"
import Foto2 from "../assets/3.jpg"
import Foto3 from "../assets/2.jpg"
import { useState, useEffect } from "react"
import MessageForm from "../component/message"
import MessageDisplay from "../component/messageDisplay"

function Invite(){
    const [messages, setMessages] = useState([]); // State diinisialisasi sebagai array kosong

    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem('messages'));
        if (storedMessages) {
          setMessages(storedMessages);
        }
      }, []);

      const handleMessageSubmit = (newMessage) => {
        const currentDate = new Date(); // Mendapatkan tanggal dan waktu saat ini
        const messageWithTimestamp = {
          ...newMessage,
          timestamp: currentDate.toLocaleString(), // Format tanggal dan waktu menjadi string yang mudah dibaca
        };
        
        const updatedMessages = [...messages, messageWithTimestamp];
        setMessages(updatedMessages);
        localStorage.setItem('messages', JSON.stringify(updatedMessages));
      };
    const handleClearMessages = () => {
        setMessages([]); // Kosongkan state messages
        localStorage.removeItem('messages'); // Hapus dari localStorage
      };
    return(
        <>
            <div className="section-invite">
                <div className="title-invite">
                    <h1> You're Invited! </h1>
                    <div className="sub-title-invite">
                        <h3>to come and celebrate our special day!</h3>
                    </div>

                </div>

                <div className="grid-foto">
                    <div className="foto1">
                        <img src={Foto1}></img>
                        <div className="blank">hey</div>
                    </div>
                    <div className="foto2">
                        <img src={Foto2}></img>
                        <div className="blank2">hey</div>
                    </div>
                    <div className="foto3">
                        <img src={Foto3}></img>
                        <div className="blank3">hey</div>
                    </div>
                </div>

                <div className="message">
                    <MessageForm onMessageSubmit={handleMessageSubmit} />
                    <MessageDisplay messages={messages} />
                    <button onClick={handleClearMessages}>Clear All Messages</button> {/* Tombol untuk menghapus semua pesan */}
                </div>
            </div>
        </>
    )

}
export default Invite