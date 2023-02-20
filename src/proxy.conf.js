const PROXY_CONFIG = [
  {
    context: [
      "/api/test",
      "/api/chargers",
      "/api/chargers/:id",
      "/api/user"
    ],
    target: "https://localhost:7234",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
