import PasoProgreso from './PasoProgreso'

function BarraProgreso({ retos, retoActual }) {
  return (
    <div className="barra-progreso">
      {retos.map((reto, i) => {
        let estado = 'pendiente'
        if (i < retoActual) estado = 'completado'
        else if (i === retoActual) estado = 'activo'

        return <PasoProgreso key={reto.id} numero={i + 1} etiqueta={reto.etiqueta} estado={estado} />
      })}
    </div>
  )
}

export default BarraProgreso
