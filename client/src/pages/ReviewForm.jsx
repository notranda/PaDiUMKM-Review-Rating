import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import hvs from '../assets/images/hvs.png';
import pocky from '../assets/images/pocky.png';
import kursi from '../assets/images/kursi.png';
import SidebarRev from '../components/SidebarRev';
import SidebarRev2 from '../components/SidebarRev2';
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
    hasReviewed: false, // Add this field
    image: pocky,
  },
  {
    id: 2,
    userId: '0255',
    product: 'Kertas HVS',
    productId: '0004',
    quantity: '2pcs x Rp75.000',
    total: 'Rp70.481',
    status: 'Dalam Pengiriman',
    date: '12 Mei 2023, 11:24 WIB',
    hasReviewed: false, // Add this field
    image: hvs,
  },
  {
    id: 3,
    userId: '0255',
    product: 'Kursi Kantor',
    productId: '0005',
    quantity: '2pcs x Rp250.000',
    total: 'Rp70.481',
    status: 'Dalam Pengiriman',
    date: '12 Mei 2023, 11:24 WIB',
    hasReviewed: false, // Add this field
    image: kursi,
  },
];

const ReviewsForm = () => {
  const [orders, setOrders] = useState(initialOrders); // Make orders stateful
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showStarPopup, setShowStarPopup] = useState(false);
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [rating, setRating] = useState(0);

  const navigate = useNavigate(); // Initialize useNavigate

  // Handle the start of the review process
  const handleStartReview = (order) => {
    setSelectedOrder(order);
    setShowStarPopup(true); // Open the star rating popup
  };

  // Handle star confirmation and move to review step
  const handleStarConfirm = (selectedRating) => {
    setRating(selectedRating);
    setShowStarPopup(false);
    setShowReviewPopup(true);
  };

  // Close the review popup
  const closeReviewPopup = () => {
    setShowReviewPopup(false);
  };

  // Handle the success of the review
  const handleReviewSuccess = () => {
    // Update the specific order to mark it as reviewed
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === selectedOrder.id ? { ...order, hasReviewed: true } : order
      )
    );
    setShowReviewPopup(false);
    setShowSuccessPopup(true);
  };

  // Close the success popup and clear selected order
  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    setSelectedOrder(null);
  };

  // Handle redirection to view reviews for a specific product
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
                <div className="mt-2">
                  {order.hasReviewed ? (
                    <button
                      className="bg-white hover:bg-white hover:text-teal-500 border border-teal-600 text-teal-600 px-3 py-1 rounded"
                      onClick={() => viewReview(order.productId)}> {/* Redirect to view reviews */}
                      Lihat Ulasan
                    </button>
                  ) : (
                    <button
                      className="text-white bg-teal-600 hover:bg-teal-700 hover:text-white border border-teal-600 px-3 py-1 rounded"
                      onClick={() => handleStartReview(order)}>
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

export default ReviewsForm;
