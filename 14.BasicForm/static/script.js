const form = document.getElementById("form");
const resultDiv = document.getElementById("resultDiv");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form)
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    })
    console.log(formDataObject);

    try {
        const response = await fetch("/form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataObject),
        });

        const data = await response.json();

        if (response.ok) {
            resultDiv.innerHTML = `<p>Success: ${data.result}</p>`;
        } else {
            resultDiv.innerHTML = `<p>Error handling form: ${data.error}</p>`;
        }
    } catch (error) {
        resultDiv.innerHTML = `<p>Nasty Error: ${error.message}</p>`;
    }
});
