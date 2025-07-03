export const formatCoords = (lat: number, lng: number): string => {
  const latDir = lat >= 0 ? 'N' : 'S';
  const lngDir = lng >= 0 ? 'E' : 'W';

  const formattedLat = Math.abs(lat).toFixed(4);
  const formattedLng = Math.abs(lng).toFixed(4);

  return `${formattedLat}° ${latDir}, ${formattedLng}° ${lngDir}`;
};
