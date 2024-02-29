const aboutController = async (req, res) => {
  res.json({
    message: "DyoneStrankers in About baru",
  });
};

const aboutIdController = async (req, res) => {
  const id = req.params.id;
  res.json({
    message: "DyoneStrankers in About",
    id: `${id} baru juga`,
  });
};

export { aboutController, aboutIdController };