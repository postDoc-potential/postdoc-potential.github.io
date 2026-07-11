const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    result.style.display = "block";
    result.style.background = "#dbeafe";
    result.style.color = "#1e40af";
    result.innerHTML = "Sending...";

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: json
    })
    .then(async (res) => {
        await res.json();

        if (res.status === 200) {
            result.style.background = "#dcfce7";
            result.style.color = "#166534";
            result.innerHTML = "✓ Message sent successfully!";
            form.reset();
        } else {
            result.style.background = "#fee2e2";
            result.style.color = "#991b1b";
            result.innerHTML = "✗ Failed to send message.";
        }
    })
    .catch(() => {
        result.style.background = "#fee2e2";
        result.style.color = "#991b1b";
        result.innerHTML = "Something went wrong.";
    });
});