const GoogleMap = () => {
  return (
    <div>
      <div className="title">
        <h1 className="gradient-text">Location</h1>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6227234666762!2d77.5675977779334!3d12.931952804839266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158555cb1161%3A0x4adc016b931e0cab!2sShastri%20Nagar%2C%20Basavanagudi%2C%20Bengaluru%2C%20Karnataka%20560028!5e0!3m2!1sen!2sin!4v1735059212949!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
