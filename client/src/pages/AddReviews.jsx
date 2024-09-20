import { useState } from 'react';
import hvs from '../assets/images/hvs.png';
import pocky from '../assets/images/pocky.png';
import kursi from '../assets/images/kursi.png';
import SidebarRev from '../components/SidebarRev';
import SidebarRev2 from '../components/SidebarRev2';
import PopUpReceive from '../components/PopUpReceive';
import PopUpStar from '../components/PopUpStar'; 
import PopUpUlasan from '../components/PopUpUlasan'; 
import PopUpSuccess from '../components/PopUpSuccess';

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
  },
  {
    id: 2,
    userId: '0255',
    product: 'Kertas HVS',
    quantity: '2pcs x Rp75.000',
    total: 'Rp70.481',
    status: 'Dalam Pengiriman',
    date: '12 Mei 2023, 11:24 WIB',
    orderId: 'PO-2023-5-12-5238706',
    image: hvs,
  },
  {
    id: 3,
    userId: '0255',
    product: 'Kursi Kantor',
    quantity: '2pcs x Rp250.000',
    total: 'Rp70.481',
    status: 'Dalam Pengiriman',
    date: '12 Mei 2023, 11:24 WIB',
    orderId: 'PO-2023-5-12-5238706',
    image: kursi,
  },
];

const AddReviews = () => {
  const [showPopup, setShowPopup] = useState(false); 
  const [showStarPopup, setShowStarPopup] = useState(false); 
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showReviewPopup, setShowReviewPopup] = useState(false); 
  const [selectedOrder, setSelectedOrder] = useState(null); 
  const [rating, setRating] = useState(0); 

  const handleAcceptOrder = (order) => {
    setSelectedOrder(order); 
    setShowPopup(true); 
  };

  const closePopup = () => {
    setShowPopup(false); 
    setSelectedOrder(null); 
  };

  const handleConfirm = () => {
    
    setShowPopup(false);
   
    setShowStarPopup(true);
  };

  const handleStarConfirm = (selectedRating) => {
    setRating(selectedRating); 
    setShowStarPopup(false); 
    setShowReviewPopup(true);
  };

  const closeReviewPopup = () => {
    setShowReviewPopup(false); 
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
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
                <span className="bg-gray-200 text-sm px-2 py-1 rounded">
                  {order.status}
                </span>
                <div className="mt-2">
                  <button className="text-teal-800 border border-teal-600 px-3 py-1 rounded mr-2">
                    Lihat Detail
                  </button>
                  <button
                    className="text-white bg-teal-600 hover:bg-teal-700 hover:text-white border border-teal-600 px-3 py-1 rounded"
                    onClick={() => handleAcceptOrder(order)}> {/* Pass the order data */}
                    Terima Pesanan
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-1/4">
        <div className="text-bold font-black mb-4">Yang Perlu Dilakukan</div>
        <SidebarRev2 />
      </div>

      {/* PopUpReceive */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <PopUpReceive
            closePopup={closePopup}
            onConfirm={handleConfirm} // Confirm handler
            order={selectedOrder} // Pass the selected order to PopUpReceive
          />
        </div>
      )}

      {/* PopUpStar */}
      {showStarPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <PopUpStar
            closePopup={() => setShowStarPopup(false)} 
            onConfirm={handleStarConfirm} 
          />
        </div>
      )}

      {/* PopUpUlasan */}
      {showReviewPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <PopUpUlasan
            closePopup={closeReviewPopup} 
            order={selectedOrder} 
            rating={rating} 
            productId={selectedOrder?.productId} 
            userId={selectedOrder?.userId}
            onSuccess={() => setShowSuccessPopup(true)}
          />
        </div>
      )}
      {/* PopUpSuccess */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <PopUpSuccess closePopup={closeSuccessPopup} /> 
        </div>
      )}
    </div>
  );
};

export default AddReviews;
