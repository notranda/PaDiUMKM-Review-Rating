import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment-timezone'; 
const API_URL = import.meta.env.VITE_API_URL;

function ReviewForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const { productId, userId } = location.state || {}; 

  const [rating, setRating] = useState(5);
  const [likes, setLikes] = useState([]);
  const [comment, setComment] = useState('');
  const [media, setMedia] = useState(null);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleLikeChange = (like) => {
    if (likes.includes(like)) {
      setLikes(likes.filter((l) => l !== like));
    } else {
      setLikes([...likes, like]);
    }
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleMediaChange = (event) => {
    setMedia(event.target.files[0]); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const timestamp = moment().tz('Asia/Jakarta').format();
  
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('productId', productId);
    formData.append('rating', rating);
    formData.append('comment', comment);
    formData.append('timestamp', timestamp);
    if (media) {
      formData.append('media', media);  // Menambahkan file ke FormData
    }
  
    try {
      const response = await fetch(`${API_URL}/review/add`, {
        method: 'POST',
        body: formData,  
      });
  
      if (response.ok) {
        alert('Review berhasil dikirim!');
        navigate(`/?productId=${productId}`);
      } else {
        const errorData = await response.json();
        alert(`Gagal mengirim review: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat mengirim review');
    }
  };
  
  

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Ulasan</h2>
      <div className="flex items-center mb-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <span
            key={num}
            className={`cursor-pointer mr-1 ${
              rating >= num ? 'text-yellow-500' : 'text-gray-300'
            }`}
            onClick={() => handleRatingChange(num)}>
            ★
          </span>
        ))}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Apa yang Anda sukai?
        </label>
        <div className="flex space-x-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              value="responseSeller"
              checked={likes.includes('responseSeller')}
              onChange={() => handleLikeChange('responseSeller')}
            />
            <span className="ml-2 text-sm font-medium text-gray-700">
              Respons Penjual
            </span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-700">
          Bagaimana pendapat Anda tentang produk ini?
        </label>
        <textarea
          id="comment"
          rows="4"
          className="mt-1 block w-full rounded-md border-gray-300 dark:bg-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={comment}
          onChange={handleCommentChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Yuk tambahkan foto/video produk
        </label>
        <input
          type="file"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={handleMediaChange}
        />
      </div>
      <div className="flex justify-end">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
          Nanti Saja
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}>
          Konfirmasi
        </button>
      </div>
    </div>
  );
}

export default ReviewForm;

// import { useState } from 'react';

// function ReviewForm() {
//   const [rating, setRating] = useState(5);
//   const [likes, setLikes] = useState([]);
//   const [comment, setComment] = useState('');
//   const [media, setMedia] = useState(null);

//   const handleRatingChange = (newRating) => {
//     setRating(newRating);
//   };

//   const handleLikeChange = (like) => {
//     if (likes.includes(like)) {
//       setLikes(likes.filter((l) => l !== like));
//     } else {
//       setLikes([...likes, like]);
//     }
//   };

//   const handleCommentChange = (event) => {
//     setComment(event.target.value);
//   };

//   const handleMediaChange = (event) => {
//     setMedia(event.target.files[0]);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Kirim data ulasan ke server
//     console.log({ rating, likes, comment, media });
//   };

//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4">Ulasan</h2>
//       <div className="flex items-center mb-4">
//         {[1, 2, 3, 4, 5].map((num) => (
//           <span
//             key={num}
//             className={`cursor-pointer mr-1 ${
//               rating >= num ? 'text-yellow-500' : 'text-gray-300'
//             }`}
//             onClick={() => handleRatingChange(num)}>
//             ★
//           </span>
//         ))}
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">
//           Apa yang Anda sukai?
//         </label>
//         <div className="flex space-x-2">
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               className="form-checkbox h-5 w-5 text-blue-600"
//               value="responseSeller"
//               checked={likes.includes('responseSeller')}
//               onChange={(e) => handleLikeChange('responseSeller')}
//             />
//             <span className="ml-2 text-sm font-medium text-gray-700">
//               Response Seller
//             </span>
//           </label>
//         </div>
//       </div>
//       <div className="mb-4">
//         <label
//           htmlFor="comment"
//           className="block text-sm font-medium text-gray-700">
//           Bagaimana pendapat Anda tentang produknya?
//         </label>
//         <textarea
//           id="comment"
//           rows="4"
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           value={comment}
//           onChange={handleCommentChange}
//         />
//       </div>

//       <div className="flex justify-end">
//         <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
//           Nanti Saja
//         </button>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//           onClick={handleSubmit}>
//           Konfirmasi
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ReviewForm;
