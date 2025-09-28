import React from "react";
import "./Showroom.css";
import Header from "@/components/Header";

const showrooms = [
  {
    name: "Yamaha Showroom - Bangalore",
    location: "MG Road, Bangalore, Karnataka",
    contact: "+91 98765 43210",
    img: "/images/yamahashowroom.jpeg",
    maps: "https://www.google.com/maps/search/?api=1&query=Yamaha+Showroom+MG+Road+Bangalore"
  },
  {
    name: "Hero MotoCorp Showroom - Hyderabad",
    location: "Banjara Hills, Hyderabad, Telangana",
    contact: "+91 91234 56789",
    img: "/images/hero showrrom.jpeg",
    maps: "https://www.google.com/maps/search/?api=1&query=Hero+MotoCorp+Showroom+Banjara+Hills+Hyderabad"
  },
  {
    name: "TVS Showroom - Chennai",
    location: "T. Nagar, Chennai, Tamil Nadu",
    contact: "+91 99887 66554",
    img: "/images/tvs showrrom.jpeg",
    maps: "https://www.google.com/maps/search/?api=1&query=TVS+Showroom+T+Nagar+Chennai"
  },
  {
    name: "Honda Showroom - Pune",
    location: "Kothrud, Pune, Maharashtra",
    contact: "+91 98765 12345",
    img: "/images/honda showrrom.jpeg",
    maps: "https://www.google.com/maps/search/?api=1&query=Honda+Showroom+Kothrud+Pune"
  },
];

export default function ShowroomsPage() {
  return (
    <div>
      <Header />
      <div className="showrooms-wrapper">
        <h1>🏍️ Bike Showrooms Near You</h1>

        <div className="showrooms-grid">
          {showrooms.map((shop, index) => (
            <div className="showroom-card" key={index}>
              <img src={shop.img} alt={shop.name} />
              <h2>{shop.name}</h2>
              <p><strong>📍 Location:</strong> {shop.location}</p>
              <p><strong>📞 Contact:</strong> {shop.contact}</p>
              
              {/* Google Maps Button */}
              <button 
                className="maps-btn"
                onClick={() => window.open(shop.maps, "_blank")}
              >
                View on Google Maps
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
