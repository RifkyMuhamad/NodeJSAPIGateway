// eslint-disable-next-line require-await
async function get (req, res) {
    const id = req.params.id;
    res.json({
        message: "DyoneStrankers in About",
        id: `${ id } baru juga`,
    });
}

export default { get };