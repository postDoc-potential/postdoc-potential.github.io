const surveyServiceUrl = "https://api.surveyjs.io/public/v1/Survey";
const surveyIOMaxPostSize = 65536;
// function loadSurvey(survey, surveyId) {
//     survey.beginLoading();
//     fetch(surveyServiceUrl + "/getSurvey?surveyId=" + surveyId)
//         .then(response => {
//             if (response.ok) {
//                 return response.json();
//             }
//             throw new Error("Could not load the survey JSON schema");
//         })
//         .then(data => {
//             survey.fromJSON(data);
//             survey.endLoading();
//         })
//         .catch(error => console.log(error));
// }


function loadSurvey(survey) {
    survey.beginLoading();
    fetch("survey.json")
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Could not load the survey JSON schema");
        })
        .then(data => {
            survey.fromJSON(data);
            survey.endLoading();
        })
        .catch(error => console.log(error));
}
const survey = new Survey.Model();
survey.applyTheme(themeJson);
survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});
loadSurvey(survey);
survey.render(document.getElementById("surveyElement"));

