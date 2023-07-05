import { StyleSheet } from 'react-native';
import { theme } from './Themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  questionCardTitle: {
    textAlign: "right",
    fontSize: 20,
    color: theme.colors.onSurface
  },

  questionCard: {
    marginVertical: "3%",
    marginHorizontal: "3%",
    paddingTop: "3%"
  },

  questionCardSubtitle: {
    textAlign: "right",
    marginVertical: "3%",
    marginBottom: "5%",
    color: theme.colors.onSurface
  },

  labelSection: {
    flexDirection: "row",
    justifyContent: 'flex-end',
    columnGap: "12%",
    rowGap: "10%",
    marginBottom: 12,
    flexWrap: 'wrap'
  },

  fab: {
    position: 'absolute',
    margin: 16,
    left: 0,
    bottom: 0,
  },

  filtersContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  filter: {
    marginTop: "8%",
    marginHorizontal: "3%",
    borderColor: theme.colors.outline
  },

  filterDropdown: {
    marginHorizontal: "3%"
  },

  SolvingScreenContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    margin: "4%"
  },

  surface: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },

  questionTextContainer: {
    flex: 1,
    padding: 8,
    height: 80,
    width: "100%",
    marginVertical: "5%"
  },
  
  questionText: {
    textAlign: "center",
    fontSize: 20
  },

  optionContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: "space-around"
  },

  option: {
    padding: 10,
    width: "49%",
    backgroundColor: theme.colors.surfaceVariant,
    color: theme.colors.onSurfaceVariant,
    height: "45%",
    justifyContent: "center",
    alignItems: "center"
  },

  optionText: {
    textAlign: "center",
    fontSize: 15
  },

  tabNavigator: {
    backgroundColor: theme.colors.onPrimary,
  },

  guide: {
    color: theme.colors.onBackground
  }
});

export const markdownStyle = StyleSheet.create({
  body: {
    color: theme.colors.onBackground,
  },

  hr: {
    marginVertical: 20,
    backgroundColor: theme.colors.outline
  },

  textgroup: { 
    textAlign: 'right',
    width: '95%'
  }, 

  heading1: {
    marginTop: 20,
  },
})