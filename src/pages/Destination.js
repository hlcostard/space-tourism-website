import React from "react";
import { useState, useEffect } from "react";
import data from "../data";

const Destination = () => {
  const [index, setIndex] = useState(0);
  const { destinations } = data[0];
  const { name, images, description, distance, travel } = destinations[index];

  useEffect(() => {
    document.body.className = "destination";
  }, []);

  return (
    <main id="main" className="grid-container grid-container--destination flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span> Pick your destination
      </h1>
      <picture>
        <source srcSet={images.webp} type="image/webp" />
        <img src={images.png} alt={name} />
      </picture>

      <div class="tab-list underline-indicators flex">
        <button
          aria-selected={`${index === 0}`}
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          onClick={() => setIndex(0)}>
          Moon
        </button>
        <button
          aria-selected={`${index === 1}`}
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          onClick={() => setIndex(1)}>
          Mars
        </button>
        <button
          aria-selected={`${index === 2}`}
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          onClick={() => setIndex(2)}>
          Europa
        </button>
        <button
          aria-selected={`${index === 3}`}
          className="uppercase ff-sans-cond text-accent letter-spacing-2"
          onClick={() => setIndex(3)}>
          Titan
        </button>
      </div>

      <article className="destination-info flow">
        <h2 className="fs-800 ff-serif uppercase">{name}</h2>
        <p>{description}</p>

        <div className="destination-meta flex">
          <div>
            <h3 className="fs-200 uppercase text-accent">Avg. distance</h3>
            <p className="ff-serif uppercase">{distance}</p>
          </div>

          <div>
            <h3 className="fs-200 uppercase text-accent">Est. travel time</h3>
            <p className="ff-serif uppercase">{travel}</p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Destination;
