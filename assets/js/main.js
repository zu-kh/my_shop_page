/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$sidebar = $('#sidebar');

	// Add class to body to hide main content initially
	$body.addClass('language-preselect');

	// Translations object
	var translations = {
		de: {
			// Navigation (Sidebar)
			'nav_home': 'Home',
			'nav_about_us': 'Über uns',
			'nav_our_services': 'Unsere Dienstleistungen',
			'nav_contact': 'Kontakt',
			// Intro Section
			'intro_title': 'iRepair',
			'intro_text': 'Ihr One-Stop-Shop für alle Ihre Tech-Reparaturanforderungen. Wir sind spezialisiert auf die Reparatur von Smartphones, Laptops, iPhones und bieten fachkundige IT-Lösungen. Unsere zertifizierten Techniker sind hier, um Ihre Geräte wieder zum Leben zu erwecken.',
			'learn_more': 'Mehr erfahren',
			// Who We Are Section (Spotlights)
			'expert_technicians_title': 'Erfahrene Techniker',
			'expert_technicians_text': 'Unser Team besteht aus zertifizierten Technikern mit jahrelanger Erfahrung in der Reparatur einer Vielzahl von Geräten. Wir sind leidenschaftlich an Technologie interessiert und stets bestrebt, den bestmöglichen Service zu bieten.',
			'quality_parts_title': 'Qualitätsersatzteile',
			'quality_parts_text': 'Wir verwenden ausschließlich Ersatzteile von höchster Qualität für alle unsere Reparaturen, um sicherzustellen, dass Ihr Gerät wie neu funktioniert. Wir stehen zu unserer Arbeit mit einer umfassenden Garantie auf alle Reparaturen.',
			'customer_satisfaction_title': 'Kundenzufriedenheit',
			'customer_satisfaction_text': 'Ihre Zufriedenheit hat für uns höchste Priorität. Wir bemühen uns, einen schnellen, freundlichen und transparenten Service zu bieten. Wir halten Sie während des gesamten Reparaturprozesses auf dem Laufenden und stellen sicher, dass Sie mit den Ergebnissen zufrieden sind.',
			// What We Do Section (Our Services)
			'our_services_title': 'Unsere Dienstleistungen',
			'our_services_text': 'Wir bieten eine umfassende Palette an Reparatur- und IT-Support-Dienstleistungen für Privatpersonen und Unternehmen. Unser Fachwissen deckt eine breite Palette von Geräten und technischen Problemen ab.',
			'smartphone_repair_title': 'Smartphone-Reparatur',
			'smartphone_repair_text': 'Rissiger Bildschirm? Akkuprobleme? Wir reparieren alle gängigen Smartphone-Marken, einschließlich iPhones und Android-Geräte.',
			'laptop_pc_repair_title': 'Laptop- & PC-Reparatur',
			'laptop_pc_repair_text': 'Von Hardware-Fehlfunktionen bis hin zu Software-Problemen diagnostizieren und reparieren wir alle Laptop- und Desktop-Computerprobleme.',
			'data_recovery_title': 'Datenwiederherstellung',
			'data_recovery_text': 'Versehentlich wichtige Dateien gelöscht? Festplatte abgestürzt? Wir können Ihnen helfen, Ihre wertvollen Daten wiederherzustellen.',
			'virus_malware_removal_title': 'Viren- & Malware-Entfernung',
			'virus_malware_removal_text': 'Läuft Ihr Computer langsam oder verhält er sich seltsam? Wir bereinigen Ihr System und schützen es vor bösartigen Bedrohungen.',
			'network_setup_troubleshooting_title': 'Netzwerk-Setup & Fehlerbehebung',
			'network_setup_troubleshooting_text': 'Richten Sie ein neues Heim- oder Büronetzwerk ein? Haben Sie Verbindungsprobleme? Wir bieten fachkundige Netzwerklösungen.',
			'it_consultation_title': 'IT-Beratung',
			'it_consultation_text': 'Benötigen Sie Beratung zu Technologielösungen für Ihr Zuhause oder Ihr Unternehmen? Unsere Experten bieten personalisierte IT-Beratungsdienstleistungen an.',
			// Contact Us Section
			'contact_us_title': 'Kontakt',
			'contact_us_text': 'Haben Sie eine Frage oder benötigen Sie eine Reparatur? Kontaktieren Sie uns noch heute! Füllen Sie das untenstehende Formular aus oder finden Sie unsere Kontaktdaten.',
			'form_name': 'Name',
			'form_email': 'E-Mail',
			'form_message': 'Nachricht',
			'send_message': 'Nachricht senden',
			'address_title': 'Adresse',
			'address_text': '123 Tech Repair Lane, Suite 100, Stadt, Bundesland 12345',
			'email_title': 'E-Mail',
			'email_text': 'info@irepair.com',
			'phone_title': 'Telefon',
			'phone_text': '(123) 456-7890',
			'social_title': 'Soziale Medien',
			// Footer
			'footer_copyright': '&copy; iRepair. Alle Rechte vorbehalten.'
		},
		ar: {
			// Navigation (Sidebar)
			'nav_home': 'الرئيسية',
			'nav_about_us': 'من نحن',
			'nav_our_services': 'خدماتنا',
			'nav_contact': 'اتصل بنا',
			// Intro Section
			'intro_title': 'iRepair',
			'intro_text': 'متجرك الشامل لجميع احتياجات إصلاح التكنولوجيا. نحن متخصصون في إصلاح الهواتف الذكية وأجهزة الكمبيوتر المحمولة وأجهزة iPhone وتقديم حلول تكنولوجيا المعلومات المتخصصة. فنيونا المعتمدون هنا لإعادة أجهزتك إلى الحياة.',
			'learn_more': 'اعرف المزيد',
			// Who We Are Section (Spotlights)
			'expert_technicians_title': 'فنيون خبراء',
			'expert_technicians_text': 'يتكون فريقنا من فنيين معتمدين لديهم سنوات من الخبرة في إصلاح مجموعة واسعة من الأجهزة. نحن متحمسون للتكنولوجيا وملتزمون بتقديم أفضل خدمة ممكنة.',
			'quality_parts_title': 'قطع غيار عالية الجودة',
			'quality_parts_text': 'نحن نستخدم فقط قطع الغيار عالية الجودة لجميع إصلاحاتنا، مما يضمن أن جهازك يعمل كأنه جديد. نحن نضمن عملنا بضمان شامل على جميع الإصلاحات.',
			'customer_satisfaction_title': 'رضا العملاء',
			'customer_satisfaction_text': 'أولويتنا القصوى هي رضاك. نحن نسعى جاهدين لتقديم خدمة سريعة وودية وشفافة. نبقيك على اطلاع دائم طوال عملية الإصلاح ونضمن رضاك عن النتائج.',
			// What We Do Section (Our Services)
			'our_services_title': 'خدماتنا',
			'our_services_text': 'نحن نقدم مجموعة شاملة من خدمات الإصلاح والدعم الفني للأفراد والشركات. تغطي خبرتنا مجموعة واسعة من الأجهزة والمشكلات الفنية.',
			'smartphone_repair_title': 'إصلاح الهواتف الذكية',
			'smartphone_repair_text': 'شاشة مكسورة؟ مشاكل البطارية؟ نحن نصلح جميع العلامات التجارية الرئيسية للهواتف الذكية، بما في ذلك أجهزة iPhone وأجهزة Android.',
			'laptop_pc_repair_title': 'إصلاح أجهزة الكمبيوتر المحمولة والشخصية',
			'laptop_pc_repair_text': 'من أعطال الأجهزة إلى أخطاء البرامج، نقوم بتشخيص وإصلاح جميع مشاكل أجهزة الكمبيوتر المحمولة والمكتبية.',
			'data_recovery_title': 'استعادة البيانات',
			'data_recovery_text': 'هل حذفت ملفات مهمة عن طريق الخطأ؟ هل تعطل القرص الصلب؟ يمكننا مساعدتك في استعادة بياناتك الثمينة.',
			'virus_malware_removal_title': 'إزالة الفيروسات والبرامج الضارة',
			'virus_malware_removal_text': 'هل يعمل جهاز الكمبيوتر الخاص بك ببطء أو يتصرف بغرابة؟ سنقوم بتنظيف نظامك وحمايته من التهديدات الضارة.',
			'network_setup_troubleshooting_title': 'إعداد الشبكة واستكشاف الأخطاء وإصلاحها',
			'network_setup_troubleshooting_text': 'هل تقوم بإعداد شبكة منزلية أو مكتبية جديدة؟ هل تواجه مشكلات في الاتصال؟ نحن نقدم حلول شبكات متخصصة.',
			'it_consultation_title': 'استشارات تكنولوجيا المعلومات',
			'it_consultation_text': 'هل تحتاج إلى مشورة بشأن حلول التكنولوجيا لمنزلك أو عملك؟ يقدم خبراؤنا خدمات استشارية شخصية في مجال تكنولوجيا المعلومات.',
			// Contact Us Section
			'contact_us_title': 'اتصل بنا',
			'contact_us_text': 'هل لديك سؤال أو تحتاج إلى إصلاح؟ اتصل بنا اليوم! املأ النموذج أدناه أو ابحث عن تفاصيل الاتصال الخاصة بنا.',
			'form_name': 'الاسم',
			'form_email': 'البريد الإلكتروني',
			'form_message': 'الرسالة',
			'send_message': 'إرسال رسالة',
			'address_title': 'العنوان',
			'address_text': '123 Tech Repair Lane, Suite 100, المدينة, الولاية 12345',
			'email_title': 'البريد الإلكتروني',
			'email_text': 'info@irepair.com',
			'phone_title': 'الهاتف',
			'phone_text': '(123) 456-7890',
			'social_title': 'وسائل التواصل الاجتماعي',
			// Footer
			'footer_copyright': '&copy; iRepair. جميع الحقوق محفوظة.'
		}
	};

	// Function to set the language
	function setLanguage(lang) {
		$('[data-key]').each(function() {
			var key = $(this).data('key');
			if (translations[lang] && translations[lang][key]) {
				$(this).html(translations[lang][key]);
			}
		});

		// Special handling for form labels (if needed, otherwise will be handled by data-key)
		$('label[for="name"]').text(translations[lang]['form_name']);
		$('label[for="email"]').text(translations[lang]['form_email']);
		$('label[for="message"]').text(translations[lang]['form_message']);

		// Handle text direction for Arabic
		if (lang === 'ar') {
			$('body').attr('dir', 'rtl').addClass('arabic-text');
		} else {
			$('body').attr('dir', 'ltr').removeClass('arabic-text');
		}

		// Update active class for language buttons
		$('.lang-button').removeClass('active');
		$(`.lang-button[data-lang="${lang}"]`).addClass('active');

		// Store preferred language in local storage
		localStorage.setItem('preferredLang', lang);

		// Hide the modal and show main content
		$('#language-modal').hide();
		$body.removeClass('language-preselect');
	}

	// Check for preferred language on page load
	var initialLang = localStorage.getItem('preferredLang');
	if (initialLang) {
		$(document).ready(function() {
			setLanguage(initialLang);
		});
	} else {
		// If no language is set, show the modal
		$(document).ready(function() {
			$('#language-modal').show();
		});
	}
	
	// Language switcher event listeners for sidebar buttons
	$(document).on('click', '.lang-button', function(e) {
		e.preventDefault();
		var lang = $(this).data('lang');
		setLanguage(lang);
	});

	// Language switcher event listeners for modal buttons
	$(document).on('click', '.language-select-button', function(e) {
		e.preventDefault();
		var lang = $(this).data('lang');
		setLanguage(lang);
	});

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Hack: Enable IE flexbox workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Forms.

		// Hack: Activate non-input submits.
			$('form').on('click', '.submit', function(event) {

				// Stop propagation, default.
					event.stopPropagation();
					event.preventDefault();

				// Submit form.
					$(this).parents('form').submit();

			});

	// Sidebar.
		if ($sidebar.length > 0) {

			var $sidebar_a = $sidebar.find('a');

			$sidebar_a
				.addClass('scrolly')
				.on('click', function() {

					var $this = $(this);

					// External link? Bail.
						if ($this.attr('href').charAt(0) != '#')
							return;

					// Deactivate all links.
						$sidebar_a.removeClass('active');

					// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
						$this
							.addClass('active')
							.addClass('active-locked');

				})
				.each(function() {

					var	$this = $(this),
						id = $this.attr('href'),
						$section = $(id);

					// No section for this link? Bail.
						if ($section.length < 1)
							return;

					// Scrollex.
						$section.scrollex({
							mode: 'middle',
							top: '-20vh',
							bottom: '-20vh',
							initialize: function() {

								// Deactivate section.
									$section.addClass('inactive');

							},
							enter: function() {

								// Activate section.
									$section.removeClass('inactive');

								// No locked links? Deactivate all links and activate this section's one.
									if ($sidebar_a.filter('.active-locked').length == 0) {

										$sidebar_a.removeClass('active');
										$this.addClass('active');

									}

								// Otherwise, if this section's link is the one that's locked, unlock it.
									else if ($this.hasClass('active-locked'))
										$this.removeClass('active-locked');

							}
						});

				});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() {

				// If <=large, >small, and sidebar is present, use its height as the offset.
					if (breakpoints.active('<=large')
					&&	!breakpoints.active('<=small')
					&&	$sidebar.length > 0)
						return $sidebar.height();

				return 0;

			}
		});

	// Spotlights.
		$('.spotlights > section')
			.scrollex({
				mode: 'middle',
				top: '-10vh',
				bottom: '-10vh',
				initialize: function() {

					// Deactivate section.
						$(this).addClass('inactive');

				},
				enter: function() {

					// Activate section.
						$(this).removeClass('inactive');

				}
			})
			.each(function() {

				var	$this = $(this),
					$image = $this.find('.image'),
					$img = $image.find('img'),
					x;

				// Assign image.
					$image.css('background-image', 'url(' + $img.attr('src') + ')');

				// Set background position.
					if (x = $img.data('position'))
						$image.css('background-position', x);

				// Hide <img>.
					$img.hide();

			});

	// Features.
		$('.features')
			.scrollex({
				mode: 'middle',
				top: '-20vh',
				bottom: '-20vh',
				initialize: function() {

					// Deactivate section.
						$(this).addClass('inactive');

				},
				enter: function() {

					// Activate section.
						$(this).removeClass('inactive');

				}
			});

})(jQuery);