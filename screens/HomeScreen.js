import { PaperProvider, Button, Text } from 'react-native-paper';
import { View } from 'react-native';
import { Tabs, TabScreen } from 'react-native-paper-tabs';

import QuestionsScreen from './QuestionsScreen';
import { theme } from '../style/Themes';
import { styles } from '../style/Styles'


function ComingSoon(props) {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{fontSize: 30, color: theme.colors.onPrimaryContainer}} theme={theme}>در حال ساخت</Text>
    </View>
  );
}


export default function HomeScreen(props) {
  // home screen with tab navigation
  return (
      <PaperProvider>
        <View style={styles.container}>
          <Tabs theme={theme} style={styles.tabNavigator} defaultIndex={1}>
            <TabScreen label='آزمون'>
              <ComingSoon/>
            </TabScreen>
        
            <TabScreen label='سوالات'>
              <QuestionsScreen/>
            </TabScreen>

            <TabScreen label='درسنامه'>
              <ComingSoon/>
            </TabScreen>
          </Tabs>
        </View>
      </PaperProvider>
  );
}

