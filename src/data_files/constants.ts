import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "KapsTec",
  tagline: "Precision Sealing Solutions",
  description: "KapsTec offers precision-engineered seals and expert solutions for pharmaceutical, automotive, and industrial applications. Contact our sales team for superior quality and reliability.",
  description_short: "KapsTec offers precision-engineered seals and expert solutions for pharmaceutical, automotive, and industrial applications.",
  url: "https://kapstec.com",
  author: "Emil Gulamov",
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
    {
        icon: "https://www.steelcorp.com/asset/images/logo.png",
        name: "SteelCorp Industries",
        href: "#",
    },
    {
        icon: "https://www.ultratechcement.com/content/experience-fragments/ultratechcement/in/ihb/header/master/_jcr_content/root/container_copy_86747432/container/image_copy.coreimg.png/1727338314222/ultratech-cement-logo.png",
        name: "UltraTech Ltd.",
        href: "#",
    },
    {
        icon: "https://www.autodrive.solutions/images/logo.png",
        name: "AutoDrive Motors",
        href: "#",
    },
]