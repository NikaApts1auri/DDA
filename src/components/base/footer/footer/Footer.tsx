import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-sm">
      {/* Top Section */}
      <div className="bg-blue-900 text-white py-8">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
          <p className="text-lg mb-4">SO ERREICHEN SIE UNS:</p>
          <div className=" sm:grid-cols-2 gap-8 mb-6">
            {/* Contact details */}
            <div>
              <p className="font-bold">DCS</p>
              <p className="mb-2">+49(0)30 - 390 709 0</p>
              <p className="mb-2">info(at)dcs.de</p>
              <p className="font-bold mt-4">Untis</p>
              <p className="mb-2">+49(0)30 - 390 709 10</p>
              <p>untis(at)dcs.de</p>
            </div>
            {/* Map */}
            <div>
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=13.305%2C52.520%2C13.315%2C52.525&layer=mapnik"
                width="100%"
                height="300"
                className="border-none mt-[20px]"
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white py-6">
        <div className="max-w-screen-xl items-center mx-auto px-4 grid sm:grid-cols-3 gap-8">
          {/* Address */}

          <div>
            {/* <img src="./majorLogo.webp" alt="Logo" className="h-12 mb-4" /> */}
            <h3 className="font-semibold">Anschrift</h3>
            <p>Dialog Computer Systeme GmbH</p>
            <p>Helmholtzstr. 2-9</p>
            <p>Aufgang C / 1. OG</p>
            <p>10587 Berlin</p>
          </div>

          {/* Contact */}
          <div className=' flex flex-col gap-[15px]'>
            <h3 className="font-semibold">Kontakt</h3>
            <p>+49 (0)30 - 390 709 0</p>
            <p>info(at)dcs.de</p>
          </div>

          {/* Links */}
          <div className='flex flex-col gap-[15px]'>
            <h3 className="font-semibold">Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/impressum" className="text-gray-600 hover:text-gray-800">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/fastclient" className="text-gray-600 hover:text-gray-800">
                  Fastclient
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
