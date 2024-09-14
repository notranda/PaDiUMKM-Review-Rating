import { useNavigate } from 'react-router-dom';
import dashboard from '../assets/images/dashboard.png';
import Footer from './footer';

const Home = () => {
  const navigate = useNavigate();
  
  const handleNavigate = () => {
    navigate('/about');
  };
  return (
    <div className="bg-gradient-to-r from-[#51c7d6] to-[#d7f1f5] dark:bg-gray-900 text-black dark:text-white w-full min-h-screen flex flex-col">
      <div className="flex flex-row items-center justify-center flex-1">
        <div className="flex-1 p-10">
          <h1 className='font-bold text-4xl font-Source-Sans-Pro font-sans'>
            PaDI UMKM Hadir Sebagai Satu <br />
            Solusi Bisnis bagi UMKM, BUMN <br />dan Pemerintah.
          </h1>
          <p className='font-normal text-lg mt-4'> 
            Mempertemukan UMKM berkualitas dengan perusahaan BUMN maupun <br />
            Swasta untuk mendapatkan transaksi dengan harga dan kualitas terbaik.
          </p>
          <button onClick={ handleNavigate } className="text-teal-600 border border-teal-600 px-4 py-2 rounded">
          Selengkapnya
        </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={ dashboard } alt="Dashboard" className="w-3/4 h-auto object-contain rounded-3xl" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
