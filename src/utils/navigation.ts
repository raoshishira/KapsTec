// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "#" },
  { name: "Products", url: "#" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Sitemap",
    links: [
      { name: "Home", url: "/" },
      { name: "About", url: "#" },
      { name: "Products", url: "#" },
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    section: "Our Products",
    links: [
      { name: "Oil Seal", url: "#" },
      { name: "Static seal", url: "#" },
      { name: "Rubber Diaphragm", url: "#" },
      { name: "Valve seal", url: "#" },
      { name: "TC Sanitary Gaskets", url: "#" },
      { name: "FBC Gaskets", url: "#" },
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