import { ScrollView } from "react-native";
import Markdown from "react-native-markdown-display";

import { markdownStyle, styles } from "../style/Styles";
import { GUIDE } from "../utils/Docs";

export default function GuideScreen() {
    // load the 'guide' data in utils/Doc.js
    return (
        <ScrollView style={styles.container}>
                <Markdown style={markdownStyle}>
                    {GUIDE}
                </Markdown>
        </ScrollView>
    );
}