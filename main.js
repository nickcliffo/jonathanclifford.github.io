const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");
const pageWrap = document.getElementById("pageWrap");
const overlay = document.getElementById("afterSendOverlay");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        note.textContent = "Please fill out all required fields (*).";
        return;
    }

    const body =
        `Name: ${name}
Email: ${email}

Message:
${message}
`;

    const mailtoLink =
        `mailto:jnicholasclifford@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    note.textContent = "Opening your email app to send this message...";
    window.location.assign(mailtoLink);

    setTimeout(() => {
        note.textContent = "";
        pageWrap.classList.add("page-blur");
        overlay.classList.add("show");
        overlay.setAttribute("aria-hidden", "false");
    }, 1500);
});
