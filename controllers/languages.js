const languagesList = async (req, res) => {
    res.json({
        id: {
            languages: "Bahasa Indonesia",
            country: "Indonesia",
            code: "ID"
        }
    });
};

export { languagesList };