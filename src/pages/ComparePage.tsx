import React from "react";
import "./Comparepage.css";
import Header from "@/components/Header";


const comparisons = [
  {
    electric: {
      name: "Ather 450X",
      img: "images/Ather 450.jpeg",

      icon: "⚡🔌",
      specs: {
        Brand: "Ather",
        Type: "Electric Scooter",
        Price: "₹1.45 L",
        Range: "116 km",
        "Top Speed": "80 km/h",
      },
    },
    petrol: {
      name: "TVS Ntorq",
      img: "images/TVS Narto.jpeg",
      icon: "⛽",
      specs: {
        Brand: "TVS",
        Type: "Petrol Scooter",
        Price: "₹1.10 L",
        Range: "250 km",
        "Top Speed": "95 km/h",
      },
    },
  },
  {
    electric: {
      name: "Revolt RV400",
      img: "images/revolt.jpeg",
      icon: "⚡🔋",
      specs: {
        Brand: "Revolt",
        Type: "Electric Bike",
        Price: "₹1.00 L",
        Range: "150 km",
        "Top Speed": "85 km/h",
      },
    },
    petrol: {
      name: "Yamaha R15",
      img: "images/yamaha r15.jpeg",
      icon: "⛽",
      specs: {
        Brand: "Yamaha",
        Type: "Petrol Bike",
        Price: "₹1.85 L",
        Range: "NA",
        "Top Speed": "140 km/h",
      },
    },
  },
  {
    electric: {
      name: "Hero Electric Optima",
      img: "images/hero electric.jpeg",
      icon: "⚡🔌",
      specs: {
        Brand: "Hero",
        Type: "Electric Scooter",
        Price: "₹80,000",
        Range: "80 km",
        "Top Speed": "42 km/h",
      },
    },
    petrol: {
      name: "Honda Activa",
      img: "images/honda.jpeg",
      icon: "⛽",
      specs: {
        Brand: "Honda",
        Type: "Petrol Scooter",
        Price: "₹75,000",
        Range: "180 km",
        "Top Speed": "60 km/h",
      },
    },
  },
];

export default function ComparePage() {
  return (
    <div>
     <Header />
    <div className="compare-wrapper">
     
      <h1>
        Electric Scooter <span>VS</span> Petrol Run Two-Wheeler
      </h1>

      <div className="compare-grid">
        {comparisons.map((pair, index) => (
          <div className="compare-row" key={index}>
            {/* Electric Vehicle */}
            <div className="bike-block">
              <img src={pair.electric.img} alt={pair.electric.name} />
              <p className="label">{pair.electric.name}</p>
              <span className="icon">{pair.electric.icon}</span>

              <table className="specs-table">
                <tbody>
                  {Object.entries(pair.electric.specs).map(([key, value]) => (
                    <tr key={key}>
                      <td className="spec-key">{key}</td>
                      <td className="spec-value">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Divider */}
            <div className="vs-divider">VS</div>

            {/* Petrol Vehicle */}
            <div className="bike-block">
              <img src={pair.petrol.img} alt={pair.petrol.name} />
              <p className="label">{pair.petrol.name}</p>
              <span className="icon">{pair.petrol.icon}</span>

              <table className="specs-table">
                <tbody>
                  {Object.entries(pair.petrol.specs).map(([key, value]) => (
                    <tr key={key}>
                      <td className="spec-key">{key}</td>
                      <td className="spec-value">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
