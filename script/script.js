// year
document.getElementById('year').textContent = new Date().getFullYear();

function handleSubmit(e) {
    e.preventDefault(); // simples feedback visual
    alert('Mensagem registrada (simulação). Em um projeto real, aqui você chamaria o backend.');
    e.target.reset();
    return false;
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const button = item.querySelector(".faq-question");

  button.addEventListener("click", () => {

    faqItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});

