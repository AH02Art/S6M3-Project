import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.js";

const demo = "DEMO_KEY";
const url = `https://api.nasa.gov/planetary/apod?api_key=${demo}`;

function App() {
  const [ photo, setPhoto ] = useState();

  useEffect(() => {
    function getUrl() {
      axios.get(url)
      .then((response) => {
        const { data } = response;
        // console.log(data);
        setPhoto(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
    }
    // getUrl();
    setPhoto({
        "copyright": "Sebastian Voltmer",
        "date": "2023-12-15",
        "explanation": "Asteroid 319 Leona cast a shadow across planet Earth on December 12, as it passed in front of bright star Betelgeuse. But to see everyone's favorite red giant star fade this time, you had to stand near the center line of the narrow shadow path starting in central Mexico and extending eastward across southern Florida, the Atlantic Ocean, southern Europe, and Eurasia. The geocentric celestial event was captured in these two panels taken at Almodovar del Rio, Spain from before (left) and during the...",
        "hdurl": "https://apod.nasa.gov/apod/image/2312/OrionBetelgeuse_occultation.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Betelgeuse Eclipsed",
        "url": "https://apod.nasa.gov/apod/image/2312/OrionBetelgeuse_occultation1024.jpg"
      })
  }, []);


  if (!photo) return "Fetching Photo of the day...";
  return (
    <section>
      <Card title={photo.title} explanation={photo.explanation} imageURL={photo.hdurl} date={photo.date} />
    </section>
  );
};

export default App;