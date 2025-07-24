const phaiData = [
  {
    name: "Thiếu Lâm",
    image: "image/thieulam.png",
    video: "video/thieulam.mp4",
    nameImage: "image/thieulam-title.png"
  },
  {
    name: "Võ Đang",
    image: "image/vodang.png",
    video: "video/vodang.mp4",
    nameImage: "image/vodang-title.png"
  },
  {
    name: "Nga Mi",
    image: "image/ngami.png",
    video: "video/ngami.mp4",
    nameImage: "image/ngami-title.png"
  },
  {
    name: "Tinh Túc",
    image: "image/tinhtuc.png",
    video: "video/tinhtuc.mp4",
    nameImage: "image/tinhtuc-title.png"
  },
  {
    name: "Cái Bang",
    image: "image/caibang.png",
    video: "video/caibang.mp4",
    nameImage: "image/caibang-title.png"
  },
  {
    name: "Minh Giáo",
    image: "image/minhgiao.png",
    video: "video/minhgiao.mp4",
    nameImage: "image/minhgiao-title.png"
  },
  {
    name: "Thiên Long",
    image: "image/thienlong.png",
    video: "video/thienlong.mp4",
    nameImage: "image/thienlong-title.png"
  },
  {
    name: "Tiêu Dao",
    image: "image/tieudao.png",
    video: "video/tieudao.mp4",
    nameImage: "image/tieudao-title.png"
  },
  {
    name: "Thiên Sơn",
    image: "image/thienson.png",
    video: "video/thienson.mp4",
    nameImage: "image/thienson-title.png"
  },
  {
    name: "Mộ Dung",
    image: "image/modung.png",
    video: "video/modung.mp4",
    nameImage: "image/modung-title.png"
  }
];

let currentPhai = 0;
const mpName = document.querySelector('.mp-name');
const mpContent = document.querySelector('.mp-content');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

// Render nội dung
function renderPhai(index) {
  const phai = phaiData[index];

  // Fade-out nhanh trước khi thay nội dung
  mpContent.style.opacity = 0;

  setTimeout(() => {
    mpName.innerHTML = `<img src="${phai.nameImage}" alt="${phai.name}" style="max-height: 60px;">`;

    mpContent.innerHTML = `
      <img src="${phai.image}" alt="${phai.name}">
      <video autoplay muted loop>
        <source src="${phai.video}" type="video/mp4">
        Trình duyệt không hỗ trợ video.
      </video>
    `;

    // Fade-in mượt
    mpContent.style.opacity = 1;
  }, 200); // thời gian fade-out
}

// Nút chuyển tay
btnNext.addEventListener('click', () => {
  currentPhai = (currentPhai + 1) % phaiData.length;
  renderPhai(currentPhai);
});

btnPrev.addEventListener('click', () => {
  currentPhai = (currentPhai - 1 + phaiData.length) % phaiData.length;
  renderPhai(currentPhai);
});

// Tự động sau mỗi 3 giây
setInterval(() => {
  currentPhai = (currentPhai + 1) % phaiData.length;
  renderPhai(currentPhai);
}, 4000);

// Lần đầu load
renderPhai(currentPhai);
