import { useState } from 'react';

const AlumnoCard = ({ nombre, carrera, estadoInicial }) => {
  // 1. Creamos el estado reactivo usando estadoInicial
  const [estado, setEstado] = useState(estadoInicial || 'Matriculado');
  
  // 2. Lógica para cambiar el color del badge según el estado actual
  const badgeColor = estado === 'Matriculado' ? 'bg-success' : 'bg-secondary';
  
  // 3. Función para alternar el estado
  const cambiarEstado = () => {
    if (estado === 'Matriculado') {
      setEstado('Inactivo');
    } else {
      setEstado('Matriculado');
    }
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h5 className="card-title text-primary">{nombre}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{carrera}</h6>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <span className={`badge ${badgeColor}`}>{estado}</span>
            <div>
              <button 
                className="btn btn-sm btn-outline-info me-2"
                onClick={cambiarEstado}
              >
                Cambiar Estado
              </button>
              <button className="btn btn-sm btn-outline-danger">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumnoCard;