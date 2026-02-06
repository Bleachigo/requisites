// const copyIbanBtn = document.getElementById("copy-iban");
// const copyEdrpouBtn = document.getElementById("copy-edrpou");
// const copyPurposeBtn = document.getElementById("copy-purpose");
//
// const ibanNumber = document.getElementById("iban");
// const edrpouNumber = document.getElementById("edrpou");
// const paymentPurpose = document.getElementById("payment-purpose");

const copyButtons = document.querySelectorAll(".btn");

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    // const ibanToCopy = iban.innerText;
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
