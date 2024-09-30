import "../css/message.css"
function MessageDisplay({ messages = [] }) {
    return (
      <div>
        <h3 className="title-display">Submitted Messages</h3>
        {messages.length > 0 ? (
          <ul>
            {messages.map((msg, index) => (
              <li key={index}>
                
                <div className="container-message">
                    <p><strong></strong> {msg.message}</p>
                </div>
                <div className="detail-message">
                    <p className="text-from">From {msg.from}</p>
                    <p className="text-waktu"><em>{msg.timestamp}</em></p> {/* Menampilkan timestamp */}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No messages submitted yet.</p>
        )}
      </div>
    );
  }
  
  export default MessageDisplay;
  