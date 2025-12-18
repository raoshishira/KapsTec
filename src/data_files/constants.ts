import ogImageSrc from "@images/social.png";
import planetLogo from "@images/partners/planet-gear-logo.webp";
import tsrLogo from "@images/partners/tsr-logo.png";

// Import client logos
import client2 from "@images/Clients/client2.png";
import client3 from "@images/Clients/client3.png";
import client4 from "@images/Clients/client4.png";
import client5 from "@images/Clients/client5.png";
import client6 from "@images/Clients/client6.png";
import client7 from "@images/Clients/client7.png";
import client8 from "@images/Clients/client8.png";
import client9 from "@images/Clients/client9.png";
import client10 from "@images/Clients/client10.png";
import client11 from "@images/Clients/client11.png";
import client12 from "@images/Clients/client12.png";
import client13 from "@images/Clients/client13.png";
import client14 from "@images/Clients/client14.png";
import client15 from "@images/Clients/client15.png";
import client16 from "@images/Clients/client16.png";
import client17 from "@images/Clients/client17.png";
import client18 from "@images/Clients/client18.png";
import client19 from "@images/Clients/client19.png";
import client20 from "@images/Clients/client20.png";

export const SITE = {
  title: "KapsTec",
  tagline: "Precision Sealing Solutions",
  description: "KapsTec offers precision-engineered seals and expert solutions for pharmaceutical, automotive, and industrial applications. Contact our sales team for superior quality and reliability.",
  description_short: "KapsTec offers precision-engineered seals and expert solutions for pharmaceutical, automotive, and industrial applications.",
  url: "https://kapstec.com",
  author: "KapsTec",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Precision Sealing Solutions`,
  description: "Equip your projects with KapsTec's precision-engineered seals and expert solutions. Trusted by industry leaders, KapsTec offers reliability and cutting-edge technology. Start exploring now!",
  image: ogImageSrc,
};

export const partnersData = [
  { icon: planetLogo, name: "Pla-net Srl Italy", href: "https://en.giuntiplanet.it/" },
  { icon: tsrLogo, name: "TSR - Taiwan Steel Roll", href: "https://www.tsroll.com/" },
  { icon: client2, name: "Client", href: "#" },
  { icon: client3, name: "Client", href: "#" },
  { icon: client4, name: "Client", href: "#" },
  { icon: client5, name: "Client", href: "#" },
  { icon: client6, name: "Client", href: "#" },
  { icon: client7, name: "Client", href: "#" },
  { icon: client8, name: "Client", href: "#" },
  { icon: client9, name: "Client", href: "#" },
  { icon: client10, name: "Client", href: "#" },
  { icon: client11, name: "Client", href: "#" },
  { icon: client12, name: "Client", href: "#" },
  { icon: client13, name: "Client", href: "#" },
  { icon: client14, name: "Client", href: "#" },
  { icon: client15, name: "Client", href: "#" },
  { icon: client16, name: "Client", href: "#" },
  { icon: client17, name: "Client", href: "#" },
  { icon: client18, name: "Client", href: "#" },
  { icon: client19, name: "Client", href: "#" },
  { icon: client20, name: "Client", href: "#" },
]