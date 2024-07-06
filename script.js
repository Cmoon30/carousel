$(document).ready(() => {
	const navTabLink = $("ul a");
	const showImageProduct = $("main section");
	const buttonSlider = [$(".buttonSlider_first"), $(".buttonSlider_second")];
	let defaultIndex = 0;
	const infoCircleToggle = $(".infoCircle div li");

	navTabLink.on("click", (event) => {
		event.preventDefault();
		navTabLink.removeClass("activeNavTab");
		$(event.currentTarget).addClass("activeNavTab");
	});

	const slideImage = (newIndex) => {
		if (defaultIndex == newIndex) return;

		defaultIndex =
			(newIndex + showImageProduct.length) % showImageProduct.length;

		showImageProduct
			.css({
				transform: `translateY(-${defaultIndex * 100}%)`,
				animation: "none",
			})
			.offset();
		showImageProduct.css("animation", `fadeIn .5s`);

		infoCircleToggle.toggleClass("activeInfoCircle");

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
