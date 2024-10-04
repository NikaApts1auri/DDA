import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <main className="bg-white py-10">
      {/* Cards Section */}
      <div className="max-w-screen-xl mx-auto px-4 grid sm:grid-cols-3 gap-6 mb-10">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-300">
          <h3 className="text-xl font-semibold mb-2">Beratung</h3>
          <p className="text-gray-700 mb-4">Wir erarbeiten individuelle Lösungen für Ihre IT-Landschaft.</p>
          <a href="/beratung" className="text-orange-500 font-semibold hover:text-orange-700">
            Mehr erfahren &rarr;
          </a>
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-900">
          <h3 className="text-xl font-semibold mb-2">Support</h3>
          <p className="text-gray-700 mb-4">Direkter persönlicher Support hat bei uns oberste Priorität.</p>
          <a href="/support" className="text-orange-500 font-semibold hover:text-orange-700">
            Mehr erfahren &rarr;
          </a>
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-orange-500">
          <h3 className="text-xl font-semibold mb-2">Untis</h3>
          <p className="text-gray-700 mb-4">Sie benötigen Beratung oder Unterstützung? Erfahren Sie mehr.</p>
          <a href="/untis" className="text-orange-500 font-semibold hover:text-orange-700">
            Zur Partnerseite &rarr;
          </a>
        </div>
      </div>

      {/* Text and Image Section */}
      <div className="max-w-screen-xl mx-auto px-4 grid sm:grid-cols-2 gap-10">
        {/* Text Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Lösungen aus einer Hand, die sich auf Ihre Bedürfnisse konzentrieren.
          </h2>
          <p className="text-gray-700 mb-4">
            Von der Ist-Aufnahme, über die Planung bis zur Realisierung - Wir kümmern uns um Ihre IT-Infrastruktur, damit Ihre Systeme sicher laufen.
          </p>
          <ul className="list-none space-y-2">
  <li className="flex items-start">
    <span className="text-green-500 font-bold mr-2">✔</span> Erfahrung aus über 40 Jahren
  </li>
  <li className="flex items-start">
    <span className="text-green-500 font-bold mr-2">✔</span> Sachkundige und individuelle Beratung 
  </li>
  <li className="flex items-start">
    <span className="text-green-500 font-bold mr-2">✔</span> Moderne langfristige Lösungen
  </li>
  <li className="flex items-start">
    <span className="text-green-500 font-bold mr-2">✔</span> Umfassende Betreuung
  </li>
  <li className="flex items-start">
    <span className="text-green-500 font-bold mr-2">✔</span> Schnellen und unkomplizierten Support
  </li>
</ul>

        </div>
        {/* Image Section */}
        <div>
          <img
            src="./teamWork.jpg"
            alt="Team Working"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </main>
  );
};

export default HomeSection;
