import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black mt-28 text-white py-10 px-6 md:px-20">
      <div className=" mx-auto grid md:grid-cols-4 gap-8">
        {/* Newsletter Section */}
        <div>
          <h3 className="font-semibold text-lg">Footway's Newsletter</h3>
          <div className="mt-4 flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md bg-black text-white ring-1 focus:outline-none"
            />
            <button className="bg-pink-600 px-4 py-2 rounded-md">SUBSCRIBE</button>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div>
          <h3 className="font-semibold text-lg">Terms and conditions</h3>
          <ul className="mt-4 space-y-2">
            <li>Free returns!</li>
            <li>30 days return policy!</li>
            <li>All shoes in stock!</li>
          </ul>
        </div>

        {/* Information Section */}
        <div>
          <h3 className="font-semibold text-lg">Information</h3>
          <ul className="mt-4 space-y-2">
            <li>FAQs</li>
            <li>About us at Footway</li>
            <li>Footway Legal</li>
            <li>0800 098 8300</li>
            <li>myfriends@footway.co.uk</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold text-lg">Contact</h3>
          <p className="mt-4">Footway</p>
          <p>Company number: 559063-2377</p>
          <p className="mt-2">Head office:</p>
          <p>Victoria Tower, Nolsogatan 3, 164</p>
          <p>40 Kista, Sweden</p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm border-t border-gray-700 pt-6">
        <p>Part of Footway Group, publicly traded on Nasdaq OMX.</p>
        <p>myfriends@footway.co.uk, 0800 988 300</p>
        <div className="mt-4 flex justify-center space-x-4">
          <span className="bg-gray-800 px-3 py-1 rounded">PCI DSS</span>
          <span className="bg-gray-800 px-3 py-1 rounded">Trusted Shops</span>
        </div>
        <p className="mt-4">© 2010-2017 Footway. All rights reserved.</p>
      </div>
    </footer>
  );
}
