import React from "react";
import { useState, useEffect } from "react";
import Cards from "./cards";

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

  return !isLoading ? (
    <div className="gallery">
      {works.map((work) => (
        <Cards key={work.id} dataWork={work} />
      ))}
    </div>
  ) : (
    <div className="gallery">Chargement des projets en cours ...</div>
  );
};
export default Works;
