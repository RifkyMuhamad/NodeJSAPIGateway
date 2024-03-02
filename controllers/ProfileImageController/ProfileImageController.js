import fs from "fs";
import { logger } from "../../log/log.js";

async function get (req, res) {
    try {
        // Baca file gambar secara asinkron
        const imageBuffer = await fs.promises.readFile(
            "./assets/python_api_gateway_card.jpg"
        );
    
        // Konversi buffer ke base64 untuk menyertakan gambar dalam respons JSON
        const base64Image = imageBuffer.toString("base64");
    
        res.json({
            message: base64Image,
        });
    } catch (error) {
        logger.log({
            level: "error",
            message: error
        });
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export default { get };