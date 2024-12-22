// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username and password are entered
    if (username && password) {
        // Save user credentials to localStorage (you can improve this in a real project)
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Display a simple success message
        alert('Login successful!');

        // Redirect to another page or perform further actions (optional)
        window.location.href = 'home.html';  // Redirect to a new page (create home.html)
    } else {
        alert('Please fill in both fields!');
    }// ตรวจสอบว่ามีข้อมูล 'username' ใน localStorage หรือไม่
if (localStorage.getItem('username') !== null) {
    console.log('มีข้อมูลผู้ใช้');
} else {
    console.log('ไม่มีข้อมูลผู้ใช้');
}
});