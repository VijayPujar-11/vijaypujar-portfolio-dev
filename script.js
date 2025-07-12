// Flip card on click
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});

// Filter by tag
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const tag = btn.getAttribute("data-tag").toLowerCase();

    cards.forEach(card => {
      const cardTags = card.getAttribute("data-tags").toLowerCase();
      card.style.display = (tag === "all" || cardTags.includes(tag)) ? "block" : "none";
    });
  });
});

// Search by title or tags
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const tags = card.getAttribute("data-tags").toLowerCase();
    card.style.display = (title.includes(query) || tags.includes(query)) ? "block" : "none";
  });
});

// PDF Modal Viewer
const modal = document.getElementById("pdfModal");
const viewer = document.getElementById("pdfViewer");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".open-pdf").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const src = link.getAttribute("data-pdf");
    viewer.src = src;
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  viewer.src = "";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    viewer.src = "";
  }
});

// Blog Editor
const blogList = document.getElementById("blogList");
const blogTitle = document.getElementById("blogTitle");
const blogContent = document.getElementById("blogContent");
const addBlogBtn = document.getElementById("addBlogBtn");

addBlogBtn.addEventListener("click", () => {
  const title = blogTitle.value.trim();
  const content = blogContent.value.trim();

  if (!title || !content) return;

  const post = document.createElement("div");
  post.className = "blog-post";
  post.innerHTML = `<h3>${title}</h3><p>${content}</p>`;

  blogList.prepend(post);
  blogTitle.value = "";
  blogContent.value = "";
});
