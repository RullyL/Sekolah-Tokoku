// useState(session) adalah wadah untuk menyimpan data yang bisa diubah saat dibutuhkan 
// useEffect untuk menjalankan side effect (fetching)


import Login from "./Pages/Login/Login"
import Home from "./Pages/Home/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Keranjang from "./Pages/Keranjang/Keranjang";
import Daftar from "./Pages/Daftar/Daftar";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/keranjang" element={<Keranjang />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
