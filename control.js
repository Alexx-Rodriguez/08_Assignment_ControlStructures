function repeatSentences() {
    const sentence = document.getElementById("sentence").value;
    const repeatCount = parseInt(document.getElementById("amountOfTimes").value);

    const output = document.getElementById("results");
    output.innerHTML = "";

    const ol = document.createElement("ol");

    for (let i = 0; i < repeatCount; i++) {
        const li = document.createElement("li");
        li.textContent = sentence;
        ol.appendChild(li);
    }

    output.appendChild(ol);
}