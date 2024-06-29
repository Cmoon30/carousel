$(document).ready(() => {
	const navTabLink = $("ul a");
	const buttonImgSleeve = $(".buttonImg_Sleeve");
	const zoomImgSleeve = $(".activeZoomSleeve");
	const buttonImgTag = $(".buttonImg_Tag");
	const zoomImgTag = $(".activeZoomTag");
	const showImageProduct = $("main section");
	const buttonSlider = [
		$(".buttonSlider_first"),
		$(".buttonSlider_second"),
		$(".buttonSlider_third"),
	];
	let defaultIndex = 0;

	navTabLink.on("click", (event) => {
		event.preventDefault();
		navTabLink.removeClass("activeNavTab");
		$(event.currentTarget).addClass("activeNavTab");
	});

	buttonShowImage = (button, toggleZoomShow, toggleZoomHide) => {
		button
			.on("click", (event) => {
				toggleZoomShow.toggle();
				toggleZoomHide.hide();
				event.stopPropagation();
			})
			.on("mouseenter", () => {
				toggleZoomShow.show();
				toggleZoomHide.hide();
			});
	};

	buttonShowImage(buttonImgSleeve, zoomImgSleeve, zoomImgTag);
	buttonShowImage(buttonImgTag, zoomImgTag, zoomImgSleeve);

	buttonImgSleeve.add(buttonImgTag).on("mouseleave", () => {
		zoomImgSleeve.hide();
		zoomImgTag.hide();
	});

	const slideImage = (newIndex) => {
		if (defaultIndex == newIndex) return;

		defaultIndex =
			(newIndex + showImageProduct.length) % showImageProduct.length;

		showImageProduct.css("transform", `translateY(-${defaultIndex * 100}%)`);

		buttonSlider.forEach((button, index) => {
			button.toggleClass("activeButtonSlider", newIndex == index);
		});
	};

	buttonSlider.forEach((button, index) => {
		button.on("click", () => {
			slideImage(index);
		});
	});
});
