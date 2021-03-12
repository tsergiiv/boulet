		<?php
		/**
		 * The template for displaying the footer.
		 *
		 * Contains the closing of the #content div and all content after
		 *
		 * @package storefront
		 */

		?>

		</div><!-- .col-full -->
	</div><!-- #content -->

	<footer>
		<div class="container-custom custom-footer-wrapper">
			<div class="footer-social">
				<img src="<?= get_stylesheet_directory_uri(); ?>/assets/img/logo.svg">
                <?php
                $posts = get_posts(array(
                    'post_type' => 'info',
                ));

                foreach ($posts as $post) {
                    setup_postdata($post);

                    ?>

	                <p><?= the_field('footer_text') ?></p>

                    <?php
                }

                wp_reset_postdata();
                ?>
				<ul>
	                <?php
	                $posts = get_posts(array(
	                    'post_type' => 'socials',
	                ));

	                foreach ($posts as $post) {
	                    setup_postdata($post);
	                    ?>

	                    <?php if (get_field('facebook')): ?>
							<li>
								<a href="<?= the_field('facebook') ?>"><i class="fab fa-facebook"></i></a>
							</li>
	                    <?php endif; ?>

	                    <?php if (get_field('instagram')): ?>
							<li>
								<a href="<?= the_field('instagram') ?>"><i class="fab fa-instagram"></i></a>
							</li>
	                    <?php endif; ?>

	                    <?php if (get_field('twitter')): ?>
							<li>
								<a href="<?= the_field('twitter') ?>"><i class="fab fa-twitter"></i></a>
							</li>
	                    <?php endif; ?>

	                    <?php if (get_field('linkedin')): ?>
							<li>
								<a href="<?= the_field('linkedin') ?>"><i class="fab fa-linkedin"></i></a>
							</li>
	                    <?php endif; ?>

	                    <?php
	                }

	                wp_reset_postdata();
	                ?>
				</ul>
			</div>
			<div class="footer-links">
				<ul>
					<li><h1>Liens rapides</h1></li>
					<li>
						<a class="content-secondary-color" href="/service/about/" title="À propos de nous">
							À propos de nous
						</a>
					</li>
					<li>
						<a class="content-secondary-color" href="/" title="Boutique">
							Boutique
						</a>
					</li>
					<li>
						<a class="content-secondary-color" href="/" title="Nous contacter">
							Nous contacter
						</a>
					</li>
				</ul>
				<ul>
					<li><h1>Mon compte</h1><li>
					<li>
						<a class="content-secondary-color" href="/" title="Mon profil">
							Mon profil
						</a>
					</li>
					<li>
						<a class="content-secondary-color" href="/" title="Historique des commandes">
							Historique des commandes
						</a>
					</li>
					<li>
						<a class="content-secondary-color" href="/" title="Liste de souhaits">
							Liste de souhaits
						</a>
					</li>
				</ul>
				<ul>
					<li><h1>Intimité</h1></li>
					<li>
						<a class="content-secondary-color" href="/" title="FAQ">
							FAQ
						</a>
					</li>
					<li>
						<a class="content-secondary-color" href="/" title="Politique de confidentialité">
							Politique de confidentialité
						</a>
					</li>
					<li>
						<a class="content-secondary-color" href="/" title="Termes et conditions">
							Termes et conditions
						</a>
					</li>
				</ul>

				<div class="newsletter-wrapper">
					<div class="newsletter-title">
						<h4 class="title-secondary-color">Abonnez-vous à notre infolettre</h4>
					</div>
					<div class="newsletter-input">
                        <?= do_shortcode('[email-subscribers-form id="1"]') ?>
					</div>
				</div>
			</div>
		</div>
		<div class="copyright-block">
			<div class="container-custom">
				<div class="copyright-title">
                    <?php
                    $posts = get_posts(array(
                        'post_type' => 'info',
                    ));

                    foreach ($posts as $post) {
                        setup_postdata($post);

                        ?>

                        <?= the_field('copyright') ?>

                        <?php
                    }

                    wp_reset_postdata();
                    ?>
				</div>
				<div class="payment-method-icons">
					<i class="fab fa-cc-mastercard"></i>
					<i class="fab fa-cc-visa"></i>
					<i class="fab fa-cc-amex"></i>
					<i class="fab fa-cc-discover"></i>
					<i class="fab fa-cc-paypal"></i>
				</div>
			</div>
		</div>
	</footer>

	<script type="text/javascript">
	    let templateUrl = '<?= get_bloginfo("template_url"); ?>';
	    // console.log(templateUrl);

	    let url = '<?= get_bloginfo("url"); ?>';
	    // console.log(url);
	</script>


</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
