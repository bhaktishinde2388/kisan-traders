
  const submitBtn = document.getElementById('submitBtn');
  const popup = document.getElementById('popup');
  const description = document.getElementById('description');
   submitBtn.addEventListener('click', function() {
    showPopup();
  });


  function showPopup() {
    const review = description.value;
    const message = `Review: ${review}`;
    alert(message);
    resetForm();
  }

  function resetForm() {
    description.value = '';
  }