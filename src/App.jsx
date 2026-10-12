import Navbar from './components/Navbar/Navbar';
import AlumnoCard from './components/AlumnoCard';

function App() {
  return (
    <>
      {/* 1. Insertamos el Navbar en la parte superior */}
      <Navbar />

      {/* 2. Contenedor principal de la página */}
      <div className="container">
        <h2 className="mb-4">Directorio de Alumnos</h2>
        
        <div className="row">
          {/* Tarjetas anteriores */}
          <AlumnoCard
            nombre="Daniel Puccio"
            carrera="Desarrollo de Software"
            estado="Matriculado"
          />
          <AlumnoCard
            nombre="Maria Perez"
            carrera="Diseño Gráfico"
            estado="Inactivo"
          />
          <AlumnoCard
            nombre="Carlos Mendoza"
            carrera="Administración Industrial"
            estado="Matriculado"
          />
          <AlumnoCard
            nombre="Ana Torres"
            carrera="Redes y Seguridad"
            estado="Matriculado"
          />
          <AlumnoCard
            nombre="Jorge Quispe"
            carrera="Mecatrónica Industrial"
            estado="Inactivo"
          />

          {/* Nuevas tarjetas adicionales */}
          <AlumnoCard
            nombre="Lucía Huamán"
            carrera="Ingeniería de Software con IA"
            estado="Matriculado"
          />
          <AlumnoCard
            nombre="Miguel Ángel Ramos"
            carrera="Soporte y Mantenimiento de Equipos"
            estado="Inactivo"
          />
          <AlumnoCard
            nombre="Rosa Fernández"
            carrera="Administración de Empresas"
            estado="Matriculado"
          />
          <AlumnoCard
            nombre="David Silva"
            carrera="Diseño y Desarrollo Web"
            estado="Matriculado"
          />
        </div>
      </div>
    </>
  );
}

export default App;