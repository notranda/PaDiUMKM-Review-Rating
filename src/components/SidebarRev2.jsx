import more from '../assets/images/more.png';
const SidebarRev2 = () => {
  return (
    <div className="w-64 h-screen bg-white space-y-5">
      <div className="border border-gray-200 px-4 py-3 flex space-x-5 rounded-lg items-center cursor-pointer hover:bg-gray-200">
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

      {/* <div className="flex flex-col items-start p-2 space-y-6"> */}
      {/* Card Pesanan Menunggu diterima */}
      {/* <div className="w-full p-4 bg-emerald-100 rounded-lg shadow-md cursor-pointer hover:bg-emerald-100 hover:text-black transition-colors duration-300">
          <span className="text-sm">3 Pesanan Menunggu diterima</span>
        </div> */}

      {/* Card Yuk Beri Penilaian atas Pesananmu */}
      <div className="w-full p-4 bg-yellow-100 shadow-md flex space-x-5 rounded-lg items-center cursor-pointer hover:bg-yellow-100 text-black transition-colors duration-300">
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

// import PropTypes from 'prop-types';

// const SidebarRev2 = ({ orders }) => {
//   // Menghitung jumlah pesanan yang belum diterima (statusnya "Dalam Pengiriman")
//   const pendingOrdersCount = orders.filter(order => order.status === 'Dalam Pengiriman').length;

//   return (
//     <div className="w-64 h-screen bg-white text-gray-400">
//       <div className="flex flex-col items-start p-4 space-y-6">
//         {/* Card Pesanan Menunggu diterima */}
//         <div className="w-full p-4 bg-emerald-100 rounded-lg shadow-md cursor-pointer hover:bg-emerald-100 hover:text-black transition-colors duration-300">
//           <span className="text-sm">
//             {pendingOrdersCount > 0 && (
//               <span className="font-bold text-black">{pendingOrdersCount} </span>
//             )}
//             Pesanan Menunggu diterima
//           </span>
//         </div>

//         {/* Card Yuk Beri Penilaian atas Pesananmu */}
//         <div className="w-full p-4 bg-yellow-100 rounded-lg shadow-md cursor-pointer hover:bg-yellow-100 text-black transition-colors duration-300">
//           <span className="text-sm">Yuk Beri Penilaian atas Pesananmu</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// SidebarRev2.propTypes = {
//   orders: PropTypes.arrayOf(
//     PropTypes.shape({
//       status: PropTypes.string.isRequired
//     })
//   ).isRequired
// };

// export default SidebarRev2;
