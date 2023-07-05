import { View, TouchableOpacity } from "react-native";
import { Surface, Text } from "react-native-paper";
import { TabScreen, Tabs } from "react-native-paper-tabs";

import { styles } from "../style/Styles";
import { theme } from "../style/Themes";
import { useState } from "react";


function Option(props) {
    const [bgColor, setBgColor] = useState(theme.colors.surfaceVariant)
    return (
            <TouchableOpacity 
                style={[styles.option, styles.surface, {backgroundColor: bgColor}]}
                onPress={() => {
                    if (props.is_correct) {
                        setBgColor("green")
                    } else {
                        setBgColor(theme.colors.errorContainer)
                    }
                }}>
                <Text style={styles.optionText} theme={theme}>{props.text}</Text>
            </TouchableOpacity>
    )
}


function SolvingPage(props) {
    let question = props.question
    let options = [
        [question.option_1, false],
        [question.option_2, false], 
        [question.option_3, false], 
        [question.option_4, false]
    ]

    options[question.correct_option - 1][1] = true

    return (
        <View style={[styles.container, styles.SolvingScreenContainer]}>
            <Surface theme={theme} style={[styles.questionTextContainer, styles.surface]}>
                    <Text style={styles.questionText} theme={theme}>{question.text}</Text>
            </Surface>
            <View style={styles.optionContainer}>
                {
                    options.map((item, index) =>  <Option text={item[0]} is_correct={item[1]} style={[styles.surface, styles.option]} key={index}/>)
                }
            </View>
        </View>
        
    );
}

export default function SolvingScreen({ route }) {
    const questions = route.params.questions
    const questionIndex = route.params.questionIndex
    return (
        <View style={styles.container}>
            <Tabs style={styles.tabNavigator} theme={theme} mode="scrollable" defaultIndex={questionIndex}>
                {
                    route.params.questions.map(item => {
                            let index = questions.indexOf(item)
                            let question = questions[Number(index)]
                            return (
                                <TabScreen key={item.id} label={String(index + 1)}>
                                    <SolvingPage question={question}/>
                                </TabScreen>
                            )
                        }
                    )
                }
            </Tabs>
        </View>
    );
}