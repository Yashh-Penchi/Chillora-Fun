async function loadIntoContent(url) {
  const spaRes = await fetch(url);
  const spaText = await spaRes.text();
  const spaDoc = new DOMParser().parseFromString(spaText, 'text/html');

  const spaBody = spaDoc.body.innerHTML;
  const scripts = spaDoc.querySelectorAll('script');

  document.getElementById('content').innerHTML = spaBody;

  scripts.forEach(s => {
    const newScript = document.createElement('script');

    if (s.src) {
      newScript.src = s.src;
    }
    
    if (s.innerHTML) {
      newScript.innerHTML = s.innerHTML;
    }
    document.body.appendChild(newScript);

    newScript.remove();
  });
}

// Load initial content
loadIntoContent('./htmlFiles/home.html');


// Header
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.borderBottom = '1px solid #554ddee9';
  } else {
    header.style.borderBottom = 'none';
  }
});


// Go to Top button
function goToTopShow() {
  document.getElementById('goToTop').style.display = 'block';
}
function goToTopHide() {
  document.getElementById('goToTop').style.display = 'none';
}
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    goToTopShow();
  } else {
    goToTopHide();
  }
});