import { useNavigate } from 'react-router-dom'; // Import useNavigate untuk routing
import more from '../assets/images/more.png';

const SidebarRev2 = () => {
  const navigate = useNavigate(); // Inisialisasi useNavigate

  return (
    <div className="w-64 h-screen bg-white space-y-5">
      {/* Pesanan menunggu diterima */}
      <div
        onClick={() => navigate('/')} // Routing ke /add-reviews saat diklik
        className="border border-gray-200 px-4 py-3 flex space-x-5 rounded-lg items-center cursor-pointer hover:bg-gray-200">
        <div className="w-1/6 text-center">
          <span className="font-bold text-2xl leading-9 text-red-500">3</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="text-sm leading-5 font-black">
            Pesanan menunggu diterima
          </span>
          <img src={more} alt="more" className="h-4 w-4" />
        </div>
      </div>

      {/* Beri Penilaian atas Pesananmu */}
      <div
        onClick={() => navigate('/form-review')} // Routing ke /form-review saat diklik
        className="w-full p-4 bg-yellow-100 shadow-md flex space-x-5 rounded-lg items-center cursor-pointer hover:bg-yellow-100 text-black transition-colors duration-300">
        <div className="w-1/6 text-center">
          <span className="font-bold text-2xl leading-9 text-red-500">2</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="text-sm leading-5 font-black">
            Beri Penilaian atas Pesananmu
          </span>
          <img src={more} alt="more" className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default SidebarRev2;
