import { ScrollView } from "react-native";
import Markdown from "react-native-markdown-display";

import { markdownStyle, styles } from "../style/Styles";
import { CONTACT_US } from "../utils/Docs";

export default function ContactUsScreen() {
    // load the 'contact us' data in utils/Doc.js
    return (
        <ScrollView style={styles.container}>
                <Markdown style={markdownStyle}>
                    {CONTACT_US}
                </Markdown>
        </ScrollView>
    );
}