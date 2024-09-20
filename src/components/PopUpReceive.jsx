import PropTypes from 'prop-types';
import receive from '../assets/images/receive.png';

const PopUpReceive = ({ closePopup, onConfirm }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center relative w-1/3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={receive} alt="Receive" className="h-20 w-20" />
          <div className="ml-4 text-left">
            <p className="font-bold text-xl">Terima Pesanan?</p>
            <div className="mt-4">
              <p className="text-xs mb-4">
                Invoice Pembayaran akan anda dapatkan setelah ini, dan mohon
                segera dibayar.
              </p>

              {/* Tombol */}
              <div className="flex justify-start gap-4">
                <button
                  className="bg-white hover:bg-white hover:text-teal-500 border border-teal-600 text-teal-600 px-4 py-2 rounded"
                  onClick={closePopup}>
                  Nanti Saja
                </button>
                <button
                  className="text-white bg-teal-600 hover:bg-teal-700 hover:text-white border border-teal-600 px-4 py-2 rounded"
                  onClick={onConfirm}>
                  Konfirmasi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PopUpReceive.propTypes = {
  closePopup: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default PopUpReceive;
