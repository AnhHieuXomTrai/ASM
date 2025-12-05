import { Link } from "react-router-dom";

function TourCard({ tour }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={tour.image}
        alt={tour.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{tour.name}</h3>
        <p className="text-gray-600 mb-2">{tour.destination}</p>
        <p className="text-blue-600 font-semibold mb-2">
          {tour.price.toLocaleString("vi-VN")} đ
        </p>
        <Link
          to={`/tours/${tour.id}`}
          className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
}

export default TourCard;
