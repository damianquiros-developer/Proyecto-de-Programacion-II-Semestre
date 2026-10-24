import Icono from './Icono'

const iconos = {
  exito: 'check',
  error: 'x',
  alerta: 'alert',
}

function Mensaje({ tipo, titulo, texto }) {
  return (
    <div className={`mensaje mensaje-${tipo}`}>
      <span className="mensaje-icono">
        <Icono nombre={iconos[tipo]} tamano={18} />
      </span>
      <div>
        <p className="mensaje-titulo">{titulo}</p>
        <p className="mensaje-texto">{texto}</p>
      </div>
    </div>
  )
}

export default Mensaje
