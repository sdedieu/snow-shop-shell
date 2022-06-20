module.exports = {
  theme: {
    extend: {
      backgroundSize: (theme) => ({
        100: "100%",
      }),
      backgroundImage: (theme) => ({
        "sales-image": "url('/assets/img/pexels-daniel-frank-356808.jpg')",
        "cross-country-image":
          "url('/assets/img/mika-9IeEFATw1Xk-unsplash.jpg')",
        "downhill-image":
          "url('/assets/img/karsten-winegeart-CA0xocGZSFM-unsplash.jpg')",
        "snowboard-image":
          "url('/assets/img/colin-lloyd-DvIYbNCZAns-unsplash.jpg')",
      }),
      colors: {
        green: {
          special: "#5cebf6",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
