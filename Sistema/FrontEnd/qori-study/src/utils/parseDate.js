export const parseDate = (fechaISO) => {
  const fecha = new Date(fechaISO);
  const opciones = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  };
  const fechaLegible = fecha.toLocaleDateString('es-PE', opciones);

  // Extraer la parte de la cadena hasta la coma
  const fechaHastaComa = fechaLegible.split(',')[0];

  return fechaHastaComa;
};
