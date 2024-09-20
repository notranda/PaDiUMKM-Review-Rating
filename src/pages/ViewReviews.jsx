// // import Header from './components/Header';
// import Rating from '../components/Rating';
// import ReviewItem from '../components/ReviewItem';
// import Sidebar from '../components/Sidebar';

// const ViewReviews = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       {/* <Header /> */}
//       <div className="container mx-auto flex py-10">
//         {/* Bagian kiri (Rating dan Ulasan) */}
//         <div className="w-3/4 bg-white p-6 rounded-lg shadow-lg">
//           {/* <h2 className="text-xl font-bold mb-4">Review</h2> */}
//           <Rating />

//           <div className="mt-6">
//             <ReviewItem
//               name="Gunawan"
//               date="23 September"
//               rating={5}
//               text="Kualitas barangnya bagus, pelayanan penjual juga top banget!"
//               images={['/path-to-image']}
//             />
//             <ReviewItem
//               name="Roxi"
//               date="23 September"
//               rating={4}
//               text="Enak, porsi banyak, pengiriman cepat"
//               images={['/path-to-image1', '/path-to-image2', '/path-to-image3']}
//             />
//           </div>
//         </div>

//         {/* Bagian kanan (Sidebar) */}
//         <div className="w-1/4 pl-6">
//           <Sidebar />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewReviews;

import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Review from '../components/Review';
import Sidebar from '../components/Sidebar';
import Rating from '../components/Rating';

const ViewReviews = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get('productId');
  const [filter, setFilter] = useState('Semua');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto flex py-10">
        <div className="w-3/4 bg-white p-6 rounded-lg shadow-lg">
          <Rating productId={productId} setFilter={setFilter} />
          <div className="mt-6">
            <Review productId={productId} filter={filter} />
          </div>
        </div>
        <div className="w-1/4 pl-6">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default ViewReviews;
