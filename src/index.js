const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

/* Kodlar Buradan aşağıya */
let dizi = [...document.querySelectorAll("a")];
console.log(dizi);
dizi[0].textContent = "Servisler";
dizi[1].textContent = "Ürünler";
dizi[2].textContent = "Vizyon";
dizi[3].textContent = "Özellikler";
dizi[4].textContent = "Hakkımızda";
dizi[5].textContent = "İletişim";
const domTitle = document.querySelector(".dom-title");
domTitle.textContent = "Bu Dom Mükemmel";
for (let i = 0; i < dizi.length-1; i++) {
  dizi[i].className = "italic";
}

const buttonDizi = [...document.querySelectorAll("button")];
buttonDizi[0].textContent = "Başlayın";
const image = [...document.querySelectorAll("img")];
image[0].src = "./../mocks/img/logo.png";
image[1].src = "../mocks/img/cta.png";
image[2].src = "../mocks/img/accent.png";
const titles = [...document.querySelectorAll("h4")];
titles[0].textContent = "Özellikler";
titles[1].textContent = "Hakkında";
titles[2].textContent = "Servisler";
titles[3].textContent = "Ürünler";
titles[4].textContent = "Vizyon";
titles[5].textContent = "İletişim";
const totalP = [...document.querySelectorAll("p")];
totalP[0].textContent =
  "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
totalP[1].textContent =
  "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
totalP[2].textContent =
  "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
totalP[3].textContent =
  "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
totalP[4].textContent =
  "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
totalP[5].textContent =
  "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye";
totalP[6].textContent = "+90 (123) 456-7899";
totalP[7].textContent = "satis@birsirketsitesi.com.tr";
const footer = document.querySelector("footer");
footer.children.className = 'bold';
dizi[dizi.length - 1].textContent = "Copyright Bir Şirket Sitesi 2022";
dizi[dizi.length - 1].className = 'bold'
