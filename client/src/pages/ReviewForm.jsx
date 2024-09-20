import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import hvs from '../assets/images/hvs.png';
import pocky from '../assets/images/pocky.png';
import kursi from '../assets/images/kursi.png';
import SidebarRev from '../components/SidebarRev';
import SidebarRev2 from '../components/SidebarRev2';

const orders = [
  {
    id: 1,
    userId: '0255',
    product: 'Pocky',
    productId: '0003',
    quantity: '2pcs x Rp25.000',
    total: 'Rp70.481',
    status: 'Dalam Pengiriman',
    date: '12 Mei 2023, 11:24 WIB',
    orderId: 'PO-2023-5-12-5238706',
    image: pocky,
    hasReviewed: false, 
  },
  {
    id: 2,
    userId: '0255',
    product: 'Kertas HVS',
    productId: '0002',
    quantity: '2pcs x Rp75.000',
    total: 'Rp70.481',
    status: 'Dalam Pengiriman',
    date: '12 Mei 2023, 11:24 WIB',
    orderId: 'PO-2023-5-12-5238706',
    image: hvs,
    hasReviewed: true, 
  },
  {
    id: 3,
    userId: '0255',
    product: 'Kursi Kantor',
    productId: '0001',
    quantity: '2pcs x Rp250.000',
    total: 'Rp70.481',
    status: 'Dalam Pengiriman',
    date: '12 Mei 2023, 11:24 WIB',
    orderId: 'PO-2023-5-12-5238706',
    image: kursi,
    hasReviewed: false, 
  },
];

const ReviewsForm = () => {
  const navigate = useNavigate();

  const handleReviewNavigation = (productId, hasReviewed) => {
    if (hasReviewed) {
      navigate(`/viewreviews?productId=${productId}`);
    } else {
      navigate(`/form-review?productId=${productId}`);
    }
  };

  return (
    <div className="flex flex-row min-h-screen bg-white">
      {/* Sidebar Kiri */}
      <div className="w-1/4 border-r border-gray-300">
        <SidebarRev />
      </div>

      {/* List Order */}
      <div className="w-2/4 grid grid-cols-1 gap-4 p-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-4 bg-white shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={order.image}
                  alt={order.product}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="ml-4">
                  <p className="font-bold text-lg">{order.product}</p>
                  <p className="text-sm">{order.quantity}</p>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">{order.total}</p>
                <div className="mt-2">
                  {order.hasReviewed ? (
                    <button
                      className="bg-white hover:bg-white hover:text-teal-500 border border-teal-600 text-teal-600 px-3 py-1 rounded"
                      onClick={() =>
                        handleReviewNavigation(order.productId, true)
                      }>
                      Lihat Ulasan
                    </button>
                  ) : (
                    <button
                      className="text-white bg-teal-600 hover:bg-teal-700 hover:text-white border border-teal-600 px-3 py-1 rounded"
                      onClick={() =>
                        handleReviewNavigation(order.productId, false)
                      }>
                      Beri Ulasan
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-1/4">
        <SidebarRev2 />
      </div>
    </div>
  );
};

export default ReviewsForm;
