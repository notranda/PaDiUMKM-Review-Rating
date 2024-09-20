import PropTypes from 'prop-types';
import { useState } from 'react';
import sucess from '../assets/images/sucess.png';

const PopUpStar = ({ closePopup }) => {
  const [rating, setRating] = useState(0);
  const handleRating = (star) => {
    setRating(star);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center relative w-96 h-48">
      <button
        onClick={closePopup}
        className="absolute top-2 right-2 text-black text-lg font-bold focus:outline-none"
        style={{ background: 'none', border: 'none' }}>
        ✕
      </button>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={sucess} alt="Success" className="h-24 w-24" />
          <div className="ml-4 text-left">
            <p className="font-bold text-xl">Berhasil</p>
            <p className="text-md mt-4">Puas dengan Pesananmu?</p>
            <div className="flex justify-start mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRating(star)}
                  className={`cursor-pointer text-3xl ${
                    star <= rating ? 'text-yellow-500' : 'text-gray-300'
                  }`}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PopUpStar.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default PopUpStar;
