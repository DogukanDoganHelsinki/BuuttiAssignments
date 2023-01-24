const elements = {
  form: document.querySelector(".form"),
  postsContainer: document.querySelector(".posts-container"),
  postName: document.querySelector("#name"),
  postText: document.querySelector("#post"),
  btnToggle: document.querySelector(".btn-toggle"),
};

const resetInputs = () => {
  elements.postName.value = "";
  elements.postText.value = "";
};

const removePost = (e) => {
  const post = e.target.parentNode.parentNode;
  elements.postsContainer.removeChild(post);
};

const renderPost = (name, post) => {
  elements.postsContainer.insertAdjacentHTML(
    "afterbegin",
    `
  <div class="post-item">
    <div class="post-header">
      <h2 class="post-name">${name}</h2>
      <button class="btn-remove">Delete</button>
  </div>
    <div class="post-body">
      <p>${post}</p>
    </div>
</div>
`
  );

  const firstPost = elements.postsContainer.firstElementChild;
  firstPost.addEventListener("click", removePost);

  resetInputs();
};

const submit = (e) => {
  e.preventDefault();

  const name = elements.postName.value;
  const post = elements.postText.value;

  if (post && name) {
    renderPost(name, post);
  } else {
    alert("Name and post must not be empty");
  }
};

elements.form.addEventListener("submit", (e) => submit(e));

elements.btnToggle.addEventListener("click", () =>
  elements.form.classList.toggle("show")
);
