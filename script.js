// GANTI NOMOR WA DI SINI. Format: 62 + nomor tanpa angka 0 depan.
const whatsappNumber = '6281234567890';

// Edit katalog produk di sini.
const products = [
  {
    name: 'Makanan Kucing Dry Food',
    desc: 'Pilihan dry food untuk harian anabul. Bisa tanya stok brand favoritmu.',
    price: 'Mulai Rp25.000',
    emoji: '🥣'
  },
  {
    name: 'Wet Food & Pouch',
    desc: 'Wet food praktis untuk booster makan atau variasi menu kucing.',
    price: 'Mulai Rp8.000',
    emoji: '🥫'
  },
  {
    name: 'Pasir Kucing',
    desc: 'Pasir kucing untuk kebutuhan litter box, tersedia beberapa pilihan.',
    price: 'Cek stok via WA',
    emoji: '🧺'
  },
  {
    name: 'Snack Kucing',
    desc: 'Snack, creamy treat, dan cemilan untuk reward anabul.',
    price: 'Mulai Rp5.000',
    emoji: '🍗'
  },
  {
    name: 'Vitamin & Grooming',
    desc: 'Produk perawatan harian untuk bantu jaga kesehatan dan kebersihan.',
    price: 'Cek stok via WA',
    emoji: '💊'
  },
  {
    name: 'Request Produk',
    desc: 'Cari brand tertentu? Chat kami, nanti dibantu cek ketersediaannya.',
    price: 'By request',
    emoji: '📦'
  }
];

const productGrid = document.querySelector('#productGrid');
const menuButton = document.querySelector('#menuButton');
const navLinks = document.querySelector('#navLinks');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

function createWaLink(productName) {
  const message = `Halo Hivet Bintaro Shop, saya mau tanya/order ${productName}`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

productGrid.innerHTML = products.map((product) => `
  <article class="product-card">
    <div class="product-img">${product.emoji}</div>
    <h3>${product.name}</h3>
    <p>${product.desc}</p>
    <div class="price">${product.price}</div>
    <a class="btn btn-primary" href="${createWaLink(product.name)}" target="_blank" rel="noopener">Tanya Produk</a>
  </article>
`).join('');
