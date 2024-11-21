import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

// Navbar Component
function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">🏠 Inicio</Link></li>
        <li><Link to="/register">📝 Registro</Link></li>
        <li><Link to="/login">🔑 Inicio de sesión</Link></li>
        <li><Link to="/search-design">🔍 Buscar Diseño</Link></li>
        <li><Link to="/book-appointment">📅 Reservar Cita</Link></li>
        <li><Link to="/profile">👤 Perfil</Link></li>
        <li><Link to="/nail-care-tips">💡 Tips de Cuidado</Link></li>
        <li><Link to="/about-us">🤝 Conócenos</Link></li>
      </ul>
    </nav>
  );
}

// Home Component
function Home() {
  return (
    <div className="home-section">
    <div className="background-image"></div>
      <div className="hero-banner">
        <h1>💅 Bienvenida al Salón de Uñas 💅</h1>
        <p>El lugar donde tus uñas cobran vida con los diseños más modernos y elegantes.</p>
      </div>
      <div className="featured-section">
        <h2>💎 Lo Mejor de Nosotros 💎</h2>
        <p>Explora nuestros servicios de alta calidad y déjate consentir por nuestras expertas.</p>
      </div>
    </div>
  );
}

// Register Component
function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuario registrado:", form);
  };

  return (
    <div className="register-section">
      <h2>📝 Registro Rápido</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Correo Electrónico" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
        <button type="submit">Registrar ✨</button>
      </form>
      <p className="note">* Es rápido y sencillo, para que disfrutes nuestros servicios sin complicaciones.</p>
    </div>
  );
}

// Login Component
function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inicio de sesión:", form);
  };

  return (
    <div className="login-section">
      <h2>🔑 Inicio de Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Correo Electrónico" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
        <button type="submit">Iniciar Sesión 🚪</button>
      </form>
    </div>
  );
}

// SearchDesign Component
function SearchDesign() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Búsqueda de diseño:", search);
  };

  return (
    <div className="search-design-section">
      <h2>🔍 Búsqueda de Diseño</h2>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Buscar diseño" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit">Buscar 🎨</button>
      </form>
      <div className="design-images">
      <img src="nail-art-5653458_1280" alt="Diseño 1" />
      <img src="nail-art-5653459_1280" alt="Diseño 2" />
      </div>
    </div>
  );
}

// BookAppointment Component
function BookAppointment() {
  const [appointment, setAppointment] = useState({ date: "", time: "" });

  const handleChange = (e) => {
    setAppointment({ ...appointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cita reservada:", appointment);
  };

  return (
    <div className="appointment-section">
      <h2>📅 Reservar Cita</h2>
      <form onSubmit={handleSubmit}>
        <label>Fecha:</label>
        <input type="date" name="date" onChange={handleChange} required />
        <label>Hora:</label>
        <input type="time" name="time" onChange={handleChange} required />
        <button type="submit">Reservar 💅</button>
      </form>
      <div className="payment-info">
        <h3>Opciones de Pago:</h3>
        <p>Realiza tu pago de forma presencial y confiable con nuestras profesionales.</p>
      </div>
    </div>
  );
}

// Profile Component
function Profile() {
  return (
    <div className="profile-section">
      <h2>👤 Perfil de la Profesional</h2>
      <p>Conoce más sobre nuestras artistas, su experiencia, y mira fotos de trabajos anteriores.</p>
      <div className="professionals-list">
        <h3>Nuestras Expertas:</h3>
        <ul>
          <li><strong>Ana López</strong>: Especialista en uñas acrílicas y diseños artísticos.</li>
          <li><strong>María Pérez</strong>: Experta en manicuras minimalistas y tratamientos de spa para manos.</li>
          <li><strong>Luisa Gómez</strong>: Maestra en gel y decoración en 3D.</li>
        </ul>
      </div>
    </div>
  );
}

// NailCareTips Component Expandido
function NailCareTips() {
  return (
    <div className="nail-care-tips-section">
      <h2>💡 Tips para el Cuidado de Uñas</h2>
      <div className="tips-list">
        <div className="tip">
          <h4>Hidratación Diaria</h4>
          <p>Usa aceites naturales como el de almendra o jojoba para hidratar tus cutículas y prevenir uñas quebradizas.</p>
        </div>
        <div className="tip">
          <h4>Evita el Uso de Productos Químicos</h4>
          <p>Protege tus uñas cuando limpies con productos agresivos. Usa guantes de goma para mantenerlas seguras.</p>
        </div>
        <div className="tip">
          <h4>Lima en Una Sola Dirección</h4>
          <p>Para evitar que tus uñas se partan, siempre lima en una sola dirección, nunca de un lado a otro.</p>
        </div>
        <div className="tip">
          <h4>Descanso de Esmaltes</h4>
          <p>Deja que tus uñas respiren al menos un día a la semana sin esmalte para mantenerlas saludables.</p>
        </div>
        <div className="tip">
          <h4>Alimentación Balanceada</h4>
          <p>Consume alimentos ricos en biotina, como almendras y huevos, para fortalecer tus uñas desde adentro.</p>
        </div>
      </div>
    </div>
  );
}

// AboutUs Component
function AboutUs() {
  return (
    <div className="about-us-section">
      <h2>🤝 Conócenos</h2>
      <p>En nuestro Salón de Uñas, nuestra misión es brindarte una experiencia única y memorable. Desde nuestros comienzos, hemos trabajado con pasión para ofrecer diseños de alta calidad y un ambiente relajante y acogedor.</p>
      <h3>Nuestra Historia:</h3>
      <p>Fundado en 2010, nuestro salón comenzó como un pequeño espacio de belleza en el corazón de la ciudad. Con el tiempo y gracias a la dedicación de nuestro talentoso equipo, nos hemos convertido en un destino favorito para amantes del nail art.</p>
    </div>
  );
}

// App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search-design" element={<SearchDesign />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/nail-care-tips" element={<NailCareTips />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
