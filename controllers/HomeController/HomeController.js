/**
 *
 * @param req
 * @param res
 * @return {Promise<void>}
 */
// eslint-disable-next-line require-await
async function get (req, res) {
    res.json({
        message: "DyoneStrankers use Express",
    });
}

export default { get };