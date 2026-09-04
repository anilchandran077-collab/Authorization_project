const token = localStorage.getItem("token");
const username = localStorage.getItem("username");
const role = localStorage.getItem("role");

if (!token) {
    window.location.href = "index.html";
} else {
    document.getElementById("username").textContent = username || "User";
    document.getElementById("role").textContent = role || "USER";
}

document.getElementById("logoutBtn").addEventListener("click", function() {
    localStorage.clear();
    window.location.href = "index.html";
});