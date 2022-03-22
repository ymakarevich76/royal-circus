const filterWrap = document.querySelector(".filter__variation-wrap");

if (filterWrap) {

  const filterBtn = document.querySelector(".filter__btn");
  filterBtn.addEventListener('click', () => {
    filterWrap.classList.toggle('active');
    console.log(222)
  })
}
