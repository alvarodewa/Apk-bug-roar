document.getElementById("loginBtn").addEventListener("click", login);
document.getElementById("sendBtn").addEventListener("click", sendBug);
document.getElementById("logoutBtn").addEventListener("click", logout);
document.getElementById("devBtn").addEventListener("click", openDeveloper);

function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("loginError");

  if (user === "zero" && pass === "1") {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");
    error.textContent = "";
  } else {
    error.textContent = "Username atau password salah!";
  }
}

function sendBug() {
  const target = document.getElementById("targetNumber").value.trim();
  const method = document.getElementById("method").value;
  const log = document.getElementById("consoleLog");

  if (!target || !method) {
    log.innerHTML += "<br>⚠️ Harap isi nomor dan pilih metode!";
    log.scrollTop = log.scrollHeight;
    return;
  }

  const waktu = new Date().toLocaleTimeString();
  log.innerHTML += `<br>[${waktu}] Mengirim bug ke ${target} via ${method}... ✅`;
  log.scrollTop = log.scrollHeight;

  showNotification(`✅ Bug berhasil dikirim ke ${target}`);
}

function showNotification(message) {
  const notif = document.getElementById("notification");
  notif.textContent = message;
  notif.classList.remove("hidden");

  setTimeout(() => {
    notif.classList.add("hidden");
  }, 3000);
}

function logout() {
  document.getElementById("mainPage").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("consoleLog").innerHTML = "Menunggu aksi...";
}

function openDeveloper() {
  const phoneNumber = "6285177076149";
  const url = `https://wa.me/${phoneNumber}?text=Halo%20Developer,%20saya%20butuh%20bantuan%20panel%20VIP.`;
  window.open(url, "_blank");
}
