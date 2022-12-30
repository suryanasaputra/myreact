import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mahasiswa from "./routes/Mahasiswa";
import ProfileMahasiswa from "./routes/ProfileMahasiswa";
import Example from "./routes/Example";

function App() {
  return (
    <div className="App">
      <h1>Mahasiswa Sistem Informasi</h1>
      <h2>Universitas Sosro</h2>

      <Router>
        <Routes>
          <Route exact path="/" element={<Example />} />
          <Route exact path="/mahasiswa" element={<Mahasiswa />} />
          <Route path="/mahasiswa/:id" element={<ProfileMahasiswa />} />
          <Route exact path="/example" element={<Example />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
