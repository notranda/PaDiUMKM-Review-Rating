// import {
//   FaUserAlt,
//   FaFileAlt,
//   FaSyncAlt,
//   FaLightbulb,
//   FaComments,
// } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const SidebarRev = () => {
  return (
    <div className="w-64 h-screen bg-white text-gray-400">
      <div className="flex flex-col items-start p-4 space-y-6">
        {/* Item Pembayaran */}
        <div className="grid items-center space-x-3 cursor-pointer text-gray-600 hover:text-teal-800">
          <NavLink to="/Pembayaran" className="text-xl text-gray-600">
            Pembayaran
          </NavLink>
          <NavLink to="/daftartranskasi" className="text-xl text-gray-600">
            Daftar Transaksi
          </NavLink>
          <NavLink to="/daftartranskasi" className="text-xl text-gray-600">
            Beli Lagi
          </NavLink>
          <NavLink to="/daftartranskasi" className="text-xl text-gray-600">
            Ulasan
          </NavLink>
          <NavLink to="/daftartranskasi" className="text-xl text-gray-600">
            Kotak Pesan
          </NavLink>
        </div>

        {/* Item Kotak Pesan */}
        {/* <div className="flex items-center space-x-3 cursor-pointer hover:text-teal-800">
          <FaComments className="text-xl" />
          <span className="text-lg">Kotak Pesan</span>
        </div> */}
      </div>
    </div>
  );
};

export default SidebarRev;
