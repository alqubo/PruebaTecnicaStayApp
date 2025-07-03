import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  cards: {
    gap: 12,
  },

  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#8d8d8d',
    letterSpacing: 1,
    marginBottom: 4,
  },
  cardValue: { fontSize: 14 },
});
