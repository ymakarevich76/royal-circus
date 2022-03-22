const moreBtn = document.querySelector(".programs__btn");

if (moreBtn) {
  moreBtn.addEventListener('click', () => {
    const cards = document.querySelectorAll(".programs__card");

    cards.forEach(item => {
      item.classList.add("active-js");
    })

    moreBtn.classList.add("hide-js");
  })
}
