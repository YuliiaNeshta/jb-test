const accordion = (triggersSelector, itemsSelector) => {
	var btns = document.querySelectorAll(triggersSelector);
	var blocks = document.querySelectorAll(itemsSelector);

	const removeBtnsClass = (classActive = 'active') => {
		btns.forEach((btn) => {
			btn.classList.remove(classActive);
		});
	};

	btns.forEach((btn) => {
		btn.addEventListener('click', function(e) {
			let activeState = this.classList.contains('active');
			removeBtnsClass();
			if (!activeState) {
				this.classList.add('active');
			}
		});
	});
};

const openedBlock = (triggerBtn, block) => {
	const btns = document.querySelectorAll(triggerBtn);
	const blocks = document.querySelectorAll(block);
	btns.forEach((btn, index) => {
		btn.addEventListener('click', function(e) {
			e.preventDefault();
			blocks.forEach((item, idx) => {
				if (index === idx) {
					item.classList.toggle('active');
				} else {
					item.classList.remove('active');
				}
			});
		});
	});
};

const tabs = (headerSelector, tabSelector, contentSelector, btnNextTab, activeClass = 'active') => {
	const header = document.querySelector(headerSelector);
	const tab = document.querySelectorAll(tabSelector);
	const content = document.querySelectorAll(contentSelector);
	const next = document.querySelector(btnNextTab);
	const counter = document.querySelector('.remodal-edit__counter-item');

	function hideTabContent() {
		content.forEach((item) => {
			item.style.display = 'none';
		});

		tab.forEach((item) => {
			item.classList.remove(activeClass);
		});
	}

	function showTabContent(i = 0) {
		content[i].style.display = 'block';
		tab[i].classList.add(activeClass);
		if (tab[i] === tab[3]) {
			next.textContent = 'save';
		}
	}

	hideTabContent();
	showTabContent();

	next.addEventListener('click', () => {
		let clickItem = 'must';
		tab.forEach((item, i) => {
			if ('must' === clickItem || 'need' === clickItem) {
				if ('need' === clickItem) {
					item.click();
					clickItem = 'done';
				}

				if (item.classList.contains(activeClass) && 'must' === clickItem) {
					clickItem = 'need';
				}
			}
		});
	});

	header.addEventListener('click', (e) => {
		const target = e.target;

		if (
			target &&
			(target.classList.contains(tabSelector.replace(/\./, '')) ||
				target.parentNode.classList.contains(tabSelector.replace(/\./, '')))
		) {
			tab.forEach((item, i) => {
				if (target == item || target.parentNode == item) {
					hideTabContent();
					showTabContent(i);
					counter.textContent = i + 1;
				}
				console.log(i);
			});
		}
	});
};

window.addEventListener('DOMContentLoaded', () => {
	accordion('.sidebar__dropdown', '.sidebar__submenu');
	accordion('.submission-table__row', '.wedding-edit');
	accordion('.vendors-table__row', '.plan-edit');
	// accordion('.submission-table__row', '.vendors-edit');
	openedBlock('.color__add-circle', '.color__change');
	openedBlock('.homepage-row', '.edit-block');
	openedBlock('.slider-row', '.edit-block');
	openedBlock('.table__edit', '.plan-edit');
	openedBlock('.reviews-table__row', '.reviews-edit');
	openedBlock('.vendors-list__row', '.vendors-list__edit');
	//tabs
	tabs('.remodal-edit__items', '.remodal-edit__item', '.remodal-edit__img', '.btn-next');
});

const template = document.getElementById('template');

if (document.querySelector('.vendor-type__link')) {
	tippy('.vendor-type__link', {
		content: template.innerHTML,
		allowHTML: true,
		interactive: true
	});
}

$(document).ready(function() {
	$('select').niceSelect();
});
