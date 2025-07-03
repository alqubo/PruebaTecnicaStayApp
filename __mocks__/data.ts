import { Destination } from '../../domain/entities';

export const mockDestinations: Destination[] = [
  {
    id: 1,
    isTop: false,
    coords: {
      lat: 27.9202202,
      lng: -15.5474373,
    },
    name: 'Europa',
    photographs: ['1', '2'],
    numEstablishments: 10,
    children: [],
    isFinalNode: true,
  },
  {
    id: 2,
    isTop: false,
    coords: {
      lat: 20.9202202,
      lng: 1.5474373,
    },
    name: 'Asia',
    photographs: ['1', '2'],
    numEstablishments: 8,
    children: [
      {
        id: 3,
        isTop: true,
        coords: {
          lat: 20.9202202,
          lng: 1.5474373,
        },
        name: 'Japón',
        photographs: [],
        numEstablishments: 1,
        children: [],
        isFinalNode: true,
      },
    ],
    isFinalNode: false,
  },
  {
    id: 3,
    isTop: true,
    coords: {
      lat: 20.9202202,
      lng: 1.5474373,
    },
    name: 'Latam',
    photographs: ['2'],
    numEstablishments: 5,
    children: [],
    isFinalNode: true,
  },
];
