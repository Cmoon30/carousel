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
});
