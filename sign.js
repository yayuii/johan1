document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve entered username and password
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // You can implement your sign-in logic here
    // For simplicity, let's just log the credentials for now
    console.log("Username:", username);
    console.log("Password:", password);
  });
  