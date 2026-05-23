// ── SIGN UP ──
function signUp() {
   const name = document.getElementById('signupName').value.trim();
   const email = document.getElementById('signupEmail').value.trim();
   const password = document.getElementById('signupPassword').value;
   const confirm = document.getElementById('signupConfirm').value;

   if (!name || !email || !password || !confirm) {
      alert('Please fill in all fields.');
      return;
   }

   if (password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
   }

   if (password !== confirm) {
      alert('Passwords do not match.');
      return;
   }

   // Save user to localStorage
   const user = {
      name,
      email,
      password
   };
   localStorage.setItem('registeredUser', JSON.stringify(user));

   alert('Account created! Please login.');
   window.location.href = 'login.html';
}

// ── LOGIN ──
function login() {
   const email = document.getElementById('loginEmail').value.trim();
   const password = document.getElementById('loginPassword').value;
   const errorMsg = document.getElementById('loginError');

   const savedUser = JSON.parse(localStorage.getItem('registeredUser'));

   if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
      errorMsg.classList.remove('hidden');
      return;
   }

   errorMsg.classList.add('hidden');

   // Save logged in user
   localStorage.setItem('loggedInUser', JSON.stringify(savedUser));
   window.location.href = 'home.html';
}

// ── PROTECT HOME PAGE ──
function checkLogin() {
   const user = JSON.parse(localStorage.getItem('loggedInUser'));

   if (!user) {
      // Not logged in — redirect to login
      window.location.href = 'login.html';
      return;
   }

   // Show welcome message
   document.getElementById('welcomeUser').textContent = 'Hi, ' + user.name;
   document.getElementById('heroGreeting').textContent = 'Welcome, ' + user.name + '!';
}

// ── LOGOUT ──
function logout() {
   localStorage.removeItem('loggedInUser');
   window.location.href = 'login.html';
}

// ── MOBILE MENU ──
function toggleMenu() {
   document.getElementById('navLinks').classList.toggle('open');
}

// Mobile dropdown toggle
document.querySelectorAll('.dropdown > a').forEach(link => {
   link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
         e.preventDefault();
         this.parentElement.classList.toggle('open');
      }
   });
});

// Run checkLogin only on home page
if (document.getElementById('heroGreeting')) {
   checkLogin();
}
