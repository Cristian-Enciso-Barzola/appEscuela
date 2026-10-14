import Navbar from './components/Navbar/Navbar';
import AlumnoCard from './components/AlumnoCard';
import Contador from './components/Contador/Contador';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      {/* 1. Insertamos el Navbar en la parte superior */}
      <Navbar />

      {/* 2. Contenedor principal de la página */}
      <div className="container">
        <h2 className="mb-4">Directorio de Alumnos</h2>
        
        {/* Componente Contador interactivo (Guía #3) */}
        <Contador />

        <div className="row">
          <AlumnoCard
            nombre="Daniel Puccio"
            carrera="Desarrollo de Software"
            estadoInicial="Matriculado"
          />
          <AlumnoCard
            nombre="Maria Perez"
            carrera="Diseño Gráfico"
            estadoInicial="Inactivo"
          />
          <AlumnoCard
            nombre="Carlos Mendoza"
            carrera="Administración Industrial"
            estadoInicial="Matriculado"
          />
          <AlumnoCard
            nombre="Ana Torres"
            carrera="Redes y Seguridad"
            estadoInicial="Matriculado"
          />
          <AlumnoCard
            nombre="Jorge Quispe"
            carrera="Mecatrónica Industrial"
            estadoInicial="Inactivo"
          />
          <AlumnoCard
            nombre="Lucía Huamán"
            carrera="Ingeniería de Software con IA"
            estadoInicial="Matriculado"
          />
          <AlumnoCard
            nombre="Miguel Ángel Ramos"
            carrera="Soporte y Mantenimiento de Equipos"
            estadoInicial="Inactivo"
          />
          <AlumnoCard
            nombre="Rosa Fernández"
            carrera="Administración de Empresas"
            estadoInicial="Matriculado"
          />
          <AlumnoCard
            nombre="David Silva"
            carrera="Diseño y Desarrollo Web"
            estadoInicial="Matriculado"
          />
        </div>
      </div>
    </>
  );
}

export default App;