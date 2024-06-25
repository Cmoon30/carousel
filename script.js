$(document).ready(() => {
	const navTabLink = $("ul a");
	const buttonImgSleeve = $(".buttonImg_Sleeve");
	const zoomImgSleeve = $(".activeZoomSleeve");
	const buttonImgTag = $(".buttonImg_Tag");
	const zoomImgTag = $(".activeZoomTag");

	navTabLink.on("click", (event) => {
		event.preventDefault();
		navTabLink.removeClass("activeNavTab");
		$(event.currentTarget).addClass("activeNavTab");
	});

	const toggleZoomImage = (button, zoomImgToShow, zoomImgToHide) => {
		button.on("click", (event) => {
			event.stopPropagation();
			zoomImgToShow.toggle();
			zoomImgToHide.hide();
		});

		button.on("mouseenter", () => {
			zoomImgToShow.show();
			zoomImgToHide.hide();
		});
	};

	toggleZoomImage(buttonImgSleeve, zoomImgSleeve, zoomImgTag);
	toggleZoomImage(buttonImgTag, zoomImgTag, zoomImgSleeve);

	buttonImgSleeve.add(buttonImgTag).on("mouseleave", () => {
		zoomImgTag.hide();
		zoomImgSleeve.hide();
	});
});
