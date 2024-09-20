import success from '../assets/images/success.png';

const PopUpSuccess = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center relative w-1/3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={success} alt="Sukses" className="h-20 w-20" />
          <div className="ml-4 text-left">
            <p className="font-bold text-xl">Terima Pesanan?</p>
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
