import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import hvs from '../assets/images/hvs.png';
import pocky from '../assets/images/pocky.png';
import kursi from '../assets/images/kursi.png';
import SidebarRev from '../components/SidebarRev';
import SidebarRev2 from '../components/SidebarRev2';
import PopUpReceive from '../components/PopUpReceive';
import PopUpStar from '../components/PopUpStar'; 
import PopUpUlasan from '../components/PopUpUlasan'; 
import PopUpSuccess from '../components/PopUpSuccess';

const initialOrders = [
  {
    id: 1,
    userId: '0255',
    product: 'Pocky',
    productId: '0003',
    quantity: '2pcs x Rp25.000',
    total: 'Rp70.481',
    status: 'Dalam Pengiriman',
    date: '12 Mei 2023, 11:24 WIB',
    image: pocky,
    hasReviewed: false,
  },
  {
    id: 2,
    userId: '0255',
    product: 'Kertas HVS',
    quantity: '2pcs x Rp75.000',
    total: 'Rp70.481',
    status: 'Dalam Pengiriman',
    date: '12 Mei 2023, 11:24 WIB',
    image: hvs,
    hasReviewed: false,
  },
  {
    id: 3,
    userId: '0255',
    product: 'Kursi Kantor',
    quantity: '2pcs x Rp250.000',
    total: 'Rp70.481',
    status: 'Dalam Pengiriman',
    date: '12 Mei 2023, 11:24 WIB',
    image: kursi,
    hasReviewed: false,
  },
];

const AddReviews = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [showPopup, setShowPopup] = useState(false); 
  const [showStarPopup, setShowStarPopup] = useState(false); 
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showReviewPopup, setShowReviewPopup] = useState(false); 
  const [selectedOrder, setSelectedOrder] = useState(null); 
  const [rating, setRating] = useState(0); 

  const navigate = useNavigate(); // Initialize useNavigate

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

  const handleReviewSuccess = () => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === selectedOrder.id
          ? { ...order, hasReviewed: true, status: '' } // Set status to empty after review
          : order
      )
    );
    setShowReviewPopup(false);
    setShowSuccessPopup(true);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  const viewReview = (productId) => {
    navigate(`/viewreviews?productId=${productId}`);
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
                {order.status && (
                  <span className="bg-gray-200 text-sm px-2 py-1 rounded">
                    {order.status}
                  </span>
                )}
                <div className="mt-2">
                  <button className="text-teal-800 border border-teal-600 px-3 py-1 rounded mr-2">
                    Lihat Detail
                  </button>
                  {order.hasReviewed ? (
                    <button
                      className="text-teal-800 border border-teal-600 px-3 py-1 rounded mr-2"
                      onClick={() => viewReview(order.productId)}> {/* Redirect to view reviews */}
                      Lihat Ulasan
                    </button>
                  ) : (
                    <button
                      className="text-white bg-teal-600 hover:bg-teal-700 hover:text-white border border-teal-600 px-3 py-1 rounded"
                      onClick={() => handleAcceptOrder(order)}>
                      Terima Pesanan
                    </button>
                  )}
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
            onConfirm={handleConfirm}
            order={selectedOrder}
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
            onSuccess={handleReviewSuccess}
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
