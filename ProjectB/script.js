document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("modal");
  const addExpenseBtn = document.getElementById("addExpenseBtn");
  const closeBtn = document.getElementsByClassName("close")[0];
  const expenseForm = document.getElementById("expenseForm");

  addExpenseBtn.addEventListener("click", function() {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const description = document.getElementById("description").value;
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
    
    // Add code to process the form data (e.g., send to server or store locally)

    modal.style.display = "none";
    expenseForm.reset();
  });
});
