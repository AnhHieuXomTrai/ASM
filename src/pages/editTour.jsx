import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
function EditTour() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    destination: "",
    duration: "",
    price: "",
    image: "",
    description: "",
    available: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/tours/${id}`).then((res) => {
      setForm(res.data);
    });
  }, [id]);

  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !form.name ||
      !form.destination ||
      !form.duration ||
      !form.price ||
      !form.image ||
      !form.description ||
      !form.available
    ) {
      return alert("Vui lòng nhập đầy đủ thông tin!");
    }

    await axios.put(`http://localhost:3000/tours/${id}`, {
      ...form,
      price: Number(form.price),
      available: Number(form.available),
    });

    alert("Cập nhật thành công!");
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
        <h1 className="text-xl font-semibold">Sửa tour</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="border p-2 w-full"
            name="name"
            placeholder="Tên tour"
            value={form.name}
            onChange={handleChange}
          />

          <select
            className="border p-2 w-full"
            name="destination"
            value={form.destination}
            onChange={handleChange}
          >
            <option value="#"></option>
            <option value="Tour nội địa">Tour nội địa</option>
            <option value="Tour quốc tế">Tour quốc tế</option>
          </select>

          <input
            className="border p-2 w-full"
            name="duration"
            placeholder="Thời gian"
            value={form.duration}
            onChange={handleChange}
          />

          <input
            className="border p-2 w-full"
            name="price"
            placeholder="Giá"
            type="number"
            value={form.price}
            onChange={handleChange}
          />

          <input
            className="border p-2 w-full"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
          />

          <textarea
            className="border p-2 w-full"
            name="description"
            placeholder="Mô tả"
            value={form.description}
            onChange={handleChange}
          ></textarea>

          <input
            className="border p-2 w-full"
            name="available"
            placeholder="Số lượng"
            type="number"
            value={form.available}
            onChange={handleChange}
          />

          <button className="px-4 py-2 bg-green-600 text-white rounded">
            Cập nhật
          </button>
        </form>
      </main>
    </div>
  );
}
export default EditTour;
