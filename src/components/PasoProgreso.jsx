import Icono from './Icono'

function PasoProgreso({ numero, etiqueta, estado }) {
  return (
    <div className={`paso paso-${estado}`}>
      <span className="paso-numero">
        {estado === 'completado' ? <Icono nombre="check" tamano={14} /> : `0${numero}`}
      </span>
      <span className="paso-etiqueta">{etiqueta}</span>
    </div>
  )
}

export default PasoProgreso
