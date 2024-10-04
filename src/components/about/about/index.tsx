import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Hero Section */}
        <section className="bg-white shadow-md rounded-lg p-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">DialDeutschAssociation</h1>
          <p className="text-xl text-gray-600">
            Lösungen aus einer Hand, die sich auf Ihre Bedürfnisse konzentrieren.
          </p>
          <p className="text-gray-600">
            Von der Ist-Aufnahme, über die Planung bis zur Realisierung – Wir kümmern uns um Ihre IT-Infrastruktur, damit Ihre Systeme sicher laufen.
          </p>
        </section>

        {/* Sections: Beratung, Support, Untis */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Beratung */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Beratung</h2>
            <p className="text-gray-600 mb-4">
              Wir erarbeiten individuelle Lösungen für Ihre IT-Landschaft.
            </p>
            <a
              href="#"
              className="text-green-600 hover:text-green-800 font-medium transition duration-300"
            >
              Mehr erfahren →
            </a>
          </div>

          {/* Support */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Support</h2>
            <p className="text-gray-600 mb-4">
              Direkter persönlicher Support hat bei uns oberste Priorität.
            </p>
            <a
              href="#"
              className="text-green-600 hover:text-green-800 font-medium transition duration-300"
            >
              Mehr erfahren →
            </a>
          </div>

          {/* Untis */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Untis</h2>
            <p className="text-gray-600 mb-4">
              Sie benötigen Beratung oder Unterstützung? Erfahren Sie mehr.
            </p>
            <a
              href="#"
              className="text-green-600 hover:text-green-800 font-medium transition duration-300"
            >
              Zur Partnerseite →
            </a>
          </div>
        </section>

        {/* Values Section */}
        <section className="mt-16 bg-white shadow-md rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Warum DialDeutschAssociation?
          </h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center justify-center">
              <span className="text-green-600 text-xl mr-2">✔</span>
              Erfahrung aus über 40 Jahren
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-600 text-xl mr-2">✔</span>
              Sachkundige und individuelle Beratung
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-600 text-xl mr-2">✔</span>
              Moderne langfristige Lösungen
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-600 text-xl mr-2">✔</span>
              Umfassende Betreuung
            </li>
            <li className="flex items-center justify-center">
              <span className="text-green-600 text-xl mr-2">✔</span>
              Schnellen und unkomplizierten Support
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
