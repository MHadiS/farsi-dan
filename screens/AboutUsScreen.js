import { ScrollView } from "react-native";
import Markdown from "react-native-markdown-display";

import { markdownStyle, styles } from "../style/Styles";
import { ABOUT_US } from "../utils/Docs";

export default function AboutUsScreen() {
    // load the 'about us' data in utils/Doc.js
    return (
        <ScrollView style={styles.container}>
                <Markdown style={markdownStyle}>
                    {ABOUT_US}
                </Markdown>
        </ScrollView>
    );
}