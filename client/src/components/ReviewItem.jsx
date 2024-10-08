// import gunawan from '../assets/images/gunawan.png';

// const ReviewItem = ({ name, date, rating, text, images }) => {
//   return (
//     <div className="border-t pt-4 mt-4">
//       <div className="flex items-center">
//         <img src={gunawan} alt={name} className="h-8 w-8 rounded-full" />
//         <div className="ml-4">
//           <span className="font-bold">{name}</span>
//           <span className="text-gray-500 ml-2">{date}</span>
//         </div>
//       </div>
//       <p className="mt-2">{text}</p>
//       <div className="mt-2 flex space-x-2">
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`Review ${index}`}
//             className="h-20 w-20 object-cover"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReviewItem;

import gunawan from '../assets/images/gunawan.png';

const ReviewItem = ({ name, date, rating, text, images }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-xl ${
            i <= rating ? 'text-yellow-500' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="border-t pt-4 mt-4">
      <div className="flex items-center">
        <img src={gunawan} alt={name} className="h-8 w-8 rounded-full" />
        <div className="ml-4">
          <div className="flex space-x-1 mb-1">
            {renderStars(rating)}
          </div>
          <div className="flex items-center">
            <span className="font-bold">{name}</span>
            <span className="text-gray-500 ml-2">{date}</span>
          </div>
        </div>
      </div>
      <p className="mt-2">{text}</p>
      <div className="mt-2 flex space-x-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Review ${index}`}
            className="h-20 w-20 object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewItem;
