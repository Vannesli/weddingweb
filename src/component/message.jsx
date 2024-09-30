import "../css/message.css"
import { useState } from 'react';

function MessageForm({ onMessageSubmit }) {
  const [formData, setFormData] = useState({
    from: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onMessageSubmit(formData); // Kirim data ke komponen parent
    setFormData({ from: '', message: '' }); // Kosongkan form setelah submit
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-form">
        <label htmlFor="from"></label>
        <input
          type="text"
          id="from"
          name="from"
          value={formData.from}
          onChange={handleChange}
          placeholder="From"
          required
        />
      </div>
      <div>
        <label htmlFor="message"></label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message"
          required
        />
      </div>
      <div>
        <button className="btn-submit" type="submit">Submit Message</button>
      </div>
    </form>
  );
}

export default MessageForm;
