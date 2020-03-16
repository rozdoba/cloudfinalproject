/**
 * Toggles between hiding/clearing the 'add artist' form, and displaying the 
 * 'add artist' form.
 */
function toggleForm() {
    var formContainer = document.getElementById("form-container");
    var artistForm = document.getElementById("artist-form");
    if (formContainer.style.display === "block") {
      artistForm.artistName.value="";
      artistForm.artistDescription.value="";
      artistForm.artistURL.value="";
      formContainer.style.display = "none";
    } else {
      formContainer.style.display = "block";
    }
}