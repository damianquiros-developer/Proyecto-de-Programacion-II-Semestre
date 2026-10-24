import Boton from './Boton'
import Icono from './Icono'

function PantallaResultado({ tipo, titulo, texto, datos, onReiniciar }) {
  const liberado = tipo === 'liberado'

  return (
    <section className={`tarjeta resultado resultado-${tipo}`}>
      <div className="resultado-icono">
        <Icono nombre={liberado ? 'unlock' : 'lock'} tamano={44} />
      </div>

      <h1>{titulo}</h1>
      <p className="resultado-texto">{texto}</p>

      <div className="datos">
        {datos.map((dato) => (
          <div key={dato.etiqueta} className="dato-resultado">
            <strong>{dato.valor}</strong>
            <span>{dato.etiqueta}</span>
          </div>
        ))}
      </div>

      <Boton
        texto={liberado ? 'Jugar de nuevo' : 'Reiniciar escape room'}
        tipo={liberado ? 'primario' : 'peligro'}
        onClick={onReiniciar}
      />
    </section>
  )
}

export default PantallaResultado
