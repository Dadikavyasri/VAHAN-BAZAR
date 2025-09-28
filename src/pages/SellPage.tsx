// src/pages/SellPage.tsx
import React, { useState } from "react";
import "./SellPage.css";
import Header from "@/components/Header";
 // adjust if Navbar.tsx file path different

export default function SellPage(): JSX.Element {
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState<number | "">("");
  const [price, setPrice] = useState<number | "">("");
  const [mileage, setMileage] = useState<number | "">("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  function onImagesChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const files = Array.from(e.target.files).slice(0, 6);
    setImages(files);
    const urls = files.map((f) => URL.createObjectURL(f));
    setPreviews(urls);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !brand || !model || !price) {
      alert("Please fill Title, Brand, Model and Price.");
      return;
    }
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("title", title);
      fd.append("brand", brand);
      fd.append("model", model);
      fd.append("year", String(year));
      fd.append("price", String(price));
      fd.append("mileage", String(mileage));
      fd.append("description", description);
      images.forEach((img) => fd.append("images", img, img.name));

      console.log("Prepared FormData:");
      for (const pair of fd.entries()) console.log(pair[0], pair[1]);

      alert("Listing prepared (check console). If you have an API endpoint, connect it here.");
      
      // reset
      setTitle("");
      setBrand("");
      setModel("");
      setYear("");
      setPrice("");
      setMileage("");
      setDescription("");
      previews.forEach((u) => URL.revokeObjectURL(u));
      setPreviews([]);
      setImages([]);
    } catch (err) {
      console.error(err);
      alert("Submit failed — check console.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="sell-page-wrapper">
     <Header />

      <div className="hero-section">
        <h1>Sell Your Vehicle</h1>
        <p>Post your bike, scooter, or EV and reach thousands of buyers instantly.</p>
      </div>

      <div className="sell-page">
        <form className="sell-form" onSubmit={onSubmit}>
          <div className="grid">
            <label>
              Title
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. 2019 Yamaha FZ-25"
              />
            </label>
            <label>
              Brand
              <input value={brand} onChange={(e) => setBrand(e.target.value)} />
            </label>
            <label>
              Model
              <input value={model} onChange={(e) => setModel(e.target.value)} />
            </label>
          </div>

          <div className="grid">
            <label>
              Year
              <input
                type="number"
                value={year as any}
                onChange={(e) =>
                  setYear(e.target.value ? Number(e.target.value) : "")
                }
              />
            </label>
            <label>
              Price (₹)
              <input
                type="number"
                value={price as any}
                onChange={(e) =>
                  setPrice(e.target.value ? Number(e.target.value) : "")
                }
              />
            </label>
            <label>
              Mileage (km)
              <input
                type="number"
                value={mileage as any}
                onChange={(e) =>
                  setMileage(e.target.value ? Number(e.target.value) : "")
                }
              />
            </label>
          </div>

          <label className="full">
            Description
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label className="full">
            Photos (max 6)
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={onImagesChange}
            />
          </label>

          {previews.length > 0 && (
            <div className="previews">
              {previews.map((src, i) => (
                <img key={i} src={src} alt={`preview-${i}`} />
              ))}
            </div>
          )}

          <div className="actions">
            <button type="submit" disabled={submitting}>
              {submitting ? "Publishing..." : "Publish listing"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
