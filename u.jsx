import Header from "../components/Header";
import Footer from "../components/footer";
function Home() {
  const tours = [
    {
      id: 1,
      title: "Đà Lạt - Thác Dambri - Vườn Châu Âu - Mongo Land - Samten Hills",
      image:
        "https://s3-cmc.travel.com.vn/vtv-image/Images/TourFiles/10188/066bdbb7bab410ea49a5.webp",
    },
    {
      id: 2,
      title: "Đông Bắc: Hà Giang - Lũng Cú - Đồng Văn - Làng Lô Lô Chải ",
      image:
        "https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd__2_13054_meo-vac-and-dong-van-town1.webp",
    },
    {
      id: 3,
      title: "Đại Lễ Vesak 2025 Khám phá Tây Ninh vùng đất địa linh",
      image:
        "https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd__0_11611_dji0984e.webp",
    },
    {
      id: 4,
      title: "Đà Nẵng - Bà Nà - Cầu Vàng - Sơn Trà - Phổ Cổ Hội An - La Vang ",
      image:
        "https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd__1_10656_banahill4.webp",
    },
  ];
  const trending = [
    {
      id: 1,
      title: "TP. Hồ Chí Minh",
      image:
        "https://btnmt.1cdn.vn/2022/12/23/bcp.cdnchinhphu.vn-334894974524682240-2022-12-23-_dien-tich-cac-quan-tai-ho-chi-minh-1-16717832922811126226268.jpg",
    },
    {
      id: 2,
      title: "Đà Nẵng",
      image:
        "https://img5.thuthuatphanmem.vn/uploads/2022/01/13/hinh-anh-thanh-pho-da-nang-ve-dem-dep_024513140.jpg",
    },
    {
      id: 3,
      title: "Hà Nội",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.OHLVdxiHqnVWojrhD0WvOgHaDX?pid=Api&P=0&h=180",
    },
    {
      id: 4,
      title: "Tây Ninh",
      image:
        "https://file.hstatic.net/1000169629/file/vung_tau_a5b6ddbb954140c0941c48e0273e18b5.jpg",
    },
    {
      id: 5,
      title: "Đà Lạt",
      image:
        "https://tse4.mm.bing.net/th/id/OIP.Lp3eque6TJO4nO88jqmomgHaEK?pid=Api&P=0&h=180",
    },
    {
      id: 6,
      title: "Hà Giang",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.L6iyuVwYhQluh8CtMNTNxwHaE8?pid=Api&P=0&h=180",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-3xl font-extrabold text-[#003580] flex justify-center items-center space-x-2">
        <span>✈️</span>
        <span>TOUR MANAGEMENT SYSTEM</span>
      </h1>
      <h2 className="text-xl text-[#003580] mt-1 tracking-wide">KHÁM PHÁ</h2>
      <p className="max-w-4xl mx-auto text-lg mt-4 text-gray-800 leading-relaxed px-4">
        TravelVip hướng đến mục tiêu bất cứ Du Khách nào cũng có cơ hội đi du
        lịch với mức chi phí tiết kiệm nhất. Các điểm tham quan và dịch vụ chọn
        lọc phù hợp với ngân sách của Du Khách nhưng vẫn đảm bảo hành trình du
        lịch đầy đủ và thú vị.
      </p>
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <h2 className="text-2xl font-bold text-blue-800">
          Điểm đến đang thịnh hành
        </h2>
        <p className="text-gray-600 mt-1">
          Các lựa chọn phổ biến nhất cho du khách từ Việt Nam
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {trending.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[240px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <h3 className="absolute top-4 left-4 text-white text-xl font-bold flex items-center space-x-2">
                <span>{item.title}</span>
                <img src="https://flagcdn.com/w20/vn.png" className="w-5 h-5" />
              </h3>
            </div>
          ))}
        </div>
      </section>

      <h2 className="text-xl text-[#003580] mt-10 tracking-wide text-center">
        CÁC TOUR PHỔ BIẾN
      </h2>

      <div className="flex gap-4 my-6 px-6 justify-center">
        {tours.map((tour) => (
          <div key={tour.id} className="w-[300px]">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-[200px] object-cover rounded-lg shadow-md"
            />
            <h3 className="font-semibold mt-2">{tour.title}</h3>
            <div className="flex gap-3 mt-3 justify-center">
              <button className="px-3 py-2 bg-[#003580] text-white rounded-lg hover:bg-blue-700">
                Xem thêm
              </button>

              <button className="px-3 py-2 bg-green-800 text-white rounded-lg hover:bg-green-600">
                Đặt tour
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
export default Home;
