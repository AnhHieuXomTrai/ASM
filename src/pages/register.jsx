import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.username || !form.email || !form.password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/register", form);

      alert("Đăng ký thành công!");
      navigate("/login");
    } catch (error) {
      if (error.response) {
        alert(error.response.data);
      } else {
        alert("Không thể kết nối server!");
      }
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-semibold">Đăng ký</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="border p-2 w-full"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <input
          className="border p-2 w-full"
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
        />
        <input
          className="border p-2 w-full"
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />

        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Đăng ký
        </button>
      </form>
    </div>
  );
}

export default Register;
