import { useState } from 'react';
import PopUpReceive from './PopUpReceive';
import PopUpStar from './PopUpStar';
import PopUpUlasan from './PopUpUlasan';

function OrderComponent() {
  const [showPopupReceive, setShowPopupReceive] = useState(false);
  const [showPopupStar, setShowPopupStar] = useState(false);
  const [showPopUpUlasan, setShowPopUpUlasan] = useState(false);

  // Handle Terima Pesanan
  const handleReceiveOrder = () => {
    setShowPopupReceive(true);
  };

  // Handle confirm PopUpStar
  const handleConfirmReceive = () => {
    setShowPopupReceive(false);
    setShowPopupStar(true);
  };

  // Handle rating PopUpUlasan
  const handleSelectStar = () => {
    setShowPopupStar(false);
    setShowPopUpUlasan(true);
  };

  return (
    <div className="order-component">
      <button
        onClick={handleReceiveOrder}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Terima Pesanan
      </button>

      {showPopupReceive && (
        <PopUpReceive onConfirmReceive={handleConfirmReceive} />
      )}

      {showPopupStar && <PopUpStar onSelectStar={handleSelectStar} />}

      {showPopUpUlasan && <PopUpUlasan />}
    </div>
  );
}

export default OrderComponent;
