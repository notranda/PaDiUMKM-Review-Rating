import { useState } from 'react';
import PopUpReceive from './PopUpReceive';
import PopUpStar from './PopUpStar';

const PopUp = () => {
  const [showReceivePopup, setShowReceivePopup] = useState(true);
  const [showStarPopup, setShowStarPopup] = useState(false);

  // close popup receive dan buka popup star
  const handleConfirmReceive = () => {
    setShowReceivePopup(false);
    setShowStarPopup(true);
  };

  const handleClosePopup = () => {
    setShowReceivePopup(false);
    setShowStarPopup(false);
  };

  return (
    <div>
      {/* Menampilkan PopUpReceive jika state showReceivePopup true */}
      {showReceivePopup && (
        <PopUpReceive
          closePopup={handleClosePopup}
          onConfirm={handleConfirmReceive}
        />
      )}

      {/* Menampilkan PopUpStar jika state showStarPopup true */}
      {showStarPopup && <PopUpStar closePopup={handleClosePopup} />}
    </div>
  );
};

export default PopUp;
