const fakeNews = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  title: `Tiêu đề tin tức số ${i + 1}`,
  content: `Đây là nội dung chi tiết của tin tức số ${i + 1}.`,
  created_at: `2025-07-${(i % 30 + 1).toString().padStart(2, '0')}T08:00:00Z`,
}));


 
    // async function renderNewsDetailFromAPI() {
      // const urlParams = new URLSearchParams(window.location.search);
      // const id = urlParams.get("id");
      // const container = document.querySelector('.page-tintuc-content');

      // if (!id) {
        // container.innerHTML = '<p>Không có ID bài viết.</p>';
        // return;
      // }

      // try {
        // const apiUrl = `https://post.tltruongkiem.online/wp-json/wp/v2/posts/${id}`;
        // const res = await fetch(apiUrl);
        // if (!res.ok) throw new Error('Không tìm thấy bài viết');
        // const post = await res.json();

        // container.innerHTML = `
		  // <h2 style="color:white; font-size: 24px;text-align: center;">${post.title.rendered}</h2>
		  // <p style="color:#ccc; font-size: 13px;text-align: center;">Ngày đăng: ${new Date(post.date).toLocaleDateString('vi-VN')}</p>
		  // <div style="color:white; margin-top:10px; font-size:16px;padding: 10px;">${post.content.rendered}</div>
        // `;
      // } catch (err) {
        // console.error(err);
        // container.innerHTML = '<p>Không thể tải bài viết.</p>';
      // }
    // }

    // renderNewsDetailFromAPI();