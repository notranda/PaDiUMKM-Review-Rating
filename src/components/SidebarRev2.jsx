const SidebarRev2 = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 text-gray-400">
      <div className="flex flex-col items-start p-4 space-y-6">
        {/* Card Pesanan Menunggu diterima */}
        <div className="w-full p-4 bg-emerald-100 rounded-lg shadow-md cursor-pointer hover:bg-emerald-100 hover:text-black transition-colors duration-300">
          <span className="text-lg">Pesanan Menunggu diterima</span>
        </div>

        {/* Card Yuk Beri Penilaian atas Pesananmu */}
        <div className="w-full p-4 bg-yellow-100 rounded-lg shadow-md cursor-pointer hover:bg-yellow-100 text-black transition-colors duration-300">
          <span className="text-lg">Yuk Beri Penilaian atas Pesananmu</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarRev2;
