import { useState } from 'react'
import retos from './data/retos'
import { historia, registro, reglas } from './data/historia'
import Encabezado from './components/Encabezado'
import BarraProgreso from './components/BarraProgreso'
import TarjetaReto from './components/TarjetaReto'
import CampoRespuesta from './components/CampoRespuesta'
import OpcionRespuesta from './components/OpcionRespuesta'
import Mensaje from './components/Mensaje'
import Pista from './components/Pista'
import Boton from './components/Boton'
import PantallaInicio from './components/PantallaInicio'
import PantallaResultado from './components/PantallaResultado'
import './App.css'

const MAX_INTENTOS = 3

function App() {
  const [pantalla, setPantalla] = useState('inicio')
  const [retoActual, setRetoActual] = useState(0)
  const [intentos, setIntentos] = useState(MAX_INTENTOS)
  const [respuesta, setRespuesta] = useState('')
  const [mensaje, setMensaje] = useState(null)
  const [pistaVisible, setPistaVisible] = useState(false)
  const [resuelto, setResuelto] = useState(false)

  const reto = retos[retoActual]
  const esUltimoReto = retoActual === retos.length - 1

  function limpiarReto() {
    setRespuesta('')
    setMensaje(null)
    setPistaVisible(false)
    setResuelto(false)
  }

  function reiniciar() {
    limpiarReto()
    setRetoActual(0)
    setIntentos(MAX_INTENTOS)
    setPantalla('juego')
  }

  function validarRespuesta() {
    const intento = respuesta.trim()
    if (intento === '' || resuelto) return

    if (intento.toUpperCase() === reto.respuesta) {
      setResuelto(true)
      setMensaje({ tipo: 'exito', titulo: 'ACCESO CONCEDIDO', texto: reto.exito })
      return
    }

    const quedan = intentos - 1
    setIntentos(quedan)

    if (quedan === 0) {
      setPantalla('bloqueado')
      return
    }

    const textoIntentos = quedan === 1 ? 'te queda 1 intento' : `te quedan ${quedan} intentos`
    setMensaje({
      tipo: 'error',
      titulo: 'CÓDIGO INVÁLIDO',
      texto: `"${intento}" no es la clave. CERBERUS detectó el intento: ${textoIntentos}.`,
    })

    if (reto.tipo === 'opciones') setRespuesta('')
  }

  function elegirOpcion(texto) {
    if (!resuelto) setRespuesta(texto)
  }

  function siguienteReto() {
    if (esUltimoReto) {
      setPantalla('liberado')
      return
    }
    setRetoActual(retoActual + 1)
    limpiarReto()
  }

  return (
    <div className="app">
      <Encabezado
        titulo="PROTOCOLO CERBERUS"
        intentos={intentos}
        onReiniciar={reiniciar}
        mostrarAcciones={pantalla !== 'inicio'}
      />

      <main className="contenido">
        {pantalla === 'inicio' && (
          <PantallaInicio
            historia={historia}
            registro={registro}
            reglas={reglas}
            onIniciar={() => setPantalla('juego')}
          />
        )}

        {pantalla !== 'inicio' && (
          <BarraProgreso retos={retos} retoActual={resuelto ? retoActual + 1 : retoActual} />
        )}

        {pantalla === 'juego' && (
          <TarjetaReto reto={reto} numero={retoActual + 1} total={retos.length}>
            {reto.tipo === 'texto' ? (
              <CampoRespuesta
                valor={respuesta}
                onCambiar={setRespuesta}
                onEnviar={validarRespuesta}
                deshabilitado={resuelto}
              />
            ) : (
              <div className="opciones">
                {reto.opciones.map((opcion) => (
                  <OpcionRespuesta
                    key={opcion.letra}
                    letra={opcion.letra}
                    texto={opcion.texto}
                    seleccionada={respuesta === opcion.texto}
                    onSeleccionar={() => elegirOpcion(opcion.texto)}
                  />
                ))}
              </div>
            )}

            {mensaje && <Mensaje tipo={mensaje.tipo} titulo={mensaje.titulo} texto={mensaje.texto} />}

            {resuelto ? (
              <div className="acciones">
                <Boton
                  texto={esUltimoReto ? 'Salir del sistema →' : 'Siguiente reto →'}
                  onClick={siguienteReto}
                />
              </div>
            ) : (
              <>
                {reto.tipo === 'opciones' && (
                  <div className="acciones">
                    <Boton texto="Confirmar" onClick={validarRespuesta} deshabilitado={respuesta === ''} />
                  </div>
                )}
                <Pista
                  texto={reto.pista}
                  visible={pistaVisible}
                  onAlternar={() => setPistaVisible(!pistaVisible)}
                />
              </>
            )}
          </TarjetaReto>
        )}

        {pantalla === 'liberado' && (
          <PantallaResultado
            tipo="liberado"
            titulo="¡SISTEMA LIBERADO!"
            texto="Damian desactivó las 3 capas de seguridad de CERBERUS y salió del modo de protección antes de ser descubierto. ¡Escapaste del sistema!"
            datos={[
              { valor: `${retos.length}/${retos.length}`, etiqueta: 'RETOS SUPERADOS' },
              { valor: `${intentos}/${MAX_INTENTOS}`, etiqueta: 'INTENTOS RESTANTES' },
              { valor: 'LIBRE', etiqueta: 'ESTADO' },
            ]}
            onReiniciar={reiniciar}
          />
        )}

        {pantalla === 'bloqueado' && (
          <PantallaResultado
            tipo="bloqueado"
            titulo="ACCESO BLOQUEADO"
            texto="Te quedaste sin intentos. CERBERUS cerró todas las salidas y Damian sigue atrapado: será despedido y juzgado ante los funcionarios públicos. Los retos quedan deshabilitados hasta reiniciar."
            datos={[
              { valor: `0/${MAX_INTENTOS}`, etiqueta: 'INTENTOS' },
              { valor: `${retoActual + 1}/${retos.length}`, etiqueta: 'RETO ALCANZADO' },
              { valor: 'BLOQUEADO', etiqueta: 'ESTADO' },
            ]}
            onReiniciar={reiniciar}
          />
        )}
      </main>
    </div>
  )
}

export default App
