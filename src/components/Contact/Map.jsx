import React from "react";

function Map() {
  return (
    <div className="map mb-4 mt-1">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6912.428994617083!2d30.945409426409388!3d29.973265014306115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1677089486597!5m2!1sen!2seg"
        width="600"
        height="450"
        className="w-full"
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
