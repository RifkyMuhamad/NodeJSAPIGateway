async function uploadController(req, res) {
    console.log(Object.keys(req));
    console.log(req.file);
    console.log(req.file.filename);
}

export { uploadController };