import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

function ListTour() {
  const [tours, setTours] = useState([]);
  const [search, setSearch] = useState("");
  const [destinationFilter, setDestinationFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    const getTours = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/tours");
        setTours(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTours();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Bạn chắc chắn muốn xóa?")) {
      try {
        await axios.delete(`http://localhost:3000/tours/${id}`);
        setTours(tours.filter((tour) => tour.id !== id));
        toast.success("Xóa thành công!");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleToggleActive = async (id, currentActive) => {
    try {
      await axios.patch(`http://localhost:3000/tours/${id}`, {
        active: !currentActive,
      });

      setTours((prev) =>
        prev.map((t) => (t.id === id ? { ...t, active: !currentActive } : t))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const filteredTours = tours.filter((tour) => {
    const matchSearch = tour.name.toLowerCase().includes(search.toLowerCase());
    const matchDestination =
      destinationFilter === "" || tour.destination === destinationFilter;
    const matchStatus =
      statusFilter === "" ||
      (statusFilter === "available" && tour.available > 0) ||
      (statusFilter === "unavailable" && tour.available === 0);
    return matchSearch && matchDestination && matchStatus;
  });

  const destinations = [...new Set(tours.map((t) => t.destination))];

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="h-16 flex items-center justify-center text-2xl font-bold border-b border-gray-700">
          Travel<span className="text-yellow-400">VIP</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-4">
          <NavLink
            to="/list"
            className="flex items-center px-3 py-2 rounded hover:bg-gray-700"
          >
            <span className="ml-3">Danh sách Tour</span>
          </NavLink>
          <NavLink
            to="/add"
            className="flex items-center px-3 py-2 rounded hover:bg-gray-700"
          >
            <span className="ml-3 font-semibold">Thêm Tour</span>
          </NavLink>
        </nav>

        <div className="px-4 py-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center px-3 py-2 rounded hover:bg-red-600 bg-red-500 text-white w-full text-left"
          >
            🔒 <span className="ml-3">Đăng xuất</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 p-10 overflow-auto">
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-6">Danh sách Tour</h1>

          <div className="flex items-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Tìm kiếm theo tên..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 rounded w-1/3"
            />

            <select
              value={destinationFilter}
              onChange={(e) => setDestinationFilter(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">Tất cả Destination</option>
              {destinations.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">Tất cả trạng thái</option>
              <option value="available">Còn chỗ</option>
              <option value="unavailable">Hết chỗ</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border border-gray-300">#</th>
                  <th className="px-4 py-2 border border-gray-300">Name</th>
                  <th className="px-4 py-2 border border-gray-300">
                    Destination
                  </th>
                  <th className="px-4 py-2 border border-gray-300">Duration</th>
                  <th className="px-4 py-2 border border-gray-300">Price</th>
                  <th className="px-4 py-2 border border-gray-300">Image</th>
                  <th className="px-4 py-2 border border-gray-300">
                    Description
                  </th>
                  <th className="px-4 py-2 border border-gray-300">Active</th>
                  <th className="px-4 py-2 border border-gray-300">
                    Available
                  </th>
                  <th className="px-4 py-2 border border-gray-300">Handle</th>
                </tr>
              </thead>
              <tbody>
                {filteredTours.map((tour) => (
                  <tr key={tour.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border border-gray-300">
                      {tour.id}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {tour.name}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {tour.destination}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {tour.duration}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {tour.price}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      <img src={tour.image} alt={tour.name} width={100} />
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {tour.description}
                    </td>
                    <td className="px-4 py-2 border border-gray-300 text-center">
                      <button
                        onClick={() => handleToggleActive(tour.id, tour.active)}
                        className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                          tour.active ? "bg-green-500" : "bg-gray-400"
                        }`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                            tour.active ? "translate-x-6" : ""
                          }`}
                        ></div>
                      </button>
                    </td>

                    <td className="px-4 py-2 border border-gray-300">
                      {tour.available}
                    </td>

                    <td className="px-4 py-2 border border-gray-300 flex gap-2">
                      <button
                        className="px-3 py-1 bg-red-500 text-white rounded"
                        onClick={() => handleDelete(tour.id)}
                      >
                        Delete
                      </button>
                      <Link
                        to={`/edit/${tour.id}`}
                        className="px-3 py-1 bg-green-500 text-white rounded"
                      >
                        Sửa
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ListTour;
