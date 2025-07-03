import { DestinationDto } from './dto/destination.dto.ts';
import { API_URL } from '../../shared/config/const.ts';

export const DestinationApi = {
  fetchAll: async (): Promise<DestinationDto[]> => {
    // Simulate a delay to view skeleton loading
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      const response = await fetch(
        `${API_URL}/establishments/destinations?apikey=4ef1c773b26fea71a6638c948dab3bb1`,
      );
      if (!response.ok) {
        throw new Error('Error al obtener destinos');
      }

      const data = await response.json();
      if (!data || !data.success) {
        console.error('Error en la respuesta del servidor', data.errors);
        return [];
      }

      return data.data as DestinationDto[];
    } catch (err) {
      console.error(err);
      return [];
    }
  },
};
