const retos = [
  {
    id: 1,
    tipo: 'texto',
    etiqueta: 'FIREWALL',
    capa: 'CAPA 1 · FIREWALL',
    icono: 'shield',
    titulo: 'Firewall de acceso',
    consigna:
      'El firewall pide un código numérico para dejarte pasar. Interceptaste la clave, pero está escrita en binario. Conviértela a número decimal y escríbela.',
    comentario: '// clave interceptada (binario)',
    dato: '1101',
    respuesta: '13',
    pista: 'Cada posición vale 8, 4, 2 y 1 (de izquierda a derecha). Suma solo los valores donde hay un 1.',
    exito: '¡Correcto! 1101 en binario es 13. El firewall se desactivó.',
  },
  {
    id: 2,
    tipo: 'texto',
    etiqueta: 'CIFRADO',
    capa: 'CAPA 2 · SERVIDOR DE CIFRADO',
    icono: 'key',
    titulo: 'Cifrado César',
    consigna:
      'CERBERUS cifró la contraseña del servidor moviendo cada letra 3 posiciones hacia adelante en el abecedario. Descífrala para abrir el servidor.',
    comentario: '// contraseña cifrada (+3)',
    dato: 'KDFNHU',
    respuesta: 'HACKER',
    pista: 'Retrocede cada letra 3 posiciones en el abecedario: K → H, D → A, F → C...',
    exito: '¡Correcto! La contraseña era HACKER. El servidor de cifrado está abierto.',
  },
  {
    id: 3,
    tipo: 'opciones',
    etiqueta: 'NÚCLEO',
    capa: 'CAPA 3 · NÚCLEO',
    icono: 'cpu',
    titulo: 'Llave del núcleo',
    consigna:
      'La llave del núcleo es una secuencia de números que sigue un patrón. Descubre cuál es el número que falta para abrirlo.',
    comentario: '// secuencia de la llave',
    dato: '3 → 6 → 12 → 24 → ??',
    opciones: [
      { letra: 'A', texto: '36' },
      { letra: 'B', texto: '48' },
      { letra: 'C', texto: '30' },
      { letra: 'D', texto: '42' },
    ],
    respuesta: '48',
    pista: 'Fíjate qué operación convierte cada número en el siguiente.',
    exito: '¡Correcto! Cada número es el doble del anterior. El núcleo quedó desactivado.',
  },
]

export default retos
