import { View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";

import { styles } from "../style/Styles";
import { useContext, useEffect, useState } from "react";
import { theme } from "../style/Themes";
import { getAttributes, getQuestions } from "../utils/Backend";
import { Context } from "../utils/Contexts";


function Dropdown(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        getAttributes(props.tag, setData)
    }, [])

    let formatted_data = data.map( item => {
            return {key: String(item["id"]), value: String(item[props.dropdownName])}
        }
    )

    formatted_data.unshift({key: 0, value: "همه"})
    return (
        <SelectList
            search={false}
            placeholder={props.placeholder}
            inputStyles={{color: theme.colors.onBackground}}
            dropdownTextStyles={{color: theme.colors.onBackground}}
            arrowicon={<Icon name="chevron-down" size={25} color={theme.colors.primary} />} 
            boxStyles={styles.filter}
            dropdownStyles={styles.filterDropdown}
            data={formatted_data}
            setSelected={props.setSelected}
            save="key"
        />
    )
}


export default function FilterScreen() {
    let [type, setType] = useState("0")
    let [difficulty, setDifficulty] = useState("0")
    let [chapter, setChapter] = useState("0")

    const context = useContext(Context)

    useEffect(() => {
        getQuestions(
            context.setQuestions,
            {
                "question_type_id": type,
                "difficulty_level_id": difficulty,
                "chapter_id": chapter
            })
    }, [type, difficulty, chapter])

    return (
        <View style={styles.filtersContainer}>
            <Dropdown setSelected={setType} tag="types" dropdownName="question_type" placeholder="یک نوع سوال را انتخاب کنید"/>
            <Dropdown setSelected={setDifficulty} tag="difficulties" dropdownName="level_name" placeholder="یک درجه سختی را انتخاب کنید"/>
            <Dropdown setSelected={setChapter} tag="chapters" dropdownName="chapter_number" placeholder="شماره یک درس را انتخاب کنید"/>
        </View>
    );
}