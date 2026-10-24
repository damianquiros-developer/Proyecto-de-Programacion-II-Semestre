import Boton from './Boton'
import Icono from './Icono'

function Pista({ texto, visible, onAlternar }) {
  return (
    <>
      <div className="acciones">
        <Boton texto={visible ? 'Ocultar pista' : 'Mostrar pista'} tipo="pista" onClick={onAlternar} />
        <span className="nota">Las pistas no gastan intentos.</span>
      </div>

      {visible && (
        <div className="pista">
          <p className="pista-titulo">
            <Icono nombre="bulb" />
            PISTA
          </p>
          <p>{texto}</p>
        </div>
      )}
    </>
  )
}

export default Pista
