async function fetchStatus() {
    try {
        const response = await fetch("/api/status");
        const result = await response.json();

        const data = result.data;

        document.getElementById("status").innerHTML = "🟢 " + data.status;
        document.getElementById("hostname").innerText = data.hostname;
        document.getElementById("os").innerText = data.operatingSystem;
        document.getElementById("architecture").innerText = data.architecture;
        document.getElementById("nodeVersion").innerText = data.nodeVersion;
        document.getElementById("uptime").innerText = data.uptime;
        document.getElementById("totalMemory").innerText = data.totalMemory;
        document.getElementById("freeMemory").innerText = data.freeMemory;
        document.getElementById("cpuModel").innerText = data.cpuModel;
        document.getElementById("serverTime").innerText = data.serverTime;

    } catch (error) {
        console.error("Error fetching status:", error);
    }
}

// Button click
document.getElementById("refreshBtn").addEventListener("click", fetchStatus);

// Auto load when page opens
fetchStatus();

// Auto refresh every 5 seconds
setInterval(fetchStatus, 5000);