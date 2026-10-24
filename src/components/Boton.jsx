function Boton({ texto, tipo = 'primario', onClick, deshabilitado = false }) {
  return (
    <button className={`boton boton-${tipo}`} onClick={onClick} disabled={deshabilitado}>
      {texto}
    </button>
  )
}

export default Boton
