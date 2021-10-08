/**
 * Модуль модальных окон
 */
const modals = () => {
	/**
	 * Функция привязки модального окна
	 * @param {*} triggerSelector -  селектор кнопки вызывающей модальное окно
	 * @param {*} modalSelector -  селектор модального окна
	 * @param {*} closeSelector -  селектор кнопки закрывающей модальное окно
	 */
	function bindModal(triggerSelector, modalSelector, closeSelector) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector);

		trigger.forEach(trig => {
			trig.addEventListener('click', event => {
				if (event.target) {
					event.preventDefault();
				}
				openModal(modal);
			});
		});

		close.addEventListener('click', event => {
			if (event.target) {
				event.preventDefault();
			}
			closeModal(modal);
		});

		modal.addEventListener('click', event => {
			const target = event.target;
			if (target && target === modal) {
				closeModal(modal);
			}
		});
	}

	/**
	 * Функция закрытия модального окна
	 * @param {*} modal - модальное окно
	 */
	function closeModal(modal) {
		modal.style.display = 'none';
		document.body.classList.remove('modal-open');
	}

	/**
	 * Функция открытия модального окна
	 * @param {*} modal - модальное окно
	 */
	function openModal(modal) {
		modal.style.display = 'block';
		document.body.classList.add('modal-open');
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			const modal = document.querySelector(selector);
			openModal(modal);
		}, time);
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	// showModalByTime('.popup', 60000);
};
export default modals;
