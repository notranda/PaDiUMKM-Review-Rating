import { useState } from 'react';

const Sidebar = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Atur Pembelian</h2>
      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={() => setQuantity(quantity - 1)}
          className="px-4 py-2 bg-gray-200">
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="px-4 py-2 bg-gray-200">
          +
        </button>
      </div>
      <div className="text-lg font-bold mb-4">Rp35.000</div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
        + Keranjang
      </button>
    </div>
  );
};

export default Sidebar;
