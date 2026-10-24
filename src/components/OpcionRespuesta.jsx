function OpcionRespuesta({ letra, texto, seleccionada, onSeleccionar }) {
  return (
    <button className={seleccionada ? 'opcion seleccionada' : 'opcion'} onClick={onSeleccionar}>
      <span className="opcion-letra">{letra}</span>
      <span className="opcion-texto">{texto}</span>
    </button>
  )
}

export default OpcionRespuesta
