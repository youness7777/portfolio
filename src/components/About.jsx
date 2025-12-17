import React from "react";

export const About = () => {
  return (
    <div
      name="À propos de moi"
      className="h-auto w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen lg:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">
            À propos de moi
          </p>
        </div>

        <p className="text-xl mt-4 text-gray-300 leading-relaxed">
          Je m'appelle Youness Ezzaou, ingénieur en informatique et systèmes
          d'information. je me suis spécialisé dans les technologies web
          modernes telles que Symfony, ReactJS,NextJs,Laravel Docker et AWS.
        </p>

        <p className="text-xl mt-6 text-gray-300 leading-relaxed">
          je contribue au développement de 07zr.com, l’une des plateformes de
          gestion d’annonces les plus complètes, offrant une expérience robuste
          aussi bien pour les utilisateurs que pour les administrateurs.{" "}
        </p>
        <p className="text-xl mt-6 text-gray-300 leading-relaxed">
          En parallèle, j’exerce également en tant que{" "}
          <span className="font-semibold">développeur freelance</span>, où
          j’accompagne des clients dans la conception, le développement et le
          déploiement de solutions web sur mesure.
        </p>

        <p className="text-xl mt-6 text-gray-300 leading-relaxed">
          Je suis passionné par le développement d'applications web et la
          résolution de problèmes complexes, et je suis impatient d'appliquer
          mes compétences dans un environnement de travail dynamique.
        </p>

        <p className="text-xl mt-6 text-gray-300 leading-relaxed">
          Veuillez noter que ce ne sont pas tous les projets sur lesquels j'ai
          travaillé. Pour en savoir plus sur mon expérience et mes compétences,
          je vous invite à consulter mon CV.
        </p>
      </div>
    </div>
  );
};
