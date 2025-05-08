// IP Intelligence (Gojo's Six Eyes)
fetch("https://ipinfo.io/json?token=04aa07954e51ff")
  .then(res => res.json())
  .then(data => {
    document.getElementById("ip-data").textContent = JSON.stringify(data, null, 2);
  });

// Domain Recon (Curse Scan)
function fetchRecon() {
  const domain = document.getElementById("domain").value;
  fetch(`https://api.hackertarget.com/httpheaders/?q=${domain}`)
    .then(res => res.text())
    .then(data => {
      document.getElementById("recon-result").textContent = data;
    });
}

// Latest CVEs (Unsealed Scrolls)
fetch("https://cve.circl.lu/api/last")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("cve-list");
    data.forEach(cve => {
      const li = document.createElement("li");
      li.textContent = `${cve.id}: ${cve.summary}`;
      list.appendChild(li);
    });
  });
