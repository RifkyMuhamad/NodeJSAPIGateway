import fs from "fs";

export const profileImageController = async (req, res) => {
    try {
        // Baca file gambar secara asinkron
        const imageBuffer = await fs.promises.readFile(
          "./assets/python_api_gateway_card.jpg"
        );
    
        // Konversi buffer ke base64 untuk menyertakan gambar dalam respons JSON
        const base64Image = imageBuffer.toString('base64');
    
        res.json({
          message: base64Image,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  };
  