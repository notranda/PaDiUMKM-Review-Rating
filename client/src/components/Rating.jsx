import star from '../assets/images/star.png'; // Pastikan path gambar benar

const Rating = () => {
  const rating = 5; // rating yang diberikan
  const totalReviews = 2; // total jumlah ulasan

  // Data distribusi rating, sesuaikan dengan data nyata
  const ratingDistribution = {
    5: 1,
    4: 1,
    3: 0,
    2: 0,
    1: 0,
  };

  const getPercentage = (count) => {
    return (count / totalReviews) * 100; // Menghitung persentase
  };

  return (
    <div className="w-full px-4">
      {/* Navigation Tabs */}
      <div className="border-b border-borderCard-divider mb-4">
        <ul className="flex flex-wrap -mb-px space-x-6 font-ubuntu">
          <li>
            <div
              className="inline-block pb-4 text-center cursor-pointer text-paletteText-inactive border-b-2 border-transparent hover:border-gray-300 hover:text-gray-600"
              aria-current="page">
              Deskripsi Produk
            </div>
          </li>
          <li>
            <div className="inline-block pb-4 text-center cursor-pointer text-secondary-70 border-b-4 border-secondary-70 font-bold">
              Review
            </div>
          </li>
        </ul>
      </div>

      {/* Rating Summary */}
      <div className="flex items-center gap-11">
        {/* Overall Rating */}
        <div className="flex flex-col w-[148px] items-center gap-2.5">
          <div className="flex flex-col items-center justify-center w-full h-[148px] px-[67px] py-[60px] rounded-full border-[10px] border-[#f89e35]">
            <div className="font-bold text-2xl text-black leading-normal">
              {rating}
            </div>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={star}
                alt="star"
                className={`w-6 h-6 ${
                  index < rating ? 'opacity-100' : 'opacity-30'
                }`}
              />
            ))}
          </div>
          <div className="font-bold text-primarymain text-base text-center">
            {totalReviews} Ulasan
          </div>
        </div>

        {/* Rating Breakdown */}
        <div className="flex flex-col w-[309px] gap-4">
          {Object.entries(ratingDistribution).map(([ratingValue, count]) => (
            <div key={ratingValue} className="flex items-center gap-3">
              <div className="font-bold text-black text-base">
                {ratingValue}
              </div>
              <img src={star} alt="star" className="w-6 h-6" />
              <div className="relative w-[177px] h-2.5 bg-neutral-20 rounded-full">
                <div
                  className="absolute top-0 left-0 h-full bg-secondary-70 rounded-full"
                  style={{ width: `${getPercentage(count)}%` }}
                />
              </div>
              <div className="font-normal text-neutral-70 text-base">
                {getPercentage(count).toFixed(0)}%
              </div>
            </div>
          ))}
        </div>

        {/* Filter Section */}
        <div className="flex flex-col w-[333px] gap-2.5">
          <div className="font-normal text-black text-base">Filter</div>
          <div className="flex flex-wrap items-center gap-5">
            {['Semua', '5', '4', '3', '2', '1'].map((filter, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 px-4 py-2 rounded-full border border-primarymain">
                <div className="font-normal text-sm text-black">{filter}</div>
                <img src={star} alt="star" className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
