$(document).ready(() => {
	const navTabLink = $("ul a");
	const showImageProduct = $("main section");
	const buttonSlider = [$(".buttonSlider_first"), $(".buttonSlider_second")];
	let defaultIndex = 0;

	navTabLink.on("click", (event) => {
		event.preventDefault();
		navTabLink.removeClass("activeNavTab");
		$(event.currentTarget).addClass("activeNavTab");
	});

	const fadeInAnimation = (style, animate) => {
		style.css("animation", "none").offset();
		style.css("animation", `${animate} .5s`);
	};

	const slideImage = (newIndex) => {
		if (defaultIndex == newIndex) return;

		defaultIndex =
			(newIndex + showImageProduct.length) % showImageProduct.length;

		showImageProduct.css({
			transform: `translateY(-${defaultIndex * 100}%)`,
		});
		fadeInAnimation(showImageProduct, `fadeIn`);

		buttonSlider.forEach((button, index) => {
			button.toggleClass("activeButtonSlider", newIndex == index);
			closeSlider();
		});
	};

	buttonSlider.forEach((button, index) => {
		button.on("click", () => {
			slideImage(index);
		});
	});

	const imgContainer = $(".imgContainer");
	const buttonCloseSlider = $(".buttonCloseSlider");

	const closeSlider = () => {
		imgContainer.removeClass("imgContainerShow").addClass("imgContainerActive");
		buttonCloseSlider.hide();
	};

	imgContainer.on("click", () => {
		imgContainer.addClass("imgContainerShow").removeClass("imgContainerActive");
		buttonCloseSlider.show();
	});

	buttonCloseSlider.on("click", (event) => {
		event.stopPropagation();
		closeSlider();
	});
});
