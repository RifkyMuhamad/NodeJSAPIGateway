// eslint-disable-next-line require-await
async function get (req, res) {

    res.json({
        heroProfile: {
            imageLanding: [
                "https://raw.githubusercontent.com/UntukNotion/AssetList/main/FrontEnd/cat.png",
                "https://raw.githubusercontent.com/UntukNotion/AssetList/main/FrontEnd/dog.png",
                "https://raw.githubusercontent.com/UntukNotion/AssetList/main/FrontEnd/rabbit.png"
            ],
            typeWriter: [
                "Vite + React",
                "Rifky Muhamad..",
                "Dyone-Strankers.",
                "ディオン・ストランカース",
                "디온 수토랑쿠",
                "Wanna be Generalist.",
                "Wanna be Expert.",
                "Love Language!",
                "Full Time Learner!",
            ]
        },
        serviceProfile: {
            technologies: [
                {
                    name: 'HTML',
                    logo: 'https://raw.githubusercontent.com/UntukNotion/AssetList/main/FrontEnd/html_logo.png'
                },
                {
                    name: 'Laravel',
                    logo: 'https://raw.githubusercontent.com/UntukNotion/AssetList/main/FrontEnd/laravel_logo.png'
                },
                {
                    name: 'MySQL',
                    logo: 'https://raw.githubusercontent.com/UntukNotion/AssetList/main/FrontEnd/mysql_logo.png'
                },
                {
                    name: 'Node.js',
                    logo: 'https://raw.githubusercontent.com/UntukNotion/AssetList/main/FrontEnd/nodejs_logo.png'
                },
                {
                    name: 'React',
                    logo: 'https://raw.githubusercontent.com/UntukNotion/AssetList/main/FrontEnd/react_logo.png'
                },
                {
                    name: 'Tailwind CSS',
                    logo: 'https://raw.githubusercontent.com/UntukNotion/AssetList/main/FrontEnd/tailwind_logo.png'
                }
            ],
            repositories: [
                {
                    id: 1,
                    title: "Laravel API Gateway",
                    description: "Laravel RESTful API",
                    image: "https://raw.githubusercontent.com/UntukNotion/AssetList/main/FrontEnd/laravel_api_gateway_card.jpg",
                    link: "https://github.com/RifkyMuhamad/LaravelAPIGateway",
                },
                {
                    id: 2,
                    title: "NodeJS API Gateway",
                    description: "NodeJS RESTful API",
                    image: "https://raw.githubusercontent.com/UntukNotion/AssetList/main/FrontEnd/nodejs_api_gateway_card.jpg",
                    link: "https://github.com/RifkyMuhamad/NodeJSAPIGateway",
                },
                {
                    id: 3,
                    title: "NodeJS JWT Auth",
                    description: "NodeJS JSON Web Token Authentication",
                    image: "https://raw.githubusercontent.com/UntukNotion/AssetList/main/FrontEnd/nodejs_jwt_auth_card.jpg",
                    link: "https://github.com/RifkyMuhamad/NodeJSJWTAuthApp",
                },
                {
                    id: 4,
                    title: "Python API Gateway",
                    description: "Python RESTful API",
                    image: "https://raw.githubusercontent.com/UntukNotion/AssetList/main/FrontEnd/python_api_gateway_card.jpg",
                    link: "https://github.com/RifkyMuhamad/PythonAPIGateway",
                },
                {
                    id: 5,
                    title: "RifkyMuhamad github io",
                    description: "Personal Website untuk Web ini",
                    image: "https://raw.githubusercontent.com/UntukNotion/AssetList/main/FrontEnd/rifkymuhamad_card.jpg",
                    link: "https://github.com/RifkyMuhamad/RifkyMuhamad.github.io",
                },
            ],
        }
    });
}

export default { get };
