/***************************************************
 *  email.js – Contact Form via EmailJS
 *  Service: service_qpw6osn
 *  Template: template_fyaskii
 ***************************************************/

// Initialize EmailJS with your PUBLIC KEY
(function() {
  emailjs.init("XB9YzRZu4mGhTq2bQ");   // ← Your real public key
})();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Get values from the form
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const messageText = form.message.value.trim();

    // Basic validation
    if (!name || !email || !messageText) {
      formMessage.style.display = "block";
      formMessage.innerHTML = "❌ Please fill all required fields.";
      formMessage.style.color = "#ef4444";
      return;
    }

    // Show loading state
    const button = form.querySelector("button[type='submit']");
    const originalText = button.textContent;
    button.disabled = true;
    button.innerHTML = "⏳ Sending...";

    // Send with EXACT template parameter names
    emailjs.send("service_qpw6osn", "template_fyaskii", {
      from_name: name,          // ← matches {{from_name}}
      from_email: email,        // ← matches {{from_email}}
      email: email,             // ← matches {{email}} if your template uses it
      subject: subject,         // ← matches {{subject}}
      message: messageText,     // ← matches {{message}}
      time: new Date().toLocaleString()  // ← matches {{time}}
    })
    .then(() => {
      formMessage.style.display = "block";
      formMessage.innerHTML = "✅ Message sent successfully! I will reply soon.";
      formMessage.style.color = "#10b981";
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      formMessage.style.display = "block";
      formMessage.innerHTML = "❌ Failed to send. Please try again later.";
      formMessage.style.color = "#ef4444";
    })
    .finally(() => {
      button.disabled = false;
      button.innerHTML = originalText;
      // Auto-hide message after 5 seconds
      setTimeout(() => {
        formMessage.style.display = "none";
      }, 5000);
    });
  });
});