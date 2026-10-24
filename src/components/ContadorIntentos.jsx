function ContadorIntentos({ intentos, maximo }) {
  const puntos = Array.from({ length: maximo }, (_, i) => i < intentos)

  return (
    <div className="contador">
      <span className="contador-etiqueta">INTENTOS</span>
      <div className="contador-puntos">
        {puntos.map((activo, i) => (
          <span key={i} className={activo ? 'punto-intento activo' : 'punto-intento'} />
        ))}
      </div>
      <span className="contador-numero">
        {intentos}/{maximo}
      </span>
    </div>
  )
}

export default ContadorIntentos
