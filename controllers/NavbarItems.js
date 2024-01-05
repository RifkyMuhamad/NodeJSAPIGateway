const navbarItems = async (req, res) => {
  res.json({
    logo: "DyoneStrankers",
    navItems: [
      { link: "Home", path: "/" },
      { link: "Article", path: "article" },
      { link: "Project", path: "project" },
      { link: "Contact", path: "contact" },
    ],
  });
};

export { navbarItems };
