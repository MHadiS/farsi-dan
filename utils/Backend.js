import { Alert } from "react-native";


// working with backend


export function get(url) {
    // send get request
    return fetch(url, {method: "GET"})
    .then(data => data.json())
    .catch(error => Alert.alert("ERROR:" + String(error)))
}

export function testConnection() {
    // connecting to sever for testing the connection
    const URL = "http://130.185.78.17/questions/attributes/difficulties"
    get(URL)
    .catch(error => {Alert.alert("برقراری ارتباط با سرور ممکن نیست")})
}

export function getAttributes(tag, setter) {
    // get the attributes for filtering questions
    const URL = "http://130.185.78.17/questions/attributes/" + tag;
    get(URL)
    .then(res => setter(res.data))

}


export function getQuestions(setter, filters={}) {
    // get a list of questions base in the filter
    let url = "http://130.185.78.17/questions?"
    parameters = Object.keys(filters)
    parameters.map(item => {
        let filter = filters[item]
        let parameter;
        if (filter == 0) {
            parameter = ""
        } else {
            parameter = item + "=" + filter + "&"
        }
        url += parameter
    })
    get(url)
    .then(res => setter(res.data))
}

export function id_to_text(tag, id, key, setter) {
    // convert an attribute id to text
    const URL = "http://130.185.78.17/questions/attributes/" + tag + "/" + String(id)
    get(URL)
    .then(res => setter(res.data[key]))
}