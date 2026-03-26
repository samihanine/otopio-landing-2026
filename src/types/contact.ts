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
  url: "tel:+1 (514) 558-6420",
  name: "Phone",
  value: "+1 (514) 558-6420",
};

export const formattedAddress: Contact = {
  url: "https://maps.app.goo.gl/8ufcMJk2Fj4SjCEq9",
  name: "Address",
  value: "5255 Avenue Decelles HEC, 5e étage, bureau 5.200, Montréal, QC H3T 2B1",
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
