// eslint-disable-next-line require-await
async function get (req, res) {
    res.json({
        id: [
            "Vite + React",
            "Rifky Muhamad..",
            "Dyone-Strankers.",
            "ディオン・ストランカース",
            "디온 수토랑쿠",
            "Wanna be Generalist.",
            "Wanna be Expert.",
            "Love Language!",
            "Full Time Learner!",
        ],
    });
}

export default { get };
