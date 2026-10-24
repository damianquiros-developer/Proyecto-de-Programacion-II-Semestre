import Boton from './Boton'

function CampoRespuesta({ valor, onCambiar, onEnviar, deshabilitado }) {
  function manejarTecla(e) {
    if (e.key === 'Enter') onEnviar()
  }

  return (
    <div className="campo-respuesta">
      <label className="campo-input">
        <span className="prompt">&gt;</span>
        <input
          type="text"
          placeholder="Escribe tu respuesta..."
          value={valor}
          onChange={(e) => onCambiar(e.target.value)}
          onKeyDown={manejarTecla}
          disabled={deshabilitado}
        />
      </label>
      <Boton texto="Enviar" onClick={onEnviar} deshabilitado={deshabilitado} />
    </div>
  )
}

export default CampoRespuesta
