const macyInstance = new Macy({
  container: ".gallery-container",
  mobileFirst: true,
  columns: 3,
  breakAt: {
    1200: {
      margin: {
        x: 43,
        y: 43,
      },
    },

    768: {
      margin: {
        x: 30,
        y: 30,
      },
    },

    425: {
      margin: {
        x: 17,
        y: 17,
      },
    },
  },
});
