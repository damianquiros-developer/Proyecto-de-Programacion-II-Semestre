import Icono from './Icono'
import Boton from './Boton'
import ContadorIntentos from './ContadorIntentos'

function Encabezado({ titulo, intentos, onReiniciar, mostrarAcciones }) {
  return (
    <header className="encabezado">
      <div className="logo">
        <Icono nombre="terminal" tamano={24} />
        <span className="logo-titulo">{titulo}</span>
        <span className="sello-claude">
          Seguridad potenciada por Claude Code
          <svg width="22" height="16" viewBox="0 0 22 16">
            <path
              fill="currentColor"
              d="M2 0H20V5H22V9H20V12H19V16H17V12H15V16H13V12H9V16H7V12H5V16H3V12H2V9H0V5H2Z"
            />
            <path d="M5.5 4L8 5.75L5.5 7.5" stroke="#0b0a08" strokeWidth="1.4" fill="none" />
            <path d="M16.5 4L14 5.75L16.5 7.5" stroke="#0b0a08" strokeWidth="1.4" fill="none" />
          </svg>
        </span>
      </div>

      {mostrarAcciones ? (
        <div className="encabezado-acciones">
          <ContadorIntentos intentos={intentos} maximo={3} />
          <Boton texto="Reiniciar" tipo="secundario" onClick={onReiniciar} />
        </div>
      ) : (
        <p className="estado-sesion">
          <span className="punto-estado" />
          SESIÓN: DAMIAN &nbsp;·&nbsp; ESTADO: ATRAPADO
        </p>
      )}
    </header>
  )
}

export default Encabezado
