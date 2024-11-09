import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // navegación
import TableMain from '../components/TableMain'; // TableMain
import LoaderAllItems from '../services/LoaderAllItems'; // API
import './styles/main.css'; // Estilo

const Main = () => {
  const params = useParams(); L
  const url = `http://localhost:3001/brakes`; //url API
  const id = params.id; // filtrar datos
  const [cleanDataDetail, setCleanDataDetail] = useState([]);

  // useEffect para cargar los datos de la API cuando el componente se monta o el id cambia
  useEffect(() => {
    LoaderAllItems(setCleanDataDetail, url, id);
  }, [id, url]);

  return (
    <div className="main-container">
      <h1>Interfaz SBS - Detalles del Producto</h1>

      {/*regresar a la página de inicio */}
      <Link to="/" className="link-back">Volver a la página de inicio</Link>

      {}
      <TableMain data={cleanDataDetail} />
    </div>
  );
};

export default Main;
