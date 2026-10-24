import Icono from './Icono'

function TarjetaReto({ reto, numero, total, children }) {
  return (
    <section className="tarjeta tarjeta-reto">
      <div className="tarjeta-cabecera">
        <span className="etiqueta-reto">
          <Icono nombre={reto.icono} />
          RETO 0{numero} / 0{total}
        </span>
        <span className="capa">{reto.capa}</span>
      </div>

      <h2>{reto.titulo}</h2>
      <p className="consigna">{reto.consigna}</p>

      <div className="bloque-codigo">
        <p className="comentario">{reto.comentario}</p>
        <p className="dato">{reto.dato}</p>
      </div>

      {children}
    </section>
  )
}

export default TarjetaReto
