const surveyServiceUrl = "https://api.surveyjs.io/public/v1/Survey";
const surveyIOMaxPostSize = 65536;

function loadSurvey(survey) {
    survey.beginLoading();
    fetch("survey.json")
        .then(response => {
            if (response.ok) return response.json();
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

survey.onComplete.add(async (sender) => {
    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbyL3j5W9HBqZabSdAdTxgi2ZBVPyBriYnR9wwmraKvIaYY76tBZQ6zBSqMYlUfuAKMtkg/exec", {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sender.data)
        });
        console.log("Status:", response.status);
        alert("Submission sent");
    } catch (err) {
        console.error("Fetch failed:", err);
        alert("Fetch failed: " + err.message);
    }
});

loadSurvey(survey);
survey.render(document.getElementById("surveyElement"));