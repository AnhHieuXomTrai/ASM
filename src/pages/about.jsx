import Heading from "../components/Heading";
import Footer from "../components/footer";

function About() {
  return (
    <div>
      <Heading label="GIỚI THIỆU VỀ TRAVELVIP" />
      <p className="text-center mt-2 text-gray-700">
        Giới thiệu về website của chúng tôi.
      </p>
      <section className="max-w-7xl mx-auto px-6 mt-12 mb-24 flex flex-col md:flex-row gap-12">
        <aside className="md:w-1/4 w-full">
          <ul className="space-y-3">
            <li className="bg-blue-100 text-gray-800 px-4 py-3 rounded-md font-medium cursor-pointer hover:bg-gray-100">
              TravelVip.com
            </li>
            <li className="bg-blue-100 text-gray-800 px-4 py-3 rounded-md font-medium cursor-pointer hover:bg-gray-100">
              Pháp lý
            </li>
            <li className="bg-blue-100 text-gray-800 px-4 py-3 rounded-md font-medium cursor-pointer hover:bg-gray-100">
              Digital Services Act
            </li>
            <li className="bg-blue-100 text-gray-800 px-4 py-3 rounded-md font-medium cursor-pointer hover:bg-gray-100">
              Đạo luật Thị trường Kỹ thuật số
            </li>
            <li className="bg-blue-100 text-gray-800 px-4 py-3 rounded-md font-medium cursor-pointer hover:bg-gray-100">
              Chính sách về Khả năng tiếp cận
            </li>
            <li className="bg-blue-100 text-gray-800 px-4 py-3 rounded-md font-medium cursor-pointer hover:bg-gray-100">
              Điều khoản dịch vụ
            </li>
            <li className="bg-blue-100 text-gray-800 px-4 py-3 rounded-md font-medium cursor-pointer hover:bg-gray-100">
              Chúng tôi hoạt động như thế nào
            </li>
            <li className="bg-blue-100 text-gray-800 px-4 py-3 rounded-md font-medium cursor-pointer hover:bg-gray-100">
              Văn phòng toàn cầu
            </li>
            <li className="bg-blue-100 text-gray-800 px-4 py-3 rounded-md font-medium cursor-pointer hover:bg-gray-100">
              Liên hệ với chúng tôi
            </li>
            <li className="bg-blue-100 text-gray-800 px-4 py-3 rounded-md font-medium cursor-pointer hover:bg-gray-100">
              Truyền thông
            </li>
            <li className="bg-blue-100 text-gray-800 px-4 py-3 rounded-md font-medium cursor-pointer hover:bg-gray-100">
              Cơ hội nghề nghiệp
            </li>
            <li className="bg-blue-100 text-gray-800 px-4 py-3 rounded-md font-medium cursor-pointer hover:bg-gray-100">
              Du lịch bền vững tại TravelVip.com
            </li>
          </ul>
        </aside>
        <main className="md:w-3/4 w-full leading-relaxed">
          <h1 className="text-4xl font-semibold mb-6"> TravelVip.com™</h1>

          <p className="mb-4 text-lg text-gray-700">
            Được thành lập vào năm 1996 ở Amsterdam, TravelVip.com đã phát triển
            từ một nhóm khởi nghiệp nhỏ ở Hà Lan để trở thành một trong các công
            ty lớn hàng đầu thế giới cung cấp các dịch vụ du lịch dựa trên nền
            tảng số hóa. Là một phần của TravelVip Holdings Inc. (NASDAQ: BKNG),
            sứ mệnh của TravelVip.com là
            <strong> giúp mọi người trải nghiệm thế giới dễ dàng hơn.</strong>
          </p>

          <p className="mb-4 text-lg text-gray-700">
            Bằng cách đầu tư vào công nghệ giúp loại bỏ những phiền toái khi du
            lịch, TravelVip.com kết nối hàng triệu du khách với các trải nghiệm
            đáng nhớ, nhiều lựa chọn vận chuyển và các chỗ nghỉ tuyệt vời – từ
            dạng nhà ở cho đến khách sạn và nhiều hơn nữa. Là một trong những
            thị trường du lịch lớn nhất thế giới cho cả những thương hiệu lớn và
            doanh nghiệp ở mọi quy mô, TravelVip.com giúp các chỗ nghỉ trên khắp
            thế giới kết nối với khách hàng toàn cầu và phát triển doanh nghiệp
            của họ.
          </p>

          <p className="mb-4 text-lg text-gray-700">
            TravelVip.com hỗ trợ 43 ngôn ngữ và cung cấp tổng cộng hơn 28 triệu
            đăng ký chỗ nghỉ theo báo cáo, trong đó có hơn 6,6 triệu là đăng ký
            dạng nhà ở, căn hộ và các chỗ nghỉ độc đáo khác. Dù bạn chu du đến
            phương trời nào hay muốn chinh phục thử thách gì, TravelVip.com sẽ
            tạo mọi điều kiện thuận lợi và luôn bên bạn với bộ phận hỗ trợ khách
            hàng 24/7.
          </p>
        </main>
      </section>

      <Footer />
    </div>
  );
}

export default About;
