const Home = () => {
    return (
      <div className="home-container">
        <h1>Bienvenido a Soluciones y tak ;D</h1>
        <p>Una solución para gestionar tu inventario de productos.</p>
  
        <Link to="/main" className="link-button">Ver productos</Link>
        <Link to="/about" className="link-button">Acerca de</Link>
      </div>
    );
  };