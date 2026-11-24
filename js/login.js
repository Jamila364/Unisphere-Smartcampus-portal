const roleButtons = document.querySelectorAll('.role-option');
let selectedRole = 'student';
roleButtons.forEach(button => button.addEventListener('click', () => {
  roleButtons.forEach(item => item.classList.remove('active'));
  button.classList.add('active'); selectedRole = button.dataset.role;
}));
document.getElementById('togglePassword').addEventListener('click', () => {
  const password = document.getElementById('password');
  const showing = password.type === 'text'; password.type = showing ? 'password' : 'text';
  document.getElementById('togglePassword').textContent = showing ? 'Show' : 'Hide';
});
document.getElementById('loginForm').addEventListener('submit', event => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const error = document.getElementById('loginError');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { error.textContent = 'Please enter a valid email address.'; return; }
  if (password.length < 4) { error.textContent = 'Password must contain at least 4 characters for this demo.'; return; }
  error.textContent = '';
  localStorage.setItem('unisphereUser', JSON.stringify({name: email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), email, role: selectedRole}));
  window.location.href = selectedRole === 'admin' ? 'admin.html' : 'student.html';
});
