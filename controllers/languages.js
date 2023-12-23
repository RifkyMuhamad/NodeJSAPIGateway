const languagesList = async (req, res) => {
    res.json({
        id: {
            languages: "Bahasa Indonesia",
            country: "Indonesia",
            countryCodeAlpha2: "ID",
            countryCodeAlpha3: "IDN",
            languagesCode2: "id",
            languagesCode3: "ind",
            currency: "Rupiah",
            capitalCity: "Jakarta"
        }
    });
};

export { languagesList };