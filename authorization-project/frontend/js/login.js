const API_URL = "http://localhost:8080";

document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    try {
        const response = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password})
        });

        const data = await response.json().catch(() => null);

        if (!response.ok) {
            message.textContent = data || "Invalid username or password";
            message.style.color = "red";
            return;
        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);
        localStorage.setItem("role", data.role);

        window.location.href = "home.html";
    } catch (error) {
        message.textContent = "Cannot connect to Spring Boot backend.";
        message.style.color = "red";
    }
});