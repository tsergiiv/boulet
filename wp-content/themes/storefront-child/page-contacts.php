<?php get_header('other'); ?>

<?php
$posts = get_posts(array(
    'post_type' => 'contacts',
));

foreach ($posts as $post) {
    setup_postdata($post);

        ?>

		<div class="container max-width-lg padding-y-xl">
			<link rel="stylesheet" type="text/css" href="/wp-content/themes/woocommerce/assets/gui-core.css" />
			<form id="gui-form" action="https://real-1st-theme-cosmetic.shoplightspeed.com/service/contactPost/" method="post">
				<input type="hidden" name="key" value="87b8e54b8c7f8d771ec105bcf35a52ce" />
				<input type="text" name="url" value="" placeholder="URL" class="gui-hide" />
				<div id="gui-wrapper" class="gui gui-faq">
					<div class="gui-page-title" role="heading" aria-level="1">Plus d&#039;information</div>
					<div class="gui-col2-right">
						<div class="gui-col2-right-col1 gui-div-faq-questions">
							<h1><?= the_field('title') ?></h1>
							<p><?= the_field('text') ?></p>

                            <?php if (get_field('address')): ?>
							<div class="contact-info-wrapper">
								<div><i class="fas fa-location-arrow"> </i></div>
								<h3>Adresse<span class="contact-title-info"><?= the_field('address') ?></span></h3>
							</div>
                            <?php endif; ?>

							<?php if (get_field('email')): ?>
							<div class="contact-info-wrapper">
								<div><i class="fas fa-envelope"> </i></div>
								<h3>Email <span class="contact-title-info"><?= the_field('email') ?></span></h3>
							</div>
							<?php endif; ?>

                            <?php if (get_field('phone')): ?>
							<div class="contact-info-wrapper">
								<div><i class="fas fa-phone-alt"> </i></div>
								<h3>Contact <span class="contact-title-info"><?= the_field('phone') ?></span></h3>
							</div>
                            <?php endif; ?>

                            <?php if (get_field('hours')): ?>
							<div class="contact-info-wrapper">
								<div><i class="fas fa-clock"> </i></div>
								<h3>Heures d'ouverture<span class="contact-title-info"><?= the_field('hours') ?></span></h3>
							</div>
							<?php endif; ?>

							<div class="gui-spacer"></div>
						</div>
						<div class="gui-col2-right-col2 gui-div-faq-right" role="complementary">
							<div class="gui-block gui-div-faq-form" aria-labelledby="faq-contact-us-title" role="form">
								<div class="gui-block-title" id="faq-contact-us-title"><strong>Envoyez-nous un message</strong></div>
								<div class="gui-block-content">
									<div class="gui-form">
										<div class="gui-field">
											<label for="gui-form-name">Nom *:     <em aria-hidden="true">*</em>
											</label>
											<div class="gui-input">
												<input id="gui-form-name" class="gui-validate" type="text" name="name" value="" placeholder="Nom" aria-required="true"/>
											</div>
										</div>
										<div class="gui-field">
											<label for="gui-form-phone">Numéro de telephone *:</label>
											<div class="gui-input">
												<input id="gui-form-phone" type="text" name="phone" value="" placeholder="Numéro de telephone" />
											</div>
										</div>
										<div class="gui-field">
											<label for="gui-form-email">Courriel *:     <em aria-hidden="true">*</em>
											</label>
											<div class="gui-input">
												<input id="gui-form-email" class="gui-validate" type="text" name="email" value="" placeholder="Courriel" aria-required="true"/>
											</div>
										</div>
										<div class="gui-field">
											<label for="gui-form-subject">Sujet *:     <em aria-hidden="true">*</em>
											</label>
											<div class="gui-input">
												<input id="gui-form-subject" class="gui-validate" type="text" name="subject" value="" placeholder="Sujet" aria-required="true"/>
											</div>
										</div>
										<div class="gui-field">
											<label for="gui-form-message">Message:     <em aria-hidden="true">*</em>
											</label>
											<div class="gui-text">
												<textarea id="gui-form-message" class="gui-validate" name="message" placeholder="Message" aria-required="true"></textarea>
											</div>
										</div>
										<div class="gui-required" aria-hidden="true">* Required fields</div>
										<div class="gui-buttons gui-border">
											<div class="gui-left"></div>
											<div class="gui-right"><a href="javascript:;" onclick="$('#gui-form').submit();" class="gui-button-small" title="Soumettre" role="button">Soumettre</a></div>
											<div class="gui-clear"></div>
										</div>
									</div>
								</div>
							</div>
							<div class="gui-block gui-margin gui-div-faq-links">
								<div class="gui-block-title"><strong>More information</strong></div>
								<div class="gui-block-content">
									<ul class="gui-block-linklist">
										<li><a href="service/about/" title=" À propos"> À propos</a></li>
										<li><a href="service/general-terms-conditions/" title="General terms &amp; conditions">General terms &amp; conditions</a></li>
										<li><a href="service/disclaimer/" title="Disclaimer">Disclaimer</a></li>
										<li><a href="service/privacy-policy/" title="Privacy policy">Privacy policy</a></li>
										<li><a href="service/payment-methods/" title="Payment methods">Payment methods</a></li>
										<li><a href="service/shipping-returns/" title="Shipping &amp; returns">Shipping &amp; returns</a></li>
										<li><a href="service/" title="Plus d&#039;information">Plus d&#039;information</a></li>
										<li><a href="sitemap/" title="Sitemap">Sitemap</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="gui-clear"></div>
					</div>
				</div>
				<input type="submit" class="gui-hide" />
			</form>
		</div>
		<div class="map">
			<?= the_field('map') ?>
		</div>

    <?php
	}

	wp_reset_postdata();
?>

<?php get_footer(); ?>
