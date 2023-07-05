import { Alert } from "react-native";


export function get(url) {
    return fetch(url, {method: "GET"})
    .then(data => data.json())
    .catch(error => Alert.alert("ERROR:" + String(error)))
}

export function testConnection() {
    const URL = "http://130.185.78.17/questions/attributes/difficulties"
    get(URL)
    .catch(error => {Alert.alert("برقراری ارتباط با سرور ممکن نیست")})
}

export function getAttributes(tag, setter) {
    const URL = "http://130.185.78.17/questions/attributes/" + tag;
    get(URL)
    .then(res => setter(res.data))

}


export function getQuestions(setter, filters={}) {
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
    const URL = "http://130.185.78.17/questions/attributes/" + tag + "/" + String(id)
    get(URL)
    .then(res => setter(res.data[key]))
}