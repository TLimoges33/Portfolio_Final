// Headers and Content Creation
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const Cybersecurity = document.querySelector('#cybersecurity');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');
const cybersecurityContent = document.querySelector('#cybersecurity-content');

// Event Listeners
about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    width: '600px',
    height: '600px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    // This is just me showing off button options
    buttons: [
      'min',
      'max',
      'full',
      'small',
      'zoom',
      'next',
      'prev',
      'index',
      'reset',
      'info',
      'download',
      'print',
      'close',
    ],
    onfocus: function () {
      this.setBackground('#00aa00');
    },
    onblur: function () {
      this.setBackground('#777');
    },
  });

  // Change the title after 3 seconds
  setTimeout(() => {
    aboutBox.setTitle('Informal Introductions');
  }, 10000);
});

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    width: '600px',
    height: '600px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: contactContent,
    // This is just me showing off button options
    buttons: [
      'min',
      'max',
      'full',
      'small',
      'zoom',
      'next',
      'prev',
      'index',
      'reset',
      'info',
      'download',
      'print',
      'close',
    ],
    onfocus: function () {
      this.setBackground('#00aa00');
    },
    onblur: function () {
      this.setBackground('#777');
    },
  });

  // Change the title after 10 seconds
  setTimeout(() => {
    aboutBox.setTitle('How to find me...');
  }, 10000);
});

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Cybersecurity Skills',
    width: '600px',
    height: '600px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: cybersecurityContent,
    // This is just me showing off button options
    buttons: [
      'min',
      'max',
      'full',
      'small',
      'zoom',
      'next',
      'prev',
      'index',
      'reset',
      'info',
      'download',
      'print',
      'close',
    ],
    onfocus: function () {
      this.setBackground('#00aa00');
    },
    onblur: function () {
      this.setBackground('#777');
    },
  });

  // Change the title after 10 seconds
  setTimeout(() => {
    aboutBox.setTitle('Cybersecurity Grimoire');
  }, 10000);
});
   