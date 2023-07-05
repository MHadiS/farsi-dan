import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { Button, Menu, PaperProvider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./screens/HomeScreen";
import FilterScreen from "./screens/FilterScreen";
import GuideScreen from "./screens/GuideScreen";
import SolvingScreen from "./screens/SolvingScreen";
import { testConnection } from "./utils/Backend";
import { Context } from "./utils/Contexts";
import { theme } from "./style/Themes";
import ContactUsScreen from "./screens/ContactUsScreen";
import AboutUsScreen from "./screens/AboutUsScreen";


const Stack = createNativeStackNavigator();


function MyMenu(props) {
    const context = useContext(Context)
    const [visible, setVisible] = useState(false)
    const navigation = useNavigation()
    const items = [
        ["guide", "راهنما"], 
        ["aboutUs", "درباره ی ما"], 
        ["contactUs", "ارتباط با ما"]
    ]

    return (
            <Menu 
                theme={theme}
                visible={visible}
                onDismiss={() => setVisible(false)}
                anchor={
                    <Button onPress={() => setVisible(true)}>
                        <Icon
                        name="dots-vertical"
                        size={25}
                        color={theme.colors.onPrimaryContainer}
                        />
                    </Button>}>
                {
                    items.map( (item, index) => (
                            <Menu.Item
                             key={index}
                             theme={theme}
                             onPress={() => {
                                     navigation.navigate(item[0])
                                     setVisible(false)
                                 }} 
                             title={item[1]}
                            />
                        )
                    )
                }
                <Menu.Item
                 theme={theme}
                 title="تغییر رنگ بندی"
                 onPress={() => {
                    context.setThemeName(name => name == "dark" ? "light" : name)
                 }}
                />
            </Menu>
    );
}


export default function App() {    
    testConnection()
    const [themeName, setThemeName] = useState("dark")
    const [questions, setQuestions] = useState([])

    return (
        <PaperProvider theme={theme}>
            <Context.Provider value={{questions, setQuestions, themeName, setThemeName}}>
                <NavigationContainer>
                    <Stack.Navigator 
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: theme.colors.primaryContainer
                        },
                        headerTitleStyle: {
                            fontSize: 20,
                            color: theme.colors.onSurfaceVariant
                        },
                        headerTintColor: theme.colors.onBackground,
                        headerTitleAlign: 'right',
                        

                    }}>
                        <Stack.Screen
                            name="home"
                            component={HomeScreen} 
                            options={{
                                        title: "فارسیدان نهم",
                                        headerLeft: () => <MyMenu/>
                                    }}
                        />
                        <Stack.Screen name="filter" component={FilterScreen} options={{title: "فیلتر"}}/>
                        <Stack.Screen name="solving" component={SolvingScreen} options={{title: "حل سوال"}}/>
                        <Stack.Screen name="guide" component={GuideScreen} options={{title: "راهنما"}}/>
                        <Stack.Screen name="aboutUs" component={AboutUsScreen} options={{title: "درباره ی ما"}}/>
                        <Stack.Screen name="contactUs" component={ContactUsScreen} options={{title: "اتباط با ما"}}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Context.Provider>
        </PaperProvider>
    );
}