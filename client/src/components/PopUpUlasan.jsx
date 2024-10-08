import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
const API_URL = import.meta.env.VITE_API_URL;

const PopUpUlasan = ({ closePopup, onSuccess, rating, productId, userId }) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [comment, setComment] = useState('');
  const [media, setMedia] = useState(null);

  // List of sentences for each like option
  const likeOptions = [
    { key: 'responseSeller', label: 'Respons Penjual', sentence: 'Respons penjual sangat cepat.' },
    { key: 'kecepatanPengiriman', label: 'Kecepatan Pengiriman', sentence: 'Pengiriman sangat cepat.' },
    { key: 'kualitasProduk', label: 'Kualitas Produk', sentence: 'Kualitas produk sangat baik.' },
    { key: 'kemasanProduk', label: 'Kemasan Produk', sentence: 'Kemasan produk rapi dan aman.' },
    { key: 'kesesuaianProduk', label: 'Kesesuaian Produk yang dikirim', sentence: 'Produk sesuai dengan pesanan.' },
  ];

  // Handle button click to update the comment with the new sentence
  const handleLikeClick = (option) => {
    setSelectedOption(option.key); // Set the selected option
    setComment(option.sentence); // Replace the comment with the new sentence
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
      formData.append('media', media);
    }

    try {
      const response = await fetch(`${API_URL}/review/add`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        onSuccess();
        closePopup();
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
    <div className="bg-white p-5 rounded-lg shadow-lg text-center relative w-2/5 h-auto">
      <div className="flex font-bold font-lg justify-between">Ulasan</div>

      {/* Display Rating Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-center mt-4">
            <p className="font-bold text-xl mb-4">Rating Anda</p>
            <div className="flex justify-center items-center space-x-2 mb-5">
              {[1, 2, 3, 4, 5].map((num) => (
                <span
                  key={num}
                  className={`text-3xl ${rating >= num ? 'text-yellow-500' : 'text-gray-300'}`}>
                  ★
                </span>
              ))}
            </div>

            {/* Like Button Section */}
            <div className="mb-4">
              <label className="block text-sm mb-5 font-medium text-gray-700">
                Apa yang Anda sukai?
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {likeOptions.map((option) => (
                  <button
                    key={option.key}
                    className={`text-white px-3 py-1 rounded ${
                      selectedOption === option.key
                        ? 'bg-teal-700'
                        : 'bg-teal-600 hover:bg-teal-700'
                    }`}
                    onClick={() => handleLikeClick(option)}>
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Comment Section */}
            <div className="my-8">
              <label
                htmlFor="comment"
                className="block text-left text-sm font-bold text-gray-700">
                Bagaimana pendapat Anda tentang produk ini?
              </label>
              <textarea
                id="comment"
                rows="3"
                className="mt-2 block w-full p-3 rounded-md border border-gray-400 shadow-sm focus:outline-none focus:ring-0 focus:border-gray-400 sm:text-sm"
                placeholder="Kualitas barangnya bagus, Pelayanan Penjual juga top banget"
                value={comment}
                onChange={handleCommentChange}
              />
            </div>

            {/* Media Section */}
            <div className="my-8">
              <label className="block text-left text-sm font-bold text-gray-700">
                Yuk Tambahkan foto/video produk
              </label>
              <input
                type="file"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                onChange={handleMediaChange}
              />
            </div>

            {/* Button Section */}
            <div className="flex justify-between">
              <button
                className="bg-white hover:bg-white hover:text-teal-500 border border-teal-600 text-teal-600 px-3 py-1 rounded"
                onClick={closePopup}>
                Nanti Saja
              </button>
              <button
                className="text-white bg-teal-600 hover:bg-teal-700 hover:text-white border border-teal-600 px-3 py-1 rounded"
                onClick={handleSubmit}>
                Konfirmasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PopUpUlasan.propTypes = {
  rating: PropTypes.number.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default PopUpUlasan;
