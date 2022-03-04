import React from "react";
import { useState, useEffect } from "react";
import data from "../data";

const Crew = () => {
  const [index, setIndex] = useState(0);
  const { crew } = data[0];
  const { name, images, role, bio } = crew[index];

  useEffect(() => {
    document.body.className = "crew";
  }, []);

  return (
    <main id="main" className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>

      <div className="dot-indicators flex">
        <button aria-pressed={`${index === 0}`} onClick={() => setIndex(0)}>
          <span className="sr-only">{crew[0].role}</span>
        </button>
        <button aria-pressed={`${index === 1}`} onClick={() => setIndex(1)}>
          <span className="sr-only">{crew[1].role}</span>
        </button>
        <button aria-pressed={`${index === 2}`} onClick={() => setIndex(2)}>
          <span className="sr-only">{crew[2].role}</span>
        </button>
        <button aria-pressed={`${index === 3}`} onClick={() => setIndex(3)}>
          <span className="sr-only">{crew[3].role}</span>
        </button>
      </div>

      <article className="crew-details flow">
        <header className="flow flow--space-small">
          <h2 className="fs-600 ff-serif uppercase">{role}</h2>
          <p className="fs-700 ff-serif uppercase">{name}</p>
        </header>
        <p>{bio}</p>
      </article>
      <picture>
        <source srcSet={images.webp} type="image/webp" />
        <img src={images.png} alt={name} />
      </picture>
    </main>
  );
};

export default Crew;
