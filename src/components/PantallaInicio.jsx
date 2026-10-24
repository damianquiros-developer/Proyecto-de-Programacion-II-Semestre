import Boton from './Boton'
import Icono from './Icono'

function PantallaInicio({ historia, registro, reglas, onIniciar }) {
  return (
    <section className="inicio">
      <p className="alerta">
        <Icono nombre="alert" />
        ALERTA DE SEGURIDAD · REGISTRO NACIONAL
      </p>

      <h1 className="titulo-principal">
        UN HACKER QUEDÓ
        <br />
        ATRAPADO EN EL SISTEMA
      </h1>

      <div className="terminal">
        <div className="terminal-barra">
          <span className="circulo rojo" />
          <span className="circulo ambar" />
          <span className="circulo champagne" />
          <span className="terminal-ruta">
            CerberusSecuritySystem@RegistroNacional.co.cr-main-$securityMain~entrada
          </span>
        </div>

        <div className="terminal-cuerpo">
          <p>{historia}</p>
          <div className="registro">
            {registro.map((linea) => (
              <p key={linea.texto} className={`texto-${linea.color}`}>
                &gt; {linea.texto}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="reglas">
        {reglas.map((regla) => (
          <div key={regla.titulo} className="regla">
            <p className={`regla-titulo texto-${regla.color}`}>
              <Icono nombre={regla.icono} tamano={18} />
              {regla.titulo}
            </p>
            <p>{regla.texto}</p>
          </div>
        ))}
      </div>

      <Boton texto="Iniciar hackeo →" onClick={onIniciar} />
    </section>
  )
}

export default PantallaInicio
