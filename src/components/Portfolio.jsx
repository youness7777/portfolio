import React, { useState } from "react";

import hospitalapp from "../assets/accueilportfolio.png";
import restaurant from "../assets/forportfolio.png";
import freelance from "../assets/freelance.png";
import fssm from "../assets/fssm.png";
import koulHealthy from "../assets/koulHealthy.png";
import anibis from "../assets/anibis.PNG";
import matforce from "../assets/matforce.PNG";
import eshopping from "../assets/ecommerce.PNG";

export const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const portfolios = [
    {
      id: 1,
      src: anibis,
      video: "/videos/anibis.mp4",
      url: "https://repo-pulse.pulsweb.ch/pulse-digital-prod/anibis-maroc",
    },
    {
      id: 2,
      src: hospitalapp,
      video: "/videos/hospital.mp4",
      url: "https://github.com/youness7777/hospital",
    },
    {
      id: 3,
      src: restaurant,
      video: "/videos/restaurant.mp4",
      url: "https://github.com/youness7777/restaurant",
    },
    {
      id: 4,
      src: eshopping,
      video: "/videos/shopp.mp4",
      url: "https://github.com/youness7777/Shopper",
    },
    {
      id: 5,
      src: freelance,
      video: "/videos/freelance.mp4",
      url: "",
    },
    {
      id: 6,
      src: fssm,
      url: "",
    },
    {
      id: 7,
      src: koulHealthy,
      video: "/videos/koulhealthy.mp4",
      url: "https://github.com/AmineMazza/Koul-Healthy",
    },
    {
      id: 8,
      src: matforce,
      video: "/videos/casar.mp4",
      url: "",
    },
  ];

  return (
    <div
      name="Projets"
      className="w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg flex flex-col mx-auto text-white justify-center p-4 w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">
            Portfolio
          </p>
          <p className="py-8">Découvrez certains de mes travaux ici</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, video, url }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-200"
            >
              <img
                src={src}
                alt="project preview"
                className="h-44 w-full rounded-md object-cover"
              />

              <div className="flex justify-center items-center">
                {video && (
                  <button
                    onClick={() => setSelectedVideo(video)}
                    className="w-1/2 px-6 py-4 hover:scale-105 duration-200"
                  >
                    Demo
                  </button>
                )}

                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-4 text-center hover:scale-105 duration-200"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* MODAL VIDEO */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg relative w-full max-w-2xl mx-4">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-2 right-3 text-black font-bold text-xl"
              >
                ×
              </button>

              <video
                controls
                playsInline
                className="w-full h-auto rounded-md"
              >
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
