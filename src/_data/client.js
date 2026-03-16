module.exports = {
    name: "Rafael Menezes",
    email: "contato@rafaelmenezes.adv.br",
    phoneForTel: "5130639659",
    phoneFormatted: "(51) 3063-9659",
    phonePoa2: "(51) 98532-2028",
    phoneRj: "(21) 2042-0051",
    address: {
        lineOne: "Praça XV de Novembro, 21/302",
        lineTwo: "Centro Histórico",
        city: "Porto Alegre",
        state: "RS",
        zip: "",
        country: "BR",
        mapLink: "https://maps.google.com/?q=Praça+XV+de+Novembro+21+Porto+Alegre",
        // Embed: OpenStreetMap (funciona sem API). Para usar Google Maps, use Share > Incorporar no Google Maps e cole o src do iframe aqui.
        embedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-51.232%2C-30.032%2C-51.224%2C-30.022&layer=mapnik&marker=-30.0277%2C-51.2287",
    },
    addressShort: "Praça XV de novembro, 21/302 Centro Histórico",
    socials: {
        instagram: "https://www.instagram.com/rafaelmenezes.advocacia/",
        instagramHandle: "@rafaelmenezes.advocacia",
    },
    whatsapp: "5551985322028",
    offices: [
        { name: "Porto Alegre / RS", city: "Porto Alegre", phones: ["(51) 3063-9659", "(51) 98532-2028"], tipo: "Matriz" },
        { name: "Rio de Janeiro / RJ", city: "Rio de Janeiro", phones: ["(21) 2042-0051"], tipo: "Filial" },
    ],
    domain: "https://www.rafaelmenezes.adv.br",
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
