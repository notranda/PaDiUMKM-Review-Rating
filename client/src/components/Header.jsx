import logo from '../assets/images/logo.jpg';
import union from '../assets/images/union.png';
import profile from '../assets/images/profile.png';
import notif from '../assets/images/navbar/notif.png';
import shop from '../assets/images/navbar/shop.png';
import message from '../assets/images/navbar/message.png';


const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-kategori">
          <img src={logo} alt="Logo" className="logo" />
          <div className="kategori">
            <img src={union} alt="Kategori" className="kategori-icon" />
            <div className="kategori-text">Kategori</div>
          </div>
        </div>

        <div className="search-product">
          <input
            type="text"
            placeholder="Cari produk, jasa, atau vendor"
            className="search-input"
          />
          <button className="payment-button">Menunggu Pembayaran</button>

          {/* Notifikasi sebagai tombol */}
          <div className="icons">
            <button className="notif-button">
              <img src={notif} alt="notif" className="icon" />
            </button>
            <button className="shop-button">
              <img src={shop} alt="shop" className="icon" />
            </button>
            <button className="message-button">
              <img src={message} alt="message" className="icon" />
            </button>
          </div>

          <img src={profile} alt="Profile" className="profile" />
          <div className="greeting">Hi Ogiana</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
