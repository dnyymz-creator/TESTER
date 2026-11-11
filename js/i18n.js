/**
 * CIDHIG — Sistema de Internacionalización (i18n) Bilingüe (Español / Inglés)
 * Detección automática para usuarios fuera de México -> Inglés
 * Usuarios dentro de México -> Español
 * Selector manual (ES | EN) en navbar y menú móvil con persistencia en localStorage
 */
(function() {
  'use strict';

  var translations = {
    es: {
      // Metas
      'meta.title': 'Comisión Internacional de Derechos Humanos por la Igualdad de Género | CIDHIG México',
      'meta.desc': 'Comisión Internacional de Derechos Humanos por la Igualdad de Género (CIDHIG). Organismo autónomo dedicado a la defensa legal de víctimas, derechos humanos fundamentales y paridad de género en México.',

      // Navbar
      'nav.about': 'Quiénes Somos',
      'nav.services': 'Servicios',
      'nav.team': 'Integrantes',
      'nav.coverage': 'Cobertura',
      'nav.actions': 'Acciones',
      'nav.contact': 'Contacto',
      'nav.mobile.about': 'Quiénes Somos',
      'nav.mobile.services': 'Servicios y Acreditaciones',
      'nav.mobile.team': 'Cuerpo Colegiado e Integrantes',
      'nav.mobile.coverage': 'Cobertura Territorial',
      'nav.mobile.actions': 'Acciones y Proyectos',
      'nav.mobile.contact': 'Contactar a la Comisión',
      'lang.label': 'Idioma',

      // Hero
      'hero.goldTitle': 'COMISIÓN INTERNACIONAL DE DERECHOS HUMANOS',
      'hero.whiteSubtitle': 'Por la Igualdad de Género',
      'hero.continue': 'CONTINUAR',

      // Quiénes Somos
      'about.badge': 'Quiénes Somos',
      'about.title': 'Comisión Internacional de Derechos Humanos por la Igualdad de Género',
      'about.desc': 'Somos una comisión no gubernamental sin fines de lucro creada para ayudar, promover y defender los derechos humanos de México. Brindando ayuda social y acompañamiento legal a víctimas y grupos vulnerables, e impulsando acciones permanentes de cultura y paz.',
      'about.btnWork': 'Conoce nuestra labor',
      'about.btnContact': 'Contáctanos',
      'about.follow': 'Síguenos:',
      'about.card.badge': 'Naturaleza Institucional',
      'about.card.title': 'Una Comisión al servicio de los Derechos Humanos',
      'about.card.desc': 'Trabajamos todos los días para promover, proteger y defender los Derechos Humanos en México, brindando apoyo social, orientación y acompañamiento legal a quienes lo necesitan.',
      'about.card.b1': 'Estatus consultivo y acreditación de observancia en tratados de derechos fundamentales y de las mujeres.',
      'about.card.b2': 'Asistencia jurídica gratuita con acompañamiento integral a víctimas y grupos prioritarios.',
      'about.metrics.states': 'Entidades Activas',
      'about.metrics.commissioners': 'Comisionados Federales',
      'about.metrics.resolutions': 'Resoluciones Emitidas',
      'about.metrics.lives': 'Vidas Tocadas',

      // Servicios
      'services.badge': 'Capacidad y Competencias',
      'services.title': 'Servicios y Acreditaciones',
      'services.desc': 'Programas integrales de amparo ciudadano, asesoría legal especializada y articulación con organismos de derechos humanos.',
      'services.c1.title': 'Defensa Jurídica y Asistencia Legal',
      'services.c1.desc': 'Orientación legal gratuita, canalización de amparos y defensa técnica en casos de violaciones graves a los derechos humanos y abusos institucionales.',
      'services.c1.badge': 'Acompañamiento Jurídico',
      'services.c2.title': 'Equidad de Género y Atención a Víctimas',
      'services.c2.desc': 'Defensa integral para mujeres víctimas de violencia de género, protocolos de acompañamiento psicosocial y medidas de protección urgente.',
      'services.c2.badge': 'Igualdad Sustantiva',
      'services.c3.title': 'Acreditaciones y Observancia Internacional',
      'services.c3.desc': 'Estatus consultivo, monitoreo de tratados internacionales (CEDAW, OEA, ONU) y formulación de informes independientes sobre garantías individuales.',
      'services.c3.badge': 'Tratados y Monitoreo',
      'services.c4.title': 'Atención y Enlace Comunidad LGBTIQ+',
      'services.c4.desc': 'Mecanismos contra la discriminación, defensa del libre desarrollo de la personalidad y garantía de acceso paritario a la salud, identidad y justicia.',
      'services.c4.badge': 'Diversidad e Inclusión',
      'services.c5.title': 'Atención a Personas con Discapacidad',
      'services.c5.desc': 'Coordinación especializada para la eliminación de barreras físicas y normativas, promoviendo la inclusión laboral y el pleno ejercicio de derechos civiles.',
      'services.c5.badge': 'Accesibilidad Plena',
      'services.c6.title': 'Ayuda Humanitaria y Cultura de Paz',
      'services.c6.desc': 'Brigadas territoriales de apoyo alimentario en hospitales y colonias marginadas, junto a foros de capacitación a servidores públicos y talleres juveniles.',
      'services.c6.badge': 'Paz y Solidaridad',

      // Integrantes
      'team.badge': 'Cuerpo Colegiado',
      'team.title': 'Nuestro Equipo',
      'team.desc': 'Profesionales del derecho, activistas y defensores comprometidos con la paridad sustantiva y la justicia social.',
      'team.m1.role': 'Presidenta Internacional y Defensora de Derechos Humanos',
      'team.m1.tag': 'Presidencia CIDHIG',
      'team.m2.role': 'Secretario General',
      'team.m2.tag': 'Secretaría General',
      'team.m3.role': 'Abogada de Despacho Jurídico',
      'team.m3.tag': 'Defensoría Jurídica',
      'team.m4.role': 'Directora de Asuntos Jurídicos y Comisionada Internacional',
      'team.m4.tag': 'Dirección Jurídica',
      'team.m5.role': 'Atención de Enlace Comunidad LGBTIQ+ y Comisionado Federal',
      'team.m5.tag': 'Enlace Diversidad',
      'team.m6.role': 'Activista y Defensora de Derechos Humanos',
      'team.m6.tag': 'Defensoría de Base',
      'team.m7.role': 'Coordinador de Atención a Personas con Discapacidad',
      'team.m7.tag': 'Inclusión y Accesibilidad',
      'team.m8.role': 'Comisionado Internacional y Coordinador Culiacán Sinaloa',
      'team.m8.tag': 'Coordinación Sinaloa',

      // Cobertura
      'coverage.badge': 'Presencia en el Territorio',
      'coverage.title': 'Cobertura Nacional',
      'coverage.desc': 'Comisiones activas y representaciones ciudadanas en constante expansión para garantizar cercanía con cada comunidad.',
      'coverage.active': 'Sedes Activas (Negro)',
      'coverage.selected': 'Sede Seleccionada (Dorado)',
      'coverage.activeBadge': 'Sede Activa',
      'coverage.contactBranch': 'Contactar a esta sede',
      'coverage.upcoming': 'Próximamente',
      'coverage.hint': 'Haz clic en cualquier pin o entidad federativa',
      'coverage.footerHint': 'Haz clic sobre cualquier estado para consultar defensorías habilitadas y comisiones locales.',

      // Portafolio / Acciones
      'actions.badge': 'Evidencia y Resultados',
      'actions.title': 'Acciones en Territorio',
      'actions.desc': 'Campañas humanitarias, foros de pacificación, alianzas institucionales y despliegue vehicular en comunidades de México.',
      'actions.filter.all': 'Todos',
      'actions.filter.food': 'Apoyo Alimentario',
      'actions.filter.forum': 'Foros y Capacitación',
      'actions.filter.peace': 'Cultura de Paz',
      'actions.filter.leadership': 'Liderazgo Institucional',
      'actions.filter.deployment': 'Despliegue Territorial',
      'actions.photos': 'Fotos',
      'actions.viewGallery': 'Ver galería completa',
      'actions.officialBadge': 'Acción oficial CIDHIG',
      'actions.modalBtn': 'Solicitar información',
      'actions.p1.title': 'Solidaridad que Alimenta: Apoyo Alimentario',
      'actions.p1.desc': 'Cenas solidarias en hospitales y donaciones directas de insumos nutricionales a familias de escasos recursos.',
      'actions.p2.title': 'Formación con Perspectiva de Género',
      'actions.p2.desc': 'Encuentros formativos con servidores públicos para fortalecer protocolos de prevención y atención a mujeres.',
      'actions.p3.title': 'Mensajeros de Paz: Semillas de Esperanza',
      'actions.p3.desc': 'Arte y diálogo infantil y juvenil para construir convivencia respetuosa y reconciliación ciudadana.',
      'actions.p4.title': 'Liderazgo Institucional y Alianzas',
      'actions.p4.desc': 'Fortalecimiento de la red de comisionadas y articulación con organismos civiles y órdenes de gobierno.',
      'actions.p5.title': 'Flota Institucional de Despliegue',
      'actions.p5.desc': 'Vehículos de apoyo para transporte de víveres, asesorías itinerantes y presencia directa en comunidades.',

      // Contacto
      'contact.badge': 'Canal Oficial de Peticiones',
      'contact.title': 'Estamos para escucharte y defenderte',
      'contact.desc': 'Si requieres orientación jurídica inmediata, deseas denunciar una vulneración a derechos fundamentales o sumar a tu colectivo al consejo consultivo, contáctanos directamente.',
      'contact.emailLabel': 'Correo Institucional',
      'contact.phoneLabel': 'Línea Directa Nacional',
      'contact.addressLabel': 'Sede Central',
      'contact.mapsLink': 'Ver ubicación en Google Maps (Ficha Oficial)',
      'contact.confidentiality': 'Tratamiento estrictamente confidencial de datos personales y solicitudes, conforme a protocolos internacionales de protección a víctimas y defensores.',
      'contact.formTitle': 'Envíanos un mensaje directo',
      'contact.formDesc': 'Completa tus datos para canalizar tu solicitud a nuestra secretaría ejecutiva o vincularte por WhatsApp.',
      'contact.fieldName': 'Nombre Completo',
      'contact.phName': 'Ej. Lic. Mariana Torres',
      'contact.fieldPhone': 'Teléfono / WhatsApp',
      'contact.phPhone': 'Ej. 55 1234 5678',
      'contact.fieldState': 'Estado / Municipio',
      'contact.phState': 'Ej. Sinaloa / Culiacán',
      'contact.fieldSubject': 'Asunto o Tipo de Caso',
      'contact.phSubject': 'Ej. Solicitud de asesoría jurídica o vinculación comunitaria',
      'contact.fieldMessage': 'Mensaje o Resumen de Hechos',
      'contact.phMessage': 'Describe brevemente la situación y tu medio de contacto preferido...',
      'contact.btnWhatsApp': 'Enviar vía WhatsApp',
      'contact.disclaimer': 'Tus datos son tratados bajo estricta confidencialidad conforme a la LFPDPPP de México. Al contactar aceptas nuestro <a href="./privacidad.html" target="_blank" class="text-verde-nopal underline font-semibold">Aviso de Privacidad</a> y <a href="./aviso-legal.html" target="_blank" class="text-verde-nopal underline font-semibold">Aviso Legal</a>.',

      // WhatsApp flotante
      'whatsapp.pill': '¿Requieres orientación jurídica?',

      // Footer
      'footer.tagline': '"La igualdad no es un favor. Es un derecho."',
      'footer.bio': 'Comisión Internacional de Derechos Humanos por la Igualdad de Género. Organismo autónomo dedicado a la defensa, monitoreo y consolidación de la equidad en el plano diplomático y comunitario.',
      'footer.navTitle': 'Navegación Institucional',
      'footer.navHome': 'Inicio',
      'footer.navAbout': 'Quiénes Somos',
      'footer.navServices': 'Servicios y Acreditaciones',
      'footer.navTeam': 'Cuerpo Colegiado',
      'footer.navCoverage': 'Presencia Territorial',
      'footer.navActions': 'Acciones y Proyectos',
      'footer.navContact': 'Contacto y Peticiones',
      'footer.channelsTitle': 'Canales Oficiales',
      'footer.channelsDesc': 'Coordinación permanente y difusión institucional abierta.',
      'footer.copyright': '© 2026 Comisión Internacional de Derechos Humanos por la Igualdad de Género. Todos los derechos reservados.',
      'footer.privacy': 'Aviso de Privacidad (LFPDPPP)',
      'footer.legal': 'Aviso Legal y Estatutos',
      'footer.transparency': 'Transparencia OSC',
      'footer.cookies': 'Configuración de Cookies',

      // Cookies
      'cookies.title': 'Privacidad y Uso de Cookies',
      'cookies.desc': 'Utilizamos cookies esenciales y de análisis anónimo para garantizar la seguridad y funcionamiento de este portal. Conoce nuestras prácticas en el <a href="./privacidad.html" target="_blank" class="cookie-link">Aviso de Privacidad</a> y <a href="./aviso-legal.html" target="_blank" class="cookie-link">Aviso Legal</a>.',
      'cookies.btnEssential': 'Sólo Esenciales',
      'cookies.btnAccept': 'Aceptar Cookies'
    },

    en: {
      // Metas
      'meta.title': 'International Commission on Human Rights for Gender Equality | CIDHIG Mexico',
      'meta.desc': 'International Commission on Human Rights for Gender Equality (CIDHIG). Autonomous organization dedicated to legal defense of victims, fundamental human rights, and gender equity in Mexico.',

      // Navbar
      'nav.about': 'About Us',
      'nav.services': 'Services',
      'nav.team': 'Team',
      'nav.coverage': 'Coverage',
      'nav.actions': 'Actions',
      'nav.contact': 'Contact',
      'nav.mobile.about': 'About Us',
      'nav.mobile.services': 'Services & Accreditations',
      'nav.mobile.team': 'Collegiate Body & Team',
      'nav.mobile.coverage': 'Territorial Coverage',
      'nav.mobile.actions': 'Actions & Projects',
      'nav.mobile.contact': 'Contact the Commission',
      'lang.label': 'Language',

      // Hero
      'hero.goldTitle': 'INTERNATIONAL COMMISSION ON HUMAN RIGHTS',
      'hero.whiteSubtitle': 'For Gender Equality',
      'hero.continue': 'CONTINUE',

      // Quiénes Somos
      'about.badge': 'About Us',
      'about.title': 'International Commission on Human Rights for Gender Equality',
      'about.desc': 'We are an independent, non-profit human rights commission established to promote, uphold, and protect fundamental rights across Mexico. Providing humanitarian aid and legal defense to victims and marginalized communities, while driving sustained peace initiatives.',
      'about.btnWork': 'Explore our work',
      'about.btnContact': 'Contact us',
      'about.follow': 'Follow us:',
      'about.card.badge': 'Institutional Nature',
      'about.card.title': 'A Commission Dedicated to Human Rights',
      'about.card.desc': 'We work every day to promote, protect, and uphold Human Rights in Mexico, providing social support, guidance, and legal representation to those who need it most.',
      'about.card.b1': 'Consultative status and oversight accreditation under fundamental human and women’s rights treaties.',
      'about.card.b2': 'Free legal assistance with comprehensive guidance for victims and priority groups.',
      'about.metrics.states': 'Active States',
      'about.metrics.commissioners': 'Federal Commissioners',
      'about.metrics.resolutions': 'Issued Resolutions',
      'about.metrics.lives': 'Lives Impacted',

      // Servicios
      'services.badge': 'Capabilities & Scope',
      'services.title': 'Services & Accreditations',
      'services.desc': 'Comprehensive citizen protection programs, specialized legal defense, and direct coordination with human rights bodies.',
      'services.c1.title': 'Legal Defense & Legal Assistance',
      'services.c1.desc': 'Free legal counsel, amparo litigation, and technical defense in cases of severe human rights violations and institutional abuse.',
      'services.c1.badge': 'Legal Representation',
      'services.c2.title': 'Gender Equality & Victim Support',
      'services.c2.desc': 'Comprehensive legal defense for women victims of gender-based violence, psychosocial care protocols, and urgent protective measures.',
      'services.c2.badge': 'Substantive Equality',
      'services.c3.title': 'Accreditations & International Oversight',
      'services.c3.desc': 'Consultative status, monitoring of international treaties (CEDAW, OAS, UN), and independent reporting on individual guarantees.',
      'services.c3.badge': 'Treaties & Monitoring',
      'services.c4.title': 'LGBTIQ+ Community Liaison & Support',
      'services.c4.desc': 'Anti-discrimination mechanisms, defense of personal development, and guaranteed equal access to health, legal identity, and justice.',
      'services.c4.badge': 'Diversity & Inclusion',
      'services.c5.title': 'Disability Care & Inclusion',
      'services.c5.desc': 'Specialized coordination to eliminate physical and legal barriers, promoting workplace inclusion and full exercise of civil rights.',
      'services.c5.badge': 'Full Accessibility',
      'services.c6.title': 'Humanitarian Aid & Peace Culture',
      'services.c6.desc': 'Field food relief brigades at hospitals and underprivileged communities, public servant training forums, and youth workshops.',
      'services.c6.badge': 'Peace & Solidarity',

      // Integrantes
      'team.badge': 'Collegiate Body',
      'team.title': 'Our Team',
      'team.desc': 'Legal professionals, advocates, and activists committed to substantive equality and social justice.',
      'team.m1.role': 'International President & Human Rights Advocate',
      'team.m1.tag': 'CIDHIG Presidency',
      'team.m2.role': 'Secretary General',
      'team.m2.tag': 'General Secretariat',
      'team.m3.role': 'Legal Counsel Attorney',
      'team.m3.tag': 'Legal Defense',
      'team.m4.role': 'Director of Legal Affairs & International Commissioner',
      'team.m4.tag': 'Legal Directorate',
      'team.m5.role': 'LGBTIQ+ Community Liaison & Federal Commissioner',
      'team.m5.tag': 'Diversity Liaison',
      'team.m6.role': 'Activist & Human Rights Advocate',
      'team.m6.tag': 'Grassroots Advocacy',
      'team.m7.role': 'Coordinator for Disability Care & Inclusion',
      'team.m7.tag': 'Inclusion & Accessibility',
      'team.m8.role': 'International Commissioner & Culiacán Sinaloa Coordinator',
      'team.m8.tag': 'Sinaloa Coordination',

      // Cobertura
      // Coverage
      'coverage.badge': 'Territorial Presence',
      'coverage.title': 'National Coverage',
      'coverage.desc': 'Active commissions and citizen representations continuously expanding to ensure close community support.',
      'coverage.active': 'Active Offices (Black)',
      'coverage.selected': 'Selected Office (Gold)',
      'coverage.activeBadge': 'Active Office',
      'coverage.contactBranch': 'Contact this office',
      'coverage.upcoming': 'Coming Soon',
      'coverage.hint': 'Click on any pin or state',
      'coverage.footerHint': 'Click on any state to view active legal defense offices and local commissions.',

      // Portafolio / Acciones
      'actions.badge': 'Evidence & Impact',
      'actions.title': 'Field Actions & Initiatives',
      'actions.desc': 'Humanitarian campaigns, peace forums, institutional partnerships, and mobile deployment across communities in Mexico.',
      'actions.filter.all': 'All',
      'actions.filter.food': 'Food Assistance',
      'actions.filter.forum': 'Forums & Training',
      'actions.filter.peace': 'Peace Culture',
      'actions.filter.leadership': 'Institutional Leadership',
      'actions.filter.deployment': 'Territorial Deployment',
      'actions.photos': 'Photos',
      'actions.viewGallery': 'View full gallery',
      'actions.officialBadge': 'Official CIDHIG Action',
      'actions.modalBtn': 'Request Information',
      'actions.p1.title': 'Food Solidarity: Direct Nutritional Aid',
      'actions.p1.desc': 'Solidarity dinners at hospitals and direct food donations to underprivileged families in need.',
      'actions.p2.title': 'Gender-Perspective Training Forums',
      'actions.p2.desc': 'Training sessions with public officials to enhance prevention and care protocols for women.',
      'actions.p3.title': 'Messengers of Peace: Seeds of Hope',
      'actions.p3.desc': 'Art and youth dialogue to build respectful coexistence and community reconciliation.',
      'actions.p4.title': 'Institutional Leadership & Alliances',
      'actions.p4.desc': 'Strengthening the commissioner network and coordinating with civil organizations and public authorities.',
      'actions.p5.title': 'Institutional Deployment Fleet',
      'actions.p5.desc': 'Support vehicles for food transport, mobile legal clinics, and direct community presence.',

      // Contacto
      'contact.badge': 'Official Petitions Channel',
      'contact.title': 'We are here to listen and defend you',
      'contact.desc': 'If you require immediate legal counsel, wish to report a human rights violation, or want your organization to join our advisory council, contact us directly.',
      'contact.emailLabel': 'Institutional Email',
      'contact.phoneLabel': 'National Direct Line',
      'contact.addressLabel': 'Headquarters',
      'contact.mapsLink': 'View location on Google Maps (Official Profile)',
      'contact.confidentiality': 'Strictly confidential handling of personal data and inquiries, adhering to international protocols for the protection of victims and advocates.',
      'contact.formTitle': 'Send us a direct message',
      'contact.formDesc': 'Fill in your details to direct your request to our executive secretariat or connect via WhatsApp.',
      'contact.fieldName': 'Full Name',
      'contact.phName': 'e.g. Mariana Torres, Esq.',
      'contact.fieldPhone': 'Phone / WhatsApp',
      'contact.phPhone': 'e.g. +1 555 123 4567',
      'contact.fieldState': 'State / Region / City',
      'contact.phState': 'e.g. California / Los Angeles',
      'contact.fieldSubject': 'Subject or Case Type',
      'contact.phSubject': 'e.g. Legal guidance request or community partnership',
      'contact.fieldMessage': 'Message or Summary of Facts',
      'contact.phMessage': 'Briefly describe your situation and preferred contact method...',
      'contact.btnWhatsApp': 'Send via WhatsApp',
      'contact.disclaimer': 'Your data is handled under strict confidentiality in compliance with Mexican privacy laws (LFPDPPP). By contacting us, you agree to our <a href="./privacidad.html" target="_blank" class="text-verde-nopal underline font-semibold">Privacy Policy</a> and <a href="./aviso-legal.html" target="_blank" class="text-verde-nopal underline font-semibold">Legal Notice</a>.',

      // WhatsApp flotante
      'whatsapp.pill': 'Need legal guidance?',

      // Footer
      'footer.tagline': '"Equality is not a favor. It is a right."',
      'footer.bio': 'International Commission on Human Rights for Gender Equality. Autonomous body dedicated to the defense, monitoring, and consolidation of equity across diplomatic and grassroots levels.',
      'footer.navTitle': 'Institutional Navigation',
      'footer.navHome': 'Home',
      'footer.navAbout': 'About Us',
      'footer.navServices': 'Services & Accreditations',
      'footer.navTeam': 'Collegiate Body',
      'footer.navCoverage': 'Territorial Presence',
      'footer.navActions': 'Actions & Projects',
      'footer.navContact': 'Contact & Petitions',
      'footer.channelsTitle': 'Official Channels',
      'footer.channelsDesc': 'Permanent coordination and open institutional communication.',
      'footer.copyright': '© 2026 International Commission on Human Rights for Gender Equality. All rights reserved.',
      'footer.privacy': 'Privacy Policy (LFPDPPP)',
      'footer.legal': 'Legal Notice & Bylaws',
      'footer.transparency': 'NGO Transparency',
      'footer.cookies': 'Cookie Settings',

      // Cookies
      'cookies.title': 'Privacy & Cookie Usage',
      'cookies.desc': 'We use essential and anonymous analytics cookies to ensure security and site functionality. Learn more in our <a href="./privacidad.html" target="_blank" class="cookie-link">Privacy Policy</a> and <a href="./aviso-legal.html" target="_blank" class="cookie-link">Legal Notice</a>.',
      'cookies.btnEssential': 'Essential Only',
      'cookies.btnAccept': 'Accept Cookies'
    }
  };

  var currentLang = 'es';

  /**
   * Verifica si la zona horaria del cliente pertenece a México
   */
  function isClientInMexicoTimezone() {
    try {
      var tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || '').toLowerCase();
      if (!tz) return false;
      var mxZones = [
        'mexico_city', 'cancun', 'monterrey', 'tijuana', 'chihuahua',
        'hermosillo', 'mazatlan', 'merida', 'matamoros', 'bahia_banderas', 'ojinaga'
      ];
      return mxZones.some(function(z) { return tz.indexOf(z) !== -1; });
    } catch (e) {
      return false;
    }
  }

  /**
   * Aplica un idioma a la página
   */
  function applyLanguage(lang, savePreference) {
    if (lang !== 'es' && lang !== 'en') lang = 'es';
    currentLang = lang;
    window.CIDHIG_CURRENT_LANG = lang;

    if (savePreference) {
      try {
        localStorage.setItem('cidhig_lang', lang);
      } catch (e) {}
    }

    // Actualizar atributo html lang
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'es');

    // Traducir todos los elementos con [data-i18n]
    var dict = translations[lang] || translations.es;
    var elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (dict[key].indexOf('<') !== -1) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Traducir atributos (e.g. placeholder) con [data-i18n-attr]
    // Formato: data-i18n-attr="placeholder:contact.phName|title:key"
    var attrElements = document.querySelectorAll('[data-i18n-attr]');
    attrElements.forEach(function(el) {
      var spec = el.getAttribute('data-i18n-attr');
      if (!spec) return;
      var pairs = spec.split('|');
      pairs.forEach(function(pair) {
        var parts = pair.split(':');
        if (parts.length === 2) {
          var attr = parts[0].trim();
          var key = parts[1].trim();
          if (dict[key] !== undefined) {
            el.setAttribute(attr, dict[key]);
          }
        }
      });
    });

    // Actualizar estado visual de los botones del selector
    var toggles = document.querySelectorAll('.lang-toggle-btn');
    toggles.forEach(function(btn) {
      var optEs = btn.querySelector('.lang-opt-es');
      var optEn = btn.querySelector('.lang-opt-en');
      if (optEs && optEn) {
        if (lang === 'en') {
          optEs.classList.remove('active');
          optEn.classList.add('active');
        } else {
          optEs.classList.add('active');
          optEn.classList.remove('active');
        }
      }
    });
  }

  /**
   * Alterna entre Español e Inglés
   */
  function toggleLanguage() {
    var nextLang = currentLang === 'es' ? 'en' : 'es';
    applyLanguage(nextLang, true);
  }

  /**
   * Inicialización y detección de geolocalización
   */
  function initLanguage() {
    // 1. Preferencia explícita guardada por el usuario
    var saved = null;
    try {
      saved = localStorage.getItem('cidhig_lang');
    } catch (e) {}

    if (saved === 'es' || saved === 'en') {
      applyLanguage(saved, false);
      return;
    }

    // 2. Si no hay preferencia guardada, verificar zona horaria de México
    var inMexicoTz = isClientInMexicoTimezone();
    var detectedLang = inMexicoTz ? 'es' : 'en';

    // Aplicar de inmediato la detección sin parpadeo
    applyLanguage(detectedLang, false);

    // 3. Fallback asíncrono con GeoIP (para confirmar procedencia fuera de México)
    // Se ejecuta de manera no intrusiva con timeout de 1.5s
    if (typeof fetch === 'function') {
      var controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      var timeoutId = controller ? setTimeout(function() { controller.abort(); }, 1500) : null;

      fetch('https://freeipapi.com/api/json', { signal: controller ? controller.signal : undefined })
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (timeoutId) clearTimeout(timeoutId);
          // Si el usuario aún no ha seleccionado manualmente
          var checkSaved = null;
          try { checkSaved = localStorage.getItem('cidhig_lang'); } catch (e) {}
          if (!checkSaved && data && data.countryCode) {
            var isMX = data.countryCode.toUpperCase() === 'MX';
            var apiLang = isMX ? 'es' : 'en';
            if (apiLang !== currentLang) {
              applyLanguage(apiLang, false);
            }
          }
        })
        .catch(function() {
          // Si falla o excede timeout, mantenemos la detección por zona horaria
        });
    }
  }

  // Event listeners para los botones de cambio de idioma
  function attachLangButtons() {
    document.querySelectorAll('.lang-toggle-btn').forEach(function(btn) {
      btn.removeEventListener('click', toggleLanguage);
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleLanguage();
      });
    });
  }

  // Exponer API global
  window.CIDHIG_I18N = {
    setLanguage: function(l) { applyLanguage(l, true); },
    toggleLanguage: toggleLanguage,
    getLanguage: function() { return currentLang; },
    translations: translations
  };

  // Ejecución en carga
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initLanguage();
      attachLangButtons();
    });
  } else {
    initLanguage();
    attachLangButtons();
  }
})();
