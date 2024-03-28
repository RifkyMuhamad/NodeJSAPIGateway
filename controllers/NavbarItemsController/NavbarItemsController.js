// eslint-disable-next-line require-await
async function get (req, res) {
    res.json({
        logo: "Dyone Strankers",
        navItems: [
            { link: "Home", path: "/" },
            { link: "Article", path: "article" },
            { link: "Project", path: "project" },
            { link: "Contact", path: "contact" },
        ],
        signInAndSignUp: {
            login: "Login",
            logup: "Sign Up",
        },
    });
}

export default { get };
