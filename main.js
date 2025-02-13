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
    buttons: [
      'min',
      'max',
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
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  },
});

