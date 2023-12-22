const about = async (req, res) => {
  res.json({
    message: "DyoneStrankers in About baru",
  });
};

const aboutId = async (req, res) => {
  const id = req.params.id;
  res.json({
    message: "DyoneStrankers in About",
    id: `${id} baru juga`,
  });
};

export { about, aboutId };