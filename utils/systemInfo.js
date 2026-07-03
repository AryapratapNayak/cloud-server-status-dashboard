const os = require("os");

function formatUptime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${hours}h ${minutes}m ${remainingSeconds}s`;
}

function bytesToGB(bytes) {
    return (bytes / (1024 ** 3)).toFixed(2);
}

function getSystemInfo() {
    return {
        status: "Running",
        hostname: os.hostname(),
        platform: os.platform(),
        operatingSystem: os.type(),
        architecture: os.arch(),
        uptime: formatUptime(os.uptime()),
        cpuModel: os.cpus()[0].model,
        cpuCores: os.cpus().length,
        totalMemory: `${bytesToGB(os.totalmem())} GB`,
        freeMemory: `${bytesToGB(os.freemem())} GB`,
        nodeVersion: process.version,
        serverTime: new Date().toLocaleString(),
        environment: process.env.NODE_ENV || "Development"
    };
}

module.exports = getSystemInfo;