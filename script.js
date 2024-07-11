$(document).ready(() => {
	const navTabLink = $(".navLinks a");

	navTabLink.on("click", (event) => {
		event.preventDefault();
		navTabLink.removeClass("activeNavTab");
		$(event.currentTarget).addClass("activeNavTab");
	});

	const menuBar = $(".menuButton");
	const navLinks = $(".navLinks");
	const closeMenu = $(".closeMenu");

	menuBar.hide();
	closeMenu.hide();

	const openMenu = () => {
		navLinks.addClass("sideMenu");
		menuBar.hide();
		closeMenu.show();
	};

	const closeMenuFunction = () => {
		navLinks.removeClass("sideMenu");
		closeMenu.hide();
		menuBar.show();
	};

	const mediaQuery = window.matchMedia("(min-width: 768px)");

	const handleMediaChange = (e) => {
		if (!e.matches) {
			menuBar.show();
			menuBar.on("click", openMenu);
			closeMenu.on("click", closeMenuFunction);
		} else {
			navLinks.removeClass("sideMenu");
			menuBar.hide();
			closeMenu.hide();
		}
	};

	mediaQuery.addEventListener("change", handleMediaChange);
	handleMediaChange(mediaQuery);

	const showImageProduct = $("main section");
	const buttonSlider = [$(".buttonSlider_first"), $(".buttonSlider_second")];
	let defaultIndex = 0;
	const infoCircleToggle = $(".infoCircle div li");

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

	buttonCloseSlider.hide();

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
