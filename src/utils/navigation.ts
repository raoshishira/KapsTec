// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "#" },
  { name: "Products", url: "/products" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Sitemap",
    links: [
      { name: "Home", url: "/" },
      { name: "About", url: "#" },
      { name: "Products", url: "/products" },
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    section: "Our Products",
    links: [
      { name: "Rubber Seals", url: "/products/rubber-seals" },
      { name: "Rolls", url: "/products/rolls" },
      { name: "Gear coupling", url: "/products/gear-coupling" },
      { name: "Quick release couplings (QRC)", url: "/products/quick-release-couplings-qrc" },
      { name: "Oil filling and filtering Units", url: "/products/oil-filling-and-filtering-units" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};