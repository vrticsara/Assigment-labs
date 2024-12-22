function giveRating(element, rating) {
    const hearts = element.parentNode.querySelectorAll('span');

    hearts.forEach((heart, index) => {
        if (index < rating) {
            heart.classList.add('active');
        } else {
            heart.classList.remove('active');
        }
    });

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            movieId: 1, 
            rating: rating
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        alert(`Thanks for your feedback! You gave ${rating} heart(s).`);
        console.log('Feedback sent:', data);
    })
    .catch(error => {
        alert('There was an error sending your feedback. Please try again.');
        console.error('Error:', error);
    });
}
function openModal(imageElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    modal.style.display = "block"; 
    modalImg.src = imageElement.src; 
    captionText.innerHTML = imageElement.alt; 
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; 
}
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
const form = document.getElementById("contactForm");
form.addEventListener("submit", (event) => {
  const password = document.getElementById("password").value;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (!passwordPattern.test(password)) {
    alert("Password must be at least 8 characters long, include an uppercase letter, and a number.");
    event.preventDefault();
  }
});