// import ReviewItem from './ReviewItem';
// import hvs from '../assets/images/hvs.png';

// const reviews = [
//   {
//     name: 'Gunawan',
//     date: '23 September',
//     rating: 5,
//     text: 'Kualitas barangnya bagus, pelayanan penjual juga top banget!',
//     images: [hvs], // Import gambar sebagai array jika lebih dari satu gambar
//   },
//   {
//     name: 'Roxi',
//     date: '23 September',
//     rating: 4,
//     text: 'Enak, porsi banyak, pengiriman cepat',
//     images: [
//       'https://via.placeholder.com/150',
//       'https://via.placeholder.com/150',
//     ],
//   },
// ];

// const Review = () => {
//   return (
//     <div className="p-4 bg-white shadow rounded-lg">
//       <h2 className="text-xl font-bold mb-4">2 Ulasan</h2>
//       <div>
//         {reviews.map((review, index) => (
//           <ReviewItem
//             key={index}
//             name={review.name}
//             date={review.date}
//             rating={review.rating}
//             text={review.text}
//             images={review.images}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Review;

import { useEffect, useState } from 'react';
import ReviewItem from './ReviewItem';
const API_URL = import.meta.env.VITE_API_URL;

const Review = ({ productId, filter }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${API_URL}/reviews/${productId}`);
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [productId]);

  const filteredReviews = filter === 'Semua'
    ? reviews
    : reviews.filter(review => parseInt(review.rating, 10) === parseInt(filter, 10));

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">{filteredReviews.length} Ulasan</h2>
      <div>
        {filteredReviews.length > 0 ? (
          filteredReviews.map((review, index) => (
            <ReviewItem
              key={index}
              name={review.userDetails.userName} 
              date={new Date(review.timestamp).toLocaleDateString()} 
              rating={review.rating}
              text={review.comment}
              images={review.media ? [`${API_URL}${review.media}`] : []}
            />
          ))
        ) : (
          <p>Belum ada ulasan untuk produk ini.</p>
        )}
      </div>
    </div>
  );
};

export default Review;

