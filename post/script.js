const scriptURL = 'https://script.google.com/macros/s/AKfycbx7WjtGvfW6WxzH0nqaR3SRiKCz17t91el0e0ZtmyXnwQDaDBCIevJn_CwLRwExpeDvgQ/exec'; // Thay bằng URL của Google Apps Script

const quill = new Quill('#editor', {
  theme: 'snow',
  placeholder: 'Nhập nội dung bài viết...',
  modules: {
    toolbar: [
      [{ 'font': [] }, { 'size': [] }],
      ['bold', 'italic', 'underline'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['clean']
    ]
  }
});

function postNews() {
  const title = document.getElementById("title").value.trim();
  const content = quill.root.innerHTML.trim();
  const image = document.getElementById("image").value.trim();

  if (!title || !content) {
    alert("Vui lòng nhập tiêu đề và nội dung.");
    return;
  }

  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors', // 👉 Thêm dòng này để bypass CORS
    body: JSON.stringify({ title, content, image }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(() => {
    alert("✅ Đăng bài thành công (chế độ no-cors).");
    loadNews();
  }).catch(err => {
    alert("❌ Lỗi khi gửi bài: " + err);
  });
}


function loadNews() {
  fetch(scriptURL)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("news");
      container.innerHTML = "";
      data.reverse().forEach(post => {
        container.innerHTML += `
          <div class="post">
            <h3>${post.title}</h3>
            <div>${post.content}</div>
            ${post.image ? `<img src="${post.image}" width="100%" style="margin-top:10px;" />` : ""}
            <small>🕒 ${new Date(post.timestamp).toLocaleString()}</small>
          </div>`;
      });
    });
}

loadNews();
