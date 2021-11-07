/**
 * Модуль табов
 * @param {*} headerSelector - селектор родителя табов
 * @param {*} tabSelector - селектор табов
 * @param {*} contentSelector - селектор контента табов
 * @param {*} activeClass - класс активного таба
 * @param {*} display - значение display css при активности контента
 */
const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
	const header = document.querySelector(headerSelector),
		tabs = document.querySelectorAll(tabSelector),
		contents = document.querySelectorAll(contentSelector);

	/**
	 * Функция пока таба
	 * @param {*} tabIndex - индекс показываемого таба
	 */
	function showTab(tabIndex = 0) {
		contents.forEach((cont, i) => {
			if (i == tabIndex) {
				cont.style.display = display;
			}
		});
		tabs[tabIndex].classList.add(activeClass);
	}

	/**
	 * Функция скрытия табов
	 */
	function hideTab() {
		contents.forEach(cont => {
			cont.style.display = 'none';
		});
		tabs.forEach(tab => {
			tab.classList.remove(activeClass);
		});
	}

	header.addEventListener('click', event => {
		const target = event.target;
		if (
			target &&
			(target.classList.contains(tabSelector.slice(1)) ||
				target.parentNode.classList.contains(tabSelector.slice(1)))
		) {
			tabs.forEach((tab, i) => {
				if (tab == target || tab == target.parentNode) {
					hideTab();
					showTab(i);
				}
			});
		}
	});

	hideTab();
	showTab();
};
export default tabs;
