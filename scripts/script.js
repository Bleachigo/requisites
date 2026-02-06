// For buttons in fistr (Payment details) section
const copyButtons = document.querySelectorAll(".btn");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    // Find the specific paragraph linked via data-target
    const targetId = button.getAttribute("data-target");
    const textToCopy = document.getElementById(targetId).innerText;

    try {
      // Use the modern Clipboard API
      await navigator.clipboard.writeText(textToCopy);

      // Update the clicked button's text
      const originalText = button.textContent;
      button.textContent = "Скопійовано!";
      setTimeout(() => (button.textContent = originalText), 2000);
    } catch (err) {
      console.log("Failed to copy!", err);
    }
  });
});

// For button in second (After payment) section
const copyFormBtn = document.getElementById("copyTemplate");
const formListItems = document.querySelectorAll("#template li");

copyFormBtn.addEventListener("click", async () => {
  // 1. Transform NodeList (elements) to lines array
  // .map() gets the text, and .join('\n') unite them from new line
  const wholeForm = Array.from(formListItems)
    .map((li) => li.innerText)
    .join("\n");

  try {
    // 2. Copy whole collected text
    await navigator.clipboard.writeText(wholeForm);

    // Visual feedback
    const originalText = copyFormBtn.textContent;
    copyFormBtn.textContent = "Текст шаблону скопійовано!";
    setTimeout(() => (copyFormBtn.textContent = originalText), 2000);
  } catch (err) {
    console.log("Failed to copy!", err);
  }
});
