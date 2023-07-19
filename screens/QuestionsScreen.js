import { View , ScrollView, TouchableOpacity, Image, FlatList} from "react-native";
import { Text , Card, FAB, Chip} from "react-native-paper";
import { useEffect, useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../style/Styles";
import { theme } from "../style/Themes";
import { getQuestions, id_to_text } from "../utils/Backend";
import { Context } from "../utils/Contexts";


function Label(props) {
    // questions labels
    const [label, setLabel] = useState("")

    tags = {
        difficulties: "level_name",
        types: "question_type",
        chapters: "chapter_number"
    }

    id_to_text(
        props.tag, 
        props.id,
        tags[props.tag],
        setLabel
    )

    return (
        <Chip style={styles.label} size={20} theme={theme}> {(props.tag == "chapters" ? "درس " : "") + label} </Chip>
    );
}


function Question(props) {
    // a question component
    const navigator = useNavigation()
    let question = props.questions[props.questionIndex]

    let labels = [
        {tag: "difficulties", id: question.difficulty_level_id},
        {tag: "chapters", id: question.chapter_id},
        {tag: "types", id: question.question_type_id}
    ]

    return (
        <TouchableOpacity onPress={() => {
            // navigate to SolvingScreen to solve the question
            navigator.navigate("solving", {questions: props.questions, questionIndex: props.questionIndex})}
        }>
            <Card theme={theme} style={styles.questionCard}>
                <View>
                    <Card.Title
                        title={question.title}
                        titleStyle={styles.questionCardTitle}
                        subtitle={question.text}
                        subtitleStyle={styles.questionCardSubtitle}
                        theme={theme}
                    />

                    <Card.Content style={styles.questionCardContent}>
                        
                        <View style={styles.labelSection}>
                            {
                                labels.map(
                                    (item, index) => <Label key={index} {...item}/>
                                )
                            }
                        </View>
                    </Card.Content>
                </View>
            </Card>
        </TouchableOpacity>
    )
}


export default function QuestionsScreen(props) {
    const navigator = useNavigation()
    const context = useContext(Context)

    useEffect(() => {
        getQuestions(context.setQuestions)  // load the questions when QuestionScreen is loaded
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                {
                    context.questions.map((item, index) => {
                        return <Question 
                                key={item.id} 
                                questions={context.questions}
                                questionIndex={index}/>
                        }
                    )
                }

            </ScrollView>

            <FAB style={styles.fab} icon="magnify" theme={theme} onPress={() => navigator.navigate("filter")}/>
        </View>
    );
}
