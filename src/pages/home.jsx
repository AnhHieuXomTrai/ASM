// src/pages/Home.jsx
import Heading from "../components/Heading";
import Footer from "../components/footer";

import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [trending, setTrending] = useState([]);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingRes = await axios.get("http://localhost:3001/trending");
        const tourRes = await axios.get("http://localhost:3001/tourlist");

        setTrending(trendingRes.data);
        setTours(tourRes.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Heading label="TOUR MANAGEMENT SYSTEM" />
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
              className="  group
        relative 
        rounded-xl 
        overflow-hidden 
        shadow-lg 
        transition-all 
        duration-500 
        hover:shadow-2xl 
        hover:-translate-y-2
        cursor-pointer"
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
      </section>
    </div>
  );
}

export default Home;
