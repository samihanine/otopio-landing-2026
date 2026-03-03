type Contact = {
  url?: string;
  name?: string;
  value?: string;
  logo?: string;
};

export const email: Contact = {
  url: "mailto:contact@otopio.com",
  name: "Email",
  value: "contact@otopio.com",
};

export const phoneNumber: Contact = {
  url: "tel:+1234567890",
  name: "Phone",
  value: "+1234567890",
};

export const formattedAddress: Contact = {
  url: "https://maps.app.goo.gl/1234567890",
  name: "Address",
  value: "123 Main St, Anytown, USA",
};

export const contactMethods: Contact[] = [
  {
    url: "https://github.com/otopio",
    name: "GitHub",
    value: "otopio",
    logo: "https://cdn.simpleicons.org/github",
  },
  {
    url: "https://www.linkedin.com/company/otopio/",
    name: "LinkedIn",
    value: "@otopio",
    logo: "https://api.iconify.design/mdi:linkedin.svg",
  },
  {
    url: "https://www.instagram.com/otopionet/",
    name: "Instagram",
    value: "@otopio",
    logo: "https://cdn.simpleicons.org/instagram",
  },
  {
    url: "mailto:contact@otopio.ca",
    name: "Email",
    value: "contact@otopio.ca",
    logo: "https://cdn.simpleicons.org/Mail.ru",
  },
];
