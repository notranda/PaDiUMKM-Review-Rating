import sucess from '../assets/images/success.png';

const PopUpSuccess = ({ closePopup }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center relative w-1/3">
      <button
        className="absolute top-2 right-2 text-black-600 bg-white text-2xl"
        onClick={closePopup}
      >
        &times; 
      </button>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={sucess} alt="Sukses" className="h-20 w-20" />
          <div className="ml-4 text-left">
            <p className="font-bold text-xl">Terima Kasih!</p>
            <div className="mt-4">
              <p className="text-xs mb-4">Terimakasih untuk Penilaian Anda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpSuccess;
