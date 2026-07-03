const express = require("express");
const router = express.Router();

const getSystemInfo = require("../utils/systemInfo");

// GET /api/status
router.get("/", (req, res) => {
    try {
        const systemInfo = getSystemInfo();

        res.status(200).json({
            success: true,
            message: "Cloud Server Status Retrieved Successfully",
            data: systemInfo
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Unable to retrieve system information",
            error: error.message
        });
    }
});

module.exports = router;