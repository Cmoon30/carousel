$(document).ready(() => {
	const navTabLink = $("ul a");
	const buttonImgSleeve = $(".buttonImg_Sleeve");
	const zoomImgSleeve = $(".activeZoomSleeve");
	const buttonImgTag = $(".buttonImg_Tag");
	const zoomImgTag = $(".activeZoomTag");
	const buttonSliderContainer = $(".buttonSliderContainer button");
	const showImageProduct = $("main section");
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

	buttonSliderContainer.on("click", (event) => {
		if ($(event.currentTarget).hasClass("activeButtonSlider")) {
			return;
		}
		buttonSliderContainer.removeClass("activeButtonSlider");
		$(event.currentTarget).addClass("activeButtonSlider");

		defaultIndex = (defaultIndex + 1) % showImageProduct.length;
		showImageProduct.css({
			transform: `translateY(-${defaultIndex * 100}%)`,
		});
	});
});
