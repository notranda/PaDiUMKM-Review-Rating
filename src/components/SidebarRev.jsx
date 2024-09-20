import { NavLink } from 'react-router-dom';
import profiler from '../assets/images/profiler.png';
import transaction from '../assets/images/transaction.png';
import reload from '../assets/images/reload.png';
import ulasan from '../assets/images/ulasan.png';
import messages from '../assets/images/messages.png';

const SidebarRev = () => {
  return (
    <div className="w-64 h-screen bg-white text-black">
      <div className="flex flex-col items-start p-6 space-y-6">
        {/* Title Section */}
        <div className="text-xl font-bold text-black">Transaksi</div>

        {/* Item Pembayaran */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4 cursor-pointer group">
            <img
              src={profiler}
              alt="profiler"
              className="h-4 w-4 group-hover:filter group-hover:hue-rotate-180 group-hover:saturate-200"
            />
            <NavLink
              to="/Pembayaran"
              className={({ isActive }) =>
                isActive
                  ? 'text-teal-500 text-sm'
                  : 'text-gray-600 text-sm group-hover:text-teal-500'
              }>
              Pembayaran
            </NavLink>
          </div>

          <div className="flex items-center space-x-4 cursor-pointer group">
            <img
              src={transaction}
              alt="transaction"
              className="h-4 w-4 group-hover:filter group-hover:hue-rotate-180 group-hover:saturate-200"
            />
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-teal-500 text-sm'
                  : 'text-gray-600 text-sm group-hover:text-teal-500'
              }>
              Daftar Transaksi
            </NavLink>
          </div>

          <div className="flex items-center space-x-4 cursor-pointer group">
            <img
              src={reload}
              alt="reload"
              className="h-4 w-4 group-hover:filter group-hover:hue-rotate-180 group-hover:saturate-200"
            />
            <NavLink
              to="/belilagi"
              className={({ isActive }) =>
                isActive
                  ? 'text-teal-500 text-sm'
                  : 'text-gray-600 text-sm group-hover:text-teal-500'
              }>
              Beli Lagi
            </NavLink>
          </div>

          <div className="flex items-center space-x-4 cursor-pointer group">
            <img
              src={ulasan}
              alt="ulasan"
              className="h-4 w-4 group-hover:filter group-hover:hue-rotate-180 group-hover:saturate-200"
            />
            <NavLink
              to="/form-review"
              className={({ isActive }) =>
                isActive
                  ? 'text-teal-500 text-sm'
                  : 'text-gray-600 text-sm group-hover:text-teal-500'
              }>
              Ulasan
            </NavLink>
          </div>
        </div>

        {/* Chat Section */}
        <div className="text-xl font-bold text-black">Chat</div>

        <div className="flex items-center space-x-4 cursor-pointer group">
          <img
            src={messages}
            alt="messages"
            className="h-4 w-4 group-hover:filter group-hover:hue-rotate-180 group-hover:saturate-200"
          />
          <NavLink
            to="/daftartranskasi"
            className={({ isActive }) =>
              isActive
                ? 'text-teal-500 text-sm'
                : 'text-gray-600 text-sm group-hover:text-teal-500'
            }>
            Kotak Pesan
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SidebarRev;
