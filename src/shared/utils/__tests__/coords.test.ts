import { formatCoords } from '../coords.utils.ts';

describe('Coords Utils', () => {
  describe('formatCoords', () => {
    it('should format positive lat/lng as N/E', () => {
      const result = formatCoords(45.123456, 12.987654);
      expect(result).toBe('45.1235° N, 12.9877° E');
    });

    it('should format negative lat/lng as S/W', () => {
      const result = formatCoords(-23.456789, -76.54321);
      expect(result).toBe('23.4568° S, 76.5432° W');
    });

    it('should format mixed lat/lng correctly', () => {
      const result = formatCoords(-15.1, 77.7);
      expect(result).toBe('15.1000° S, 77.7000° E');
    });

    it('should handle zero values correctly', () => {
      const result = formatCoords(0, 0);
      expect(result).toBe('0.0000° N, 0.0000° E');
    });
  });
});
