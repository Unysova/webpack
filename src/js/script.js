(function () {

	function Product() {
		var self = this,
			$productBtn = $('.product__select-btn'),
			$label = $('.item');

		this.init = function () {
			$productBtn.click(function (e) {
				e.preventDefault();
				self.productClickedOnce($(this));
				self.productClick($(this));
			});

			$label.click(function () {
				self.productClickedOnce($(this));
			});

		};

		this.productClickedOnce = function ($section) {
			var $product = $section.closest('.product').toggleClass('product_selected');

			if (!($product.hasClass('product_was-selected'))) {
				$product.mouseleave(function () {
					$product.addClass('product_was-selected');
				});
			}

		};

		this.productClick = function ($section) {
			 $section.closest('.product')
				 .find('.item')
				 .click();
		}
	}

	var productItems = new Product();

	$(document).ready(function () {

		productItems.init();

	});

}());