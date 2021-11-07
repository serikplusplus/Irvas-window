/**
 * Модуль модальных окон
 */
const modals = () => {
	const windows = document.querySelectorAll('[data-modal]'); //все модальные окна

	/**
	 * Функция привязки модального окна
	 * @param {*} triggerSelector -  селектор кнопки вызывающей модальное окно
	 * @param {*} modalSelector -  селектор модального окна
	 * @param {*} closeSelector -  селектор кнопки закрывающей модальное окно
	 * @param {*} closeClickOverlay -  будет ли модалка закрываться при клике на подложку (true,false)
	 */
	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector);

		trigger.forEach(trig => {
			trig.addEventListener('click', event => {
				if (event.target) {
					event.preventDefault();
				}
				windows.forEach(elem => {
					elem.style.display = 'none';
				});
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
			if (target && target === modal && closeClickOverlay) {
				closeModal(modal);
			}
		});
	}

	/**
	 * Функция закрытия модального окна
	 * @param {*} modal - модальное окно
	 */
	function closeModal(modal) {
		windows.forEach(elem => {
			elem.style.display = 'none';
		}); //закрытие всех модальных окон
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
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
	// showModalByTime('.popup', 60000);
};
export default modals;
