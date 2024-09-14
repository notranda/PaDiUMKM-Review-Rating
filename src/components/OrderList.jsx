const orders = [
  {
    id: 1,
    product: 'Pocky',
    quantity: '2pcs x Rp25.000',
    total: 'Rp70.481',
    status: 'Dalam Pengiriman',
    date: '12 Mei 2023, 11:24 WIB',
    orderId: 'PO-2023-5-12-5238706',
    image: 'https://example.com/pocky.jpg', // Tambahkan gambar sesuai
  },
  {
    id: 2,
    product: 'Kertas HVS',
    quantity: '2pcs x Rp75.000',
    total: 'Rp70.481',
    status: 'Dalam Pengiriman',
    date: '12 Mei 2023, 11:24 WIB',
    orderId: 'PO-2023-5-12-5238706',
    image: 'https://example.com/kertas-hvs.jpg',
  },
  {
    id: 3,
    product: 'Kursi Kantor',
    quantity: '2pcs x Rp250.000',
    total: 'Rp70.481',
    status: 'Dalam Pengiriman',
    date: '12 Mei 2023, 11:24 WIB',
    orderId: 'PO-2023-5-12-5238706',
    image: 'https://example.com/kursi-kantor.jpg',
  },
];

const OrderList = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-4">
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
                  <button className="text-blue-600 border border-blue-600 px-3 py-1 rounded mr-2">
                    Lihat Detail
                  </button>
                  <button className="text-white bg-blue-600 px-3 py-1 rounded">
                    Terima Pesanan
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
