function Footer() {
  return (
    <footer className="w-full bg-gray-50 py-6 border-t  mt-8 mb-4">
      <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm space-y-3">
        <p>
          TravelVip.com là một tập đoàn đứng đầu thế giới về du lịch trực tuyến
          và các dịch vụ liên quan.
        </p>

        <p>Bản quyền ©2025 TravelVip.com.</p>

        <div className="flex items-center justify-center gap-6 pt-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"
            className="h-5"
            alt="Booking.com"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZR9npLfmApWYC0keCwuwCDzeini7NocCW8w&s"
            className="h-5"
            alt="Priceline"
          />
          <img
            src="https://kinsta.com/wp-content/uploads/2021/03/HTML-5-Badge-Logo.png"
            className="h-5"
            alt="Kayak"
          />
        </div>
      </div>
    </footer>
  );
}
export default Footer;

<nav className="my-2">
  <ul className="flex items-center justify-around">
    <a href="'/">Home</a>
    <a href="'/">About</a>
    <a href="'/">Booking</a>
    <a href="'/">Contact</a>
  </ul>
</nav>;
