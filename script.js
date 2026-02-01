function updateTime() {
  const now = new Date();
  const options = {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  };
  document.getElementById("time").textContent =
    new Intl.DateTimeFormat("en-IN", options).format(now) + " IST";
}

updateTime();
setInterval(updateTime, 1000);
