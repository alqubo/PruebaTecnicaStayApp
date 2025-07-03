import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#e5e5e5',
    borderWidth: 1,
    borderRadius: 12,
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nameWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  childName: {
    fontWeight: 'normal',
  },

  coords: {
    fontSize: 14,
  },

  childsContainer: {
    overflow: 'hidden',
    marginTop: 6,
  },

  childsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    paddingHorizontal: 8,
  },
});
