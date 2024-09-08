import ReviewItem from './ReviewItem';
import hvs from '../assets/images/hvs.png';

const reviews = [
  {
    name: 'Gunawan',
    date: '23 September',
    rating: 5,
    text: 'Kualitas barangnya bagus, pelayanan penjual juga top banget!',
    images: [hvs], // Import gambar sebagai array jika lebih dari satu gambar
  },
  {
    name: 'Roxi',
    date: '23 September',
    rating: 4,
    text: 'Enak, porsi banyak, pengiriman cepat',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
  },
];

const Review = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">2 Ulasan</h2>
      <div>
        {reviews.map((review, index) => (
          <ReviewItem
            key={index}
            name={review.name}
            date={review.date}
            rating={review.rating}
            text={review.text}
            images={review.images}
          />
        ))}
      </div>
    </div>
  );
};

export default Review;
