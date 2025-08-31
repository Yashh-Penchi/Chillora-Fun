async function loadIntoContent(url) {
  const spaRes = await fetch(url);
  const spaText = await spaRes.text();
  const spaDoc = new DOMParser().parseFromString(spaText, 'text/html');
  const spaBody = spaDoc.body.innerHTML;
  document.getElementById('content').innerHTML = spaBody;
}

// Home Page initial Call
loadIntoContent('./htmlFiles/home.html');


  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.borderBottom = '1px solid #554ddee9'; // border aa gaya
    } else {
      header.style.borderBottom = 'none'; // border hat gaya
    }
  });

// async function loadIntoContent(url) {
//   const spaRes = await fetch(url);
//   const spaText = await spaRes.text();
//   const spaDoc = new DOMParser().parseFromString(spaText, 'text/html');
//   const spaBody = spaDoc.body.innerHTML;
//   document.getElementById('content').innerHTML = spaBody;
// }

// async function initPage() {
//   await loadIntoContent('./htmlFiles/home.html');
//   initOtherPage(); //baad me load hoga
// }

// initPage();


