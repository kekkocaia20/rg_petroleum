document.getElementById('accept-cookies').addEventListener('click', function() {
    document.getElementById('cookie-banner').style.display = 'none';
    sessionStorage.setItem('cookies-accepted', 'true');
  });
  
  // Se l'utente ha già accettato i cookie, nascondi il banner
  if (sessionStorage.getItem('cookies-accepted') === 'true') {
    document.getElementById('cookie-banner').style.display = 'none';
  }
  
