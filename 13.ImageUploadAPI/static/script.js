const form = document.getElementById("uploadForm");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    console.log(formData);

    try {
        const response = await fetch("/upload", {
            method: "POST",
            body: formData,
        });
        const data = await response.json();

        if (response.ok) {
            resultDiv.innerHTML = `<p>Image uploaded successfully!</p><img src="${data.imageUrl}" alt="Uploaded Image" style="max-width: 300px;">`;
        } else {
            resultDiv.innerHTML = `<p>Error: ${data.error || "Upload failed"
                }</p>`;
        }
    } catch (error) {
        resultDiv.innerHTML = `<p>Error: ${error.message || "An unexpected error occurred"
            }</p>`;
    }
});