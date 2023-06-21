import React from "react";
import { useState, useEffect } from "react";
import Cards from "./cards";
import Masonry from "react-masonry-css";

const Works = () => {
  const [works, setWorks] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await fetch("/API/works.json");
        const jsonData = await reponse.json();
        setWorks(jsonData);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    };
    fetchData(); // Call fectData
  }, []);

  if (error) {
    return (
      <div className="error">
        <p>Erreur: {error.message}</p>
      </div>
    );
  }

  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    700: 1
  };

  return !isLoading ? (
    <div className="gallery">
      <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      >
      {works.map((work, index) => (
        <Cards key={index} dataWork={work} index={index}/>
      ))}
      </Masonry>
    </div>
  ) : (
    <div className="gallery">Chargement des projets en cours ...</div>
  );
};
export default Works;
