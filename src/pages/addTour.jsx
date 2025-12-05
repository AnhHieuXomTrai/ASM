import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function AddTour() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    destination: "Sapa",
    duration: "",
    price: "",
    image: "",
    description: "",
    available: "",
  });

  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !form.name ||
      !form.duration ||
      !form.price ||
      !form.image ||
      !form.description ||
      !form.available
    ) {
      return alert("Vui lòng nhập đầy đủ thông tin!");
    }

    await axios.post("http://localhost:3000/tours", {
      ...form,
      price: Number(form.price),
      available: Number(form.available),
    });

    alert("Thêm thành công!");
    navigate("/list");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

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
            <span className="ml-3">Đăng xuất</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 p-10 overflow-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Thêm Tour Mới</h1>

        <div className="bg-white shadow rounded-lg p-6 max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="border p-3 w-full rounded"
              name="name"
              placeholder="Tên tour"
              onChange={handleChange}
            />

            <select
              className="border p-3 w-full rounded"
              name="destination"
              onChange={handleChange}
            >
              <option value="#"></option>
              <option value="Tour nội địa">Tour nội địa</option>
              <option value="Tour quốc tế">Tour quốc tế</option>
            </select>

            <input
              className="border p-3 w-full rounded"
              name="duration"
              placeholder="Thời gian"
              onChange={handleChange}
            />

            <input
              className="border p-3 w-full rounded"
              name="price"
              placeholder="Giá"
              type="number"
              onChange={handleChange}
            />

            <input
              className="border p-3 w-full rounded"
              name="image"
              placeholder="Image URL"
              onChange={handleChange}
            />

            <textarea
              className="border p-3 w-full rounded h-28"
              name="description"
              placeholder="Mô tả"
              onChange={handleChange}
            ></textarea>

            <input
              className="border p-3 w-full rounded"
              name="available"
              placeholder="Số lượng"
              type="number"
              onChange={handleChange}
            />

            <button className="px-6 py-3 bg-blue-500 hover:bg-yellow-400 text-black font-semibold rounded">
              Thêm
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AddTour;
