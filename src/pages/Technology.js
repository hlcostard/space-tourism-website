import React from "react";
import { useState, useEffect } from "react";
import data from "../data";

const Technology = () => {
  const [index, setIndex] = useState(0);
  const { technology } = data[0];
  const { name, images, description } = technology[index];

  useEffect(() => {
    document.body.className = "technology";
  }, []);

  return (
    <main id="main" className="grid-container grid-container--technology flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span> Space launch 101
      </h1>

      <div className="number-indicators flex" aria-label="crew member list">
        <button aria-pressed={`${index === 0}`} onClick={() => setIndex(0)}>
          1
        </button>
        <button aria-pressed={`${index === 1}`} onClick={() => setIndex(1)}>
          2
        </button>
        <button aria-pressed={`${index === 2}`} onClick={() => setIndex(2)}>
          3
        </button>
      </div>

      <article className="techonology-info flow text-accent">
        <header className="flow flow--space-small">
          <h2 className="fs-3 00 ff-sans-cond letter-spacing-3 uppercase">
            The terminology...
          </h2>
          <p className="fs-700 ff-serif uppercase text-white">{name}</p>
        </header>
        <p>{description}</p>
      </article>
      <picture>
        <source srcSet={images.landscape} media="(max-width: 45rem)" />
        <img src={images.portrait} alt={name} />
      </picture>
    </main>
  );
};

export default Technology;
