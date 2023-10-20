// enter to dashboard

// Getting a reference to the button element
const dashboardButton = document.getElementById("daboButton");
dashboardButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the values entered by the user
        const emailInput = document.getElementById("email").value;
        const passwordInput = document.getElementById("password").value;

        // Check if the username and password match the expected values
        if (emailInput === "Agrinaut" && passwordInput === "agri123") {
            // Redirect to dashboard.html if the credentials are correct
            window.location.href = "dashboard.html";
        } else {
            // Display an error message or handle invalid credentials here
            alert("Invalid username or password. Please try again.");
        }
    });
