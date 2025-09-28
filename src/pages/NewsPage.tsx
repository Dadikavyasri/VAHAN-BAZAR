import React from "react";
import "./Newspage.css";
import Header from "@/components/Header";

const newsArticles = [
  {
    title: "Ultraviolette X47 Crossover Launched",
    image: "images/n1.jpeg",
    description: "Bengaluru-based Ultraviolette Automotive unveils the X47 Crossover with 610 Nm torque and a Sony dash cam. Priced at ₹2.49 lakh.",
    link: "https://timesofindia.indiatimes.com/auto/bikes/ultraviolette-x47-crossover-launched-with-610-nm-torque-sony-dash-cam-check-prices/articleshow/124071844.cms",
  },
  {
    title: "2025 Suzuki V-Strom SX Launched at ₹1.98 Lakh",
    image: "images/n2.jpeg",
    description: "Suzuki introduces the refreshed V-Strom SX with new color options and updated graphics. Priced at ₹1.98 lakh.",
    link: "https://timesofindia.indiatimes.com/auto/bikes/2025-suzuki-v-strom-sx-launched-at-rs-1-98-lakh-whats-new-engine-more/articleshow/124152341.cms",
  },
  {
    title: "TVS Apache RR 310 Price Reduced by ₹26,909",
    image: "images/n3.jpeg",
    description: "TVS announces a significant price reduction for the Apache RR 310 and RTR 310 due to GST cut, making them more affordable.",
    link: "https://m.economictimes.com/news/new-updates/tvs-apache-rr-310-price-reduction-save-up-to-rs-26909-premium-sportbike-now-more-affordable-after-gst-cut-see-latest-prices/articleshow/124059572.cms",
  },
 
];

export default function NewsPage() {
  return (
    <div>
         <Header />
    <div className="news-wrapper">
      <h1>Latest Bike News & Launches</h1>
      <div className="news-grid">
        {newsArticles.map((article, index) => (
          <div className="news-card" key={index}>
            <img src={article.image} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
