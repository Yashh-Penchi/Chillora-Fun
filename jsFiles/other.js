
function contactValidation() {
      const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      document.getElementById('nameError').style.display = 'none';
      document.getElementById('emailError').style.display = 'none';
      document.getElementById('messageError').style.display = 'none';

      let valid = true;

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if(name === '') {
        document.getElementById('nameError').style.display = 'block';
        valid = false;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if(!emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        valid = false;
      }

      if(message === '') {
        document.getElementById('messageError').style.display = 'block';
        valid = false;
      }

      if(valid) {
        alert("Thank you! Your message has been sent. 🌟");
        form.reset();
        document.getElementById('emailError').style.display = 'none';
        document.getElementById('nameError').style.display = 'none';
        document.getElementById('messageError').style.display = 'none';
      }
    });
}

