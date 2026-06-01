const surveyServiceUrl = "https://api.surveyjs.io/public/v1/Survey";
const surveyIOMaxPostSize = 65536;
function loadSurvey(survey, surveyId) {
    survey.beginLoading();
    fetch(surveyServiceUrl + "/getSurvey?surveyId=" + surveyId)
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
function postResults(survey, options, surveyPostId) {
    const resultAsStr = JSON.stringify(survey.data);
    // Display an error if survey results exceed the maximum post size 
    if (resultAsStr.length >= surveyIOMaxPostSize) {
        options.showSaveError(survey.getLocalizationString("savingExceedSize"))
        return;
    }
    // Display the "Saving..." message (pass a string value to display a custom message)
    options.showSaveInProgress();
    const dataObj = { postId: surveyPostId, surveyResult: resultAsStr };
    const dataStr = JSON.stringify(dataObj);
    const headers = new Headers({ "Content-Type": "application/json; charset=utf-8" });
    fetch(surveyServiceUrl + "/post/", {
        method: "POST",
        body: dataStr,
        headers: headers
    }).then(response => {
        if (!response.ok) {
            throw new Error("Could not post the survey results");
        }
        // Display the "Success" message (pass a string value to display a custom message)
        options.showSaveSuccess();
        // Alternatively, you can clear all messages:
        // options.clearSaveMessages();
    }).catch(error => {
        // Display the "Error" message (pass a string value to display a custom message)
        options.showSaveError();
        console.log(error);
    });
}
const survey = new Survey.Model();
survey.applyTheme(themeJson);
survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});
loadSurvey(survey, json.surveyId);
survey.onComplete.add((survey, options) => {
    postResults(survey, options, json.surveyPostId)
});
survey.render(document.getElementById("surveyElement"));