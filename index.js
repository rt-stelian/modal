const modalTriggerLinks = document.querySelectorAll(".popup-link");
const modalWindow = document.querySelector(".modals");
const body = document.querySelector("body");
const wrap = document.querySelector(".wrapper");

let lockDblClick = false;

if (modalTriggerLinks) {
	modalTriggerLinks.forEach((el) => {
		const modalTriggerLink = el;

		modalTriggerLink.addEventListener("click", (ev) => {
			const getModalName = modalTriggerLink.getAttribute("href").replace("#", "");
			const targetModal = document.getElementById(getModalName);

			ev.preventDefault();
			OpenModalWindow(targetModal);
			CloseModalWindow(targetModal);
		});
	});
}

function OpenModalWindow(modal) {
	const scrollbarWidth = window.innerWidth - wrap.offsetWidth + "px";

	if (!lockDblClick) {
		modal.classList.add("active");
		modalWindow.classList.add("active");
		body.classList.add("lock");
		wrap.style.paddingRight = scrollbarWidth;
		lockDblClick = true;
	}
}

function CloseModalWindow(modal) {
	modalWindow.addEventListener("click", (ev) => {
		ev.preventDefault();
		ev.target.closest(".popup-content") ? "return" : closeModalFunction(modal);
	});
}

function closeModalFunction(modal) {
	modal.classList.remove("active");
	modalWindow.classList.remove("active");
	setTimeout(() => {
		wrap.style.paddingRight = "";
		body.classList.remove("lock");
		lockDblClick = false;
	}, 150);
}
