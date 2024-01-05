import { portOrigin } from "../index";

export const home = async (req, res) => {
  res.json({
    message: "DyoneStrankers use Express",
    url: portOrigin
  });
};
