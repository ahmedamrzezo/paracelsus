(() => {
  const model = {
    // Main navigation data
    mainNav: [
      '5-bereiche',
      'programm',
      'referenten',
      'hotels',
      'iso-zertifizierung',
      'sponsoren & partner',
      'tagungsort',
      'kontakt'
    ],

    bereiches: [
      {
        name: 'fortbildung',
        desc: 'Lorem ipsum dolor sit amet, duo at affert veritus sententiae, usu ne duis offendit, utinam molestie nam ei. Lorem ipsum dolor sit amet.',
        button: 'Mehr erfahren'
      },
      
      {
        name: 'galadinner',
        desc: 'Lorem ipsum dolor sit amet, duo at affert veritus sententiae, usu ne duis offendit, utinam molestie nam ei. Lorem ipsum dolor sit amet.',
        button: 'Mehr erfahren'
      },
      {
        name: 'workshops',
        desc: 'Lorem ipsum dolor sit amet, duo at affert veritus sententiae, usu ne duis offendit, utinam molestie nam ei. Lorem ipsum dolor sit amet.',
        button: 'Mehr erfahren'
      },
      {
        name: 'messe',
        desc: 'Lorem ipsum dolor sit amet, duo at affert veritus sententiae, usu ne duis offendit, utinam molestie nam ei. Lorem ipsum dolor sit amet.',
        button: 'Mehr erfahren'
      },
      {
        name: 'iso-zertifizierung',
        desc: 'Lorem ipsum dolor sit amet, duo at affert veritus sententiae, usu ne duis offendit, utinam molestie nam ei. Lorem ipsum dolor sit amet.',
        button: 'Mehr erfahren'
      },
      
    ],

    programms: [
      {
        date: 'Freitag, 14. Dezember 2018',
        desc: 'Lorem ipsum dolor sit amet, qui veniam dissentias. Sed et amet velit elaboraret, ei eos soleat invidunt adversarium, suas adipisci an quo.'
      },
      {
        date: 'Samstag, 13. Dezember 2018',
        desc: ' velit elaboraret, ei eos soleat invidunt adversarium, suas adipisci an quo.'
      },
      {
        date: 'Sonntag, 12. Dezember 2018',
        desc: 'Lorem sci an quo.'
      },
    ],

    speakers: [
      {
        imgPath: 'images/person0',
        desc: 'Vor- und Nachname Position',
      },
      {
        imgPath: 'images/person0',
        desc: 'Vor- und Nachname Position',
      },
      {
        imgPath: 'images/person0',
        desc: 'Vor- und Nachname Position',
      },
      {
        imgPath: 'images/person0',
        desc: 'Vor- und Nachname Position',
      },
      {
        imgPath: 'images/person0',
        desc: 'Vor- und Nachname Position',
      },
      {
        imgPath: 'images/person0',
        desc: 'Vor- und Nachname Position',
      },
      {
        imgPath: 'images/person0',
        desc: 'Vor- und Nachname Position',
      },
      {
        imgPath: 'images/person0',
        desc: 'Vor- und Nachname Position',
      },
    ],

    hotels: [
      {
        name: 'Hotel Lorem ipsum',
        imgPath: 'images/hotel0',
        desc: 'Vor- und Nachname Position',
      },
      {
        name: 'Hotel Lorem ipsum',
        imgPath: 'images/hotel0',
        desc: 'Vor- und Nachname Position',
      },
      {
        name: 'Hotel Lorem ipsum',
        imgPath: 'images/hotel0',
        desc: 'Vor- und Nachname Position',
      },
      {
        name: 'Hotel Lorem ipsum',
        imgPath: 'images/hotel0',
        desc: 'Vor- und Nachname Position',
      },
      {
        name: 'Hotel Lorem ipsum',
        imgPath: 'images/hotel0',
        desc: 'Vor- und Nachname Position',
      },
      {
        name: 'Hotel Lorem ipsum',
        imgPath: 'images/hotel0',
        desc: 'Vor- und Nachname Position',
      },
      {
        name: 'Hotel Lorem ipsum',
        imgPath: 'images/hotel0',
        desc: 'Vor- und Nachname Position',
      },
      {
        name: 'Hotel Lorem ipsum',
        imgPath: 'images/hotel0',
        desc: 'Vor- und Nachname Position',
      },
    ],

    iso: [
      'Lorem ipsum dolor sit amet, duo at affert veritus sententiae, usu ne duis offendit, utinam molestie nam ei. Lorem ipsum dolor sit amet.',
      'usu ne duis offendit, utinam molestie nam ei.',
      'at affert veritus sententiae, usu ne duis offendit, utinam molestie nam ei. Lorem ipsum dolor sit amet.',
    ],
    
    sponsors: [
      {
        name: 'Hintergrund-Kopie',
        logo: 'images/'
      },
      {
        name: 'Hintergrund-Kopie',
        logo: 'images/'
      },
      {
        name: 'Hintergrund-Kopie',
        logo: 'images/'
      },
      {
        name: 'Hintergrund-Kopie',
        logo: 'images/'
      },
      {
        name: 'Hintergrund-Kopie',
        logo: 'images/'
      },
      {
        name: 'Hintergrund-Kopie',
        logo: 'images/'
      },
      {
        name: 'Hintergrund-Kopie',
        logo: 'images/'
      },
      {
        name: 'Hintergrund-Kopie',
        logo: 'images/'
      },
    ],

    formData: [
      {
        for: 'first-name',
        type: 'text',
        placeholder: 'Vorname',
        required: false
      },
      {
        for: 'last-name',
        type: 'text',
        placeholder: 'Nachname',
        required: false
      },
      {
        for: 'email',
        type: 'email',
        placeholder: 'E-Mail*',
        required: true
      },
      {
        for: 'phone-number',
        type: 'tel',
        placeholder: 'Mobilfunknummer',
        required: false
      },
      {
        for: 'message',
        type: 'text',
        placeholder: 'Ihre Nachricht*',
        required: true
      }
    ]
  }

  const controller = {

    init() {
      viewNav.init();
      viewBereiches.init();
      viewProgramm.init();
      viewSpeakers.init();
      viewHotels.init();
      viewIso.init();
      viewSponsors.init();
      viewContactForm.init();
    },

    getNav() {
      return model.mainNav;
    },

    getFeatures() {
      return model.bereiches;
    },
    getProgrammes() {
      return model.programms;
    },
    getSpeaker() {
      return model.speakers;
    },
    getHotels() {
      return model.hotels;
    },
    getIso() {
      return model.iso;
    },
    getSponsors() {
      return model.sponsors;
    },
    getFormData() {
      return model.formData;
    }
  }

  const viewNav = {

    // Initialize the nav view
    init() {
      this.header = document.querySelector('.header');
      this.nav = document.querySelector('.header__nav');
      this.hamburgerMenu = document.querySelector('.header__hamburger');
      this.body = document.querySelector('body');
      
      this.render();
    },

    render() {
      // Getting the links data
      this.navData = controller.getNav();

      // Display the link
      this.displayLinks = (() => {
        this.navData.forEach((link) => {
          this.nav.insertAdjacentHTML(
            'beforeend', 
            `<a href="#${link}" class="header__nav--link">${link}</a>`
          );
        });
        return this.nav.childNodes;
      })();

      // Make links scroll with animation
      this.linksScrolls = (() => {
        for(let link of this.displayLinks) {
          if (link.hash !== "") {
            link.addEventListener('click', (e) => {
              e.preventDefault();
              const hash = link.innerText.toLowerCase();
              const pos = document.getElementById(hash).offsetTop;
              
              if (this.header.classList.contains('nav-expand')) {
                this.header.classList.remove('nav-expand');
              }

              window.scroll({
                top: pos - this.nav.parentNode.clientHeight,
                behavior: 'smooth' 
              });
            })
          }
        }
      })();

      window.addEventListener(
        'scroll',
        () => {
          if (window.scrollY >= 150) {
            this.nav.parentNode.style.padding = '20px';
          } else {
            this.nav.parentNode.style.padding = '44px';
          }
        }
      );

      this.hamburgerMenu.addEventListener(
        'click', () => {
          this.header.classList.toggle('nav-expand');
        });
    }

  }

  const viewBereiches = {
    init() {
      this.bereichesSection = document.querySelector('.bereiches')

      this.render();
    },
    
    render() {
      this.features = controller.getFeatures();

      this.features.forEach((feature) => {
        this.bereichesSection.insertAdjacentHTML('beforeend',
          `
          <div class="bereiches__feature">
            <div class="row justify-content-center">
              <div class="col-sm-4">
                <img src="images/${feature.name}.jpg" alt="${feature.name}">
              </div>
              <div class="col-sm-1"></div>
              <div class="col-sm-4">
                <h2>${feature.name}</h2>
                <p>${feature.desc}</p>
                <a class="btn btn-primary" href="https:www.google.com" target="_blank" rel="nofollow">${feature.button}</a>
              </div>
            </div>
          </div>`
        );
      });
    }
  }

  const viewProgramm = {
    init() {
      this.programmContent = document.querySelector('.programm__content');
      
      this.render();
    },

    render() {
      this.progs = controller.getProgrammes();

      this.progs.forEach((prog) => {
        this.programmContent.insertAdjacentHTML('beforeend',
        `
        <div class="programm__content--prog">
          <span class="date">${prog.date}</span>
          <p>${prog.desc}</p>
          <a href="https:www.google.com" target="_blank" rel="nofollow">Detail</a>
        </div>
        `
        )
      })
    }
  }

  const viewSpeakers = {
    init() {
      this.speakerSection = document.querySelector('.speakers .row .col-md-9 .row');

      this.render();
    },

    render() {
      this.speakers = controller.getSpeaker();

      this.speakers.forEach((sp, i) => {
        this.speakerSection.insertAdjacentHTML('beforeend',
        `
        <div class="col-sm-3">
          <div class="speakers__img">
            <img 
            src="${sp.imgPath}${i+1}.jpg" 
            srcset="${sp.imgPath}${i+1}.jpg, ${sp.imgPath}${i+1}@2x.jpg 2x"
            alt="Speaker">
          </div>

          <div class="speakers__text">
            <h4>${sp.desc}</h4>
          </div>
        </div>
        `
        );
      })
    }
  }

  const viewHotels = {
    init() {
      this.hotelSection = document.querySelector('.hotels .row .col-md-9 .row');

      this.render();
    },

    render() {
      this.hotels = controller.getHotels();

      this.hotels.forEach((hotel, i) => {
        this.hotelSection.insertAdjacentHTML('beforeend',
        `
        <div class="col-md-3 col-6">
          <div class="hotels__img">
            <img 
            src="${hotel.imgPath}${i+1}.jpg" 
            srcset="${hotel.imgPath}${i+1}.jpg, ${hotel.imgPath}${i+1}@2x.jpg 2x"
            alt="${hotel.name}">
          </div>

          <div class="hotels__text">
            <h4>${hotel.name}</h4>
            <p>${hotel.desc}</p>
            <a class="btn btn-primary" href="https:www.google.com" target="_blank" rel="nofollow">Mehr</a>
          </div>
        </div>
        `
        );
      });
    }
  }

  const viewIso = {
    init() {
      this.isoSec = document.querySelector('.iso .row .col-md-8 .row');
      
      this.render();
    },

    render() {
      this.iso = controller.getIso();

      this.iso.forEach((tex) => {
        this.isoSec.insertAdjacentHTML('beforeend',
        `
        <div class="col-md-12">
          <div class="iso__content">
            ${tex}
          </div>
        </div>
        `
        );
      });
    }
  }

  const viewSponsors = {
    init() {
      this.sponsorsSec = document.querySelector('.sponsors .row .col-md-8 .row');
      
      this.render()
    },

    render() {
      this.sponsors = controller.getSponsors();

      for(let sponsor of this.sponsors) {
        this.sponsorsSec.insertAdjacentHTML('beforeend', 
        `
          <div class="col-md-3 col-4">
            <div class="sponsors__logo">
              <img 
              src="${sponsor.logo}${sponsor.name}.png"
              srcset="${sponsor.logo}${sponsor.name}.png, ${sponsor.logo}${sponsor.name}.png 2x"
              alt="${sponsor.name}"
              >
            </div>
          </div>
        `
        );
      }

    }
  }

  const viewContactForm = {
    init() {
      this.form = document.querySelector('.contact .row .col-md-6 form .row');
      
      this.render();
    },

    render() {
      this.formFields = controller.getFormData();

      
      for ( let field of this.formFields ) {
        let colsNum = 12;
        let html = '';
        
        if ( field.for === 'first-name' || field.for === 'last-name') {
          colsNum = 6;
        }

        if ( field.for === 'message') {
          html = `
          <fieldset class="col-md-${colsNum}">
            <label class="sr-only" for="${field.for}"></label>
            <textarea id="${field.for}" type="${field.type}" placeholder="${field.placeholder}"></textarea>
          </fieldset>
        `;
        } else {
          html = `
          <fieldset class="col-md-${colsNum}">
            <label class="sr-only" for="${field.for}"></label>
            <input id="${field.for}" type="${field.type}" placeholder="${field.placeholder}" ${field.required ? 'required' : ''}>
          </fieldset>
        `;
        }

        this.form.insertAdjacentHTML('beforeend', html);
      }
    }
  }

  controller.init();
})();