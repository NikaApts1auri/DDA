import React from 'react';

const Services = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 grid sm:grid-cols-3 gap-6  my-[10rem] ">
      {/* Card 1 */}
      <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-300 transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-2">Beratung</h3>
        <p className="text-gray-700 mb-4">
          Wir erarbeiten individuelle Lösungen für Ihre IT-Landschaft. Unser Team von Experten steht Ihnen zur Verfügung.
        </p>
        <a href="/beratung" className="text-orange-500 font-semibold hover:text-orange-700">
          Mehr erfahren &rarr;
        </a>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-900 transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-2">Support</h3>
        <p className="text-gray-700 mb-4">
          Direkter persönlicher Support hat bei uns oberste Priorität. Wir kümmern uns um Ihre Anliegen, egal wann.
        </p>
        <a href="/support" className="text-orange-500 font-semibold hover:text-orange-700">
          Mehr erfahren &rarr;
        </a>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-orange-500 transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-2">Untis</h3>
        <p className="text-gray-700 mb-4">
          Sie benötigen Beratung oder Unterstützung? Erfahren Sie mehr über unsere Partnerschaften und Lösungen.
        </p>
        <a href="/untis" className="text-orange-500 font-semibold hover:text-orange-700">
          Zur Partnerseite &rarr;
        </a>
      </div>

      {/* Card 4 - Additional Service 1 */}
      <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-500 transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-2">Schulung</h3>
        <p className="text-gray-700 mb-4">
          Unsere Schulungen sind darauf ausgelegt, Ihr Team auf die neuesten Technologien vorzubereiten.
        </p>
        <a href="/schulung" className="text-orange-500 font-semibold hover:text-orange-700">
          Mehr erfahren &rarr;
        </a>
      </div>

      {/* Card 5 - Additional Service 2 */}
      <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-red-500 transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-2">IT-Sicherheit</h3>
        <p className="text-gray-700 mb-4">
          Schützen Sie Ihre Daten mit unseren umfassenden IT-Sicherheitslösungen.
        </p>
        <a href="/it-security" className="text-orange-500 font-semibold hover:text-orange-700">
          Mehr erfahren &rarr;
        </a>
      </div>

      {/* Card 6 - Additional Service 3 */}
      <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-purple-500 transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-2">Webentwicklung</h3>
        <p className="text-gray-700 mb-4">
          Wir erstellen maßgeschneiderte Websites, die sowohl funktional als auch ansprechend sind.
        </p>
        <a href="/web-development" className="text-orange-500 font-semibold hover:text-orange-700">
          Mehr erfahren &rarr;
        </a>
      </div>
    </div>
  );
};

export default Services;
