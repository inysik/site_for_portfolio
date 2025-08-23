document.getElementById('themeToggle').addEventListener('click', function() {
    const currentTheme = document.body.className;
    if (currentTheme === 'light-theme') {
      document.body.className = 'dark-theme';
      document.querySelector('header').style.background = ' rgb(0, 0, 0)'
      document.querySelector('main').style.background = ' rgb(0, 0, 0)'
      document.querySelector('main').style.color = 'white'
      document.querySelector('date').style.color = 'rgba(123, 123, 123, 1);'
    } else {
      document.body.className = 'light-theme';
      document.querySelector('header').style.background = ' rgba(250, 249, 249, 1)'
      document.querySelector('main').style.background = ' rgba(248, 247, 247, 1)'
      document.querySelector('main').style.color = 'black'
      document.querySelector('date').style.color = 'rgba(123, 123, 123, 1);'
    }
  });