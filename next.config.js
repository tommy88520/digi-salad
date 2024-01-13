const withVideos = require("next-videos");

module.exports = withVideos({
  webpack(config, options) {
    return config;
  },
  images: {
    domains: ["uploadthing.com", "utfs.io"],
  },
});
