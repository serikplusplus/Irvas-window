/**
 * Модуль форм
 */
const forms = () => {
	const forms = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input'),
		phoneInput = document.querySelectorAll('input[name="user_phone"]');

	//Запрет на ввод не чисел в поле телефон
	phoneInput.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/, '');
		});
	});

	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо скоро с вами свяжемся',
		error: 'Ошибка...',
	};

	/**
	 * Функция отправки форм
	 * @param {*} url - путь отправки
	 * @param {*} data - данные для отправки
	 */
	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;
		let res = await fetch(url, {
			method: 'POST',
			body: data,
		});

		return await res.text();
	};

	/**
	 * Функция очистки всех инпутов
	 */
	const clearInputs = () => {
		inputs.forEach(input => {
			input.value = '';
		});
	};

	forms.forEach(form => {
		form.addEventListener('submit', event => {
			event.preventDefault();

			//Создание блока оповещения о статусе отправки
			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			form.append(statusMessage);

			//Сбор данных с формы
			const formData = new FormData(form);
			postData('assets/server.php', formData)
				.then(res => {
					console.log(res);
					statusMessage.textContent = message.success;
				})
				.catch(err => {
					statusMessage.textContent = message.error;
				})
				.finally(() => {
					clearInputs();
					setTimeout(() => {
						statusMessage.remove();
					}, 5000);
				});
		});
	});
};
export default forms;
