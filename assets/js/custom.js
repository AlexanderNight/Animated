const scrollers = document.querySelectorAll(".marquee");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	addAnimation();
}
function addAnimation() {
	scrollers.forEach((scroller) => {

		scroller.setAttribute("data-animated", true);


		const scrollerInner = scroller.querySelector(".scroller__inner");
		const scrollerContent = Array.from(scrollerInner.children);

		scrollerContent.forEach((item) => {
			const duplicatedItem = item.cloneNode(true);
			duplicatedItem.setAttribute("aria-hidden", true);
			scrollerInner.appendChild(duplicatedItem);
		});
	});
}
// следование за курсором
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
	cursor.setAttribute("style", "top:" + (e.pageY - 15) + "px; left:" + (e.pageX - 15) + "px;")

})
document.addEventListener('click', () => {
	cursor.classList.add("expand");
	setTimeout(() => {
		cursor.classList.remove("expand")
	}, 500);
})


window.onload = () => {
	const loader = document.querySelector('.lds-loader__container');
	loader.classList.add('loader-hidden');
	// setTimeout(() => {
	// 	loader.classList.add('loader-del')
	// }, 1500);
};