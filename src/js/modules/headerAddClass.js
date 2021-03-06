import removePopup from './removePopup';
import addActiveClass from './addActiveClass';
import accordion from './accordion';

const headerAddClass = () => {
	const bodyElem = document.querySelector('.body');
	//=================================================header===========================================
	const headerNavElem = document.querySelector('.header__nav');
	const headerItemslastAnnexesElem = document.querySelector('.header__items-last-annexes');
	const headerPopupItemslastAnnexesElem = document.querySelector('.header__popup-items-last-annexes');
	const headerItemslastTheoryElem = document.querySelector('.header__items-last-theory');
	const headerPopupItemslastTheoryElem = document.querySelector('.header__popup-items-last-theory');
	const headerItemslastPaktikaElem = document.querySelector('.header__items-last-paktika');
	const headerPopupItemslastPaktikaElem = document.querySelector('.header__popup-items-last-paktika');

	const headerPopup = document.querySelector('.header__popup');

	//============================================\\\\\header===========================================
	
	//=================================================aside===========================================
	const asideElem = document.querySelector('.aside');
	const asideTitleitleElem = document.querySelector('.aside__title');
	const asideWrapperElem = document.querySelector('.aside__wrapper');
	
	const asideNavMainElem = document.querySelector('.aside__nav-main');
	const asideNavTheoryElem = document.querySelector('.aside__nav-theory');
	const asideNavPaktikaElem = document.querySelector('.aside__nav-paktika');
	
	const asideItemsvscElem = document.querySelector('.aside__items-vsc');
	const asideItemsPreprosElem = document.querySelector('.aside__items-prepros');
	const asideItemsGithubElem = document.querySelector('.aside__items-github');
	
	const asideItemsHtmlTheoryElem = document.querySelector('.aside__items-html-theory');
	const asideItemsCssTheoryElem = document.querySelector('.aside__items-css-theory');
	const asideItemsJsTheoryElem = document.querySelector('.aside__items-js-theory');
	
	const asideItemsHtmlPaktikaElem = document.querySelector('.aside__items-html-paktika');
	const asideItemsCssPaktikaElem = document.querySelector('.aside__items-css-paktika');
	const asideItemsJsPaktikaElem = document.querySelector('.aside__items-js-paktika');
	//============================================\\\\\aside===========================================
	
	//=================================================main===========================================
	const mainElem = document.querySelector('.main');
	const mainWrapperElem = document.querySelector('.main__wrapper');
	
	const mainWrapMainElem = document.querySelector('.main__wrap-main');
	
	const mainWrapAnnexesElem = document.querySelector('.main__wrap-annexes');
	
	const mainWrapTheoryElem = document.querySelector('.main__wrap-theory');
	const mainBoxTheoryHtmlElem = document.querySelector('.main__box-theory-html');
	const mainBoxTheoryCssElem = document.querySelector('.main__box-theory-css');
	const mainBoxTheoryJsElem = document.querySelector('.main__box-theory-js');
	
	const mainWrapPaktikaElem = document.querySelector('.main__wrap-paktika');
	const mainBoxPaktikaHtmlElem = document.querySelector('.main__box-paktika-html');
	const mainBoxPaktikaCssElem = document.querySelector('.main__box-paktika-css');
	const mainBoxPaktikaJsElem = document.querySelector('.main__box-paktika-js');
	
	const mainWrapWorkElem = document.querySelector('.main__wrap-work');
	
	
	//============================================\\\\\main===========================================
	let hedPop;


	asideWrapperElem.addEventListener('click', (event) => {
		const target = event.target;
		if (target.closest('.aside__items-vsc')) {
			[...asideItemsvscElem.children].forEach((item, index) =>  {
				item.classList.remove('aside__item-vsc-active');
				if (item === target.parentElement || item === target) {
				item.classList.add('aside__item-vsc-active');
				accordion();
				};
			});
		};
		if (target.closest('.aside__items-prepros')) {
			[...asideItemsPreprosElem.children].forEach((item, index) =>  {
				item.classList.remove('aside__item-prepros-active');
				if (item === target.parentElement || item === target) {
				item.classList.add('aside__item-prepros-active');
				accordion();
				};
			});
		};
		if (target.closest('.aside__items-github')) {
			[...asideItemsGithubElem.children].forEach((item, index) =>  {
				item.classList.remove('aside__item-github-active');
				if (item === target.parentElement || item === target) {
				item.classList.add('aside__item-github-active');
				accordion();
				};
			});
		};


		if (target.closest('.aside__items-html-theory')) {
			[...asideItemsHtmlTheoryElem.children].forEach((item, index) =>  {
				item.classList.remove('aside__item-html-active');
				if (item === target.parentElement || item === target) {
				item.classList.add('aside__item-html-active');
				addActiveClass(mainBoxTheoryHtmlElem, index, 'main__inner-theory-html-active');
				accordion();
				};
			});
		};
		if (target.closest('.aside__items-css-theory')) {
			[...asideItemsCssTheoryElem.children].forEach((item, index) =>  {
				item.classList.remove('aside__item-css-active');
				if (item === target.parentElement || item === target) {
				item.classList.add('aside__item-css-active');
				addActiveClass(mainBoxTheoryCssElem, index, 'main__inner-theory-css-active');
				accordion();
				};
			});
		};
		if (target.closest('.aside__items-js-theory')) {
			[...asideItemsJsTheoryElem.children].forEach((item, index) =>  {
				item.classList.remove('aside__item-js-active');
				if (item === target.parentElement || item === target) {
				item.classList.add('aside__item-js-active');
				addActiveClass(mainBoxTheoryJsElem, index, 'main__inner-theory-js-active');
				accordion();
				};
			});
		};


		if (target.closest('.aside__items-html-paktika')) {
			[...asideItemsHtmlPaktikaElem.children].forEach((item, index) =>  {
				item.classList.remove('aside__item-html-active');
				if (item === target.parentElement || item === target) {
				item.classList.add('aside__item-html-active');
				addActiveClass(mainBoxPaktikaHtmlElem, index, 'main__inner-paktika-html-active');
				accordion();
				};
			});
		};
		if (target.closest('.aside__items-css-paktika')) {
			[...asideItemsCssPaktikaElem.children].forEach((item, index) =>  {
				item.classList.remove('aside__item-css-active');
				if (item === target.parentElement || item === target) {
				item.classList.add('aside__item-css-active');
				addActiveClass(mainBoxPaktikaCssElem, index, 'main__inner-paktika-css-active');
				accordion();
				};
			});
		};
		if (target.closest('.aside__items-js-paktika')) {
			[...asideItemsJsPaktikaElem.children].forEach((item, index) =>  {
				item.classList.remove('aside__item-js-active');
				if (item === target.parentElement || item === target) {
				item.classList.add('aside__item-js-active');
				addActiveClass(mainBoxPaktikaJsElem, index, 'main__inner-paktika-js-active');
				accordion();
				};
			});
		};
	});


	bodyElem.addEventListener('click', (event) => {
		const target = event.target;
		if (target.closest('.header__items-last-annexes') ||  target.closest('.header__popup-items-last-annexes')) {
			if (target.closest('.header__items-last-annexes')) {
				hedPop = headerItemslastAnnexesElem;
			};
			if (target.closest('.header__popup-items-last-annexes')) {
				hedPop = headerPopupItemslastAnnexesElem;
				asideTitleitleElem.textContent =  target.parentElement.parentElement.parentElement.parentElement.children[0].textContent + ' ' +  target.textContent;
			};
			[...hedPop.children].forEach((item, index) =>  {
				if (item === target.parentElement || item === target) {
					addActiveClass(asideNavMainElem, index, 'aside__items-active');
					addActiveClass(asideItemsvscElem, 0, 'aside__item-vsc-active');
					addActiveClass(asideItemsPreprosElem, 0, 'aside__item-prepros-active');
					addActiveClass(asideItemsGithubElem, 0, 'aside__item-github-active');
					addActiveClass(asideWrapperElem, 0, 'aside__nav-active');
					
					addActiveClass(mainWrapperElem, 1, 'main__wrap-active');
					addActiveClass(mainWrapAnnexesElem, index, 'main__box-annexes-active');
				};
			});
			bodyElem.classList.remove('body__main__work');
			mainWrapMainElem.classList.remove('main__wrap-main-active');
			mainWrapWorkElem.classList.remove('main__wrap-work-active');
			asideElem.classList.remove('aside__none');
			mainElem.classList.remove('main__top');
			removePopup();
		};


		if (target.closest('.header__items-last-theory') || target.closest('.header__popup-items-last-theory')) {
			if (target.closest('.header__items-last-theory')) {
				hedPop = headerItemslastTheoryElem;
			};
			if (target.closest('.header__popup-items-last-theory')) {
				hedPop = headerPopupItemslastTheoryElem;
				asideTitleitleElem.textContent =  target.parentElement.parentElement.parentElement.parentElement.children[0].textContent + ' ' +  target.textContent;
			};
			[...hedPop.children].forEach((item, index) =>  {
				if (item === target.parentElement || item === target) {
					addActiveClass(asideNavTheoryElem, index, 'aside__items-active');
					addActiveClass(asideItemsHtmlTheoryElem, 0, 'aside__item-html-active');
					addActiveClass(asideItemsCssTheoryElem, 0, 'aside__item-css-active');
					addActiveClass(asideItemsJsTheoryElem, 0, 'aside__item-js-active');
					addActiveClass(asideWrapperElem, 1, 'aside__nav-active');
	
					addActiveClass(mainWrapperElem, 2, 'main__wrap-active');
					addActiveClass(mainWrapTheoryElem, index, 'main__box-theory-active');
					addActiveClass(mainBoxTheoryHtmlElem, 0, 'main__inner-theory-html-active');
					addActiveClass(mainBoxTheoryCssElem, 0, 'main__inner-theory-css-active');
					addActiveClass(mainBoxTheoryJsElem, 0, 'main__inner-theory-js-active');
				};
			});
			bodyElem.classList.remove('body__main__work');
			mainWrapMainElem.classList.remove('main__wrap-main-active');
			mainWrapWorkElem.classList.remove('main__wrap-work-active');
			asideElem.classList.remove('aside__none');
			mainElem.classList.remove('main__top');
			removePopup();
		};


		if (target.closest('.header__items-last-paktika') || target.closest('.header__popup-items-last-paktika')) {
			if (target.closest('.header__items-last-paktika')) {
				hedPop = headerItemslastPaktikaElem;
			};
			if (target.closest('.header__popup-items-last-paktika')) {
				hedPop = headerPopupItemslastPaktikaElem;
				asideTitleitleElem.textContent =  target.parentElement.parentElement.parentElement.parentElement.children[0].textContent + ' ' +  target.textContent;
			};
			[...hedPop.children].forEach((item, index) =>  {
				if (item === target.parentElement || item === target) {
					addActiveClass(asideNavPaktikaElem, index, 'aside__items-active');
					addActiveClass(asideItemsHtmlPaktikaElem, 0, 'aside__item-html-active');
					addActiveClass(asideItemsCssPaktikaElem, 0, 'aside__item-css-active');
					addActiveClass(asideItemsJsPaktikaElem, 0, 'aside__item-js-active');
					addActiveClass(asideWrapperElem, 2, 'aside__nav-active');
	
					addActiveClass(mainWrapperElem, 3, 'main__wrap-active');
					addActiveClass(mainWrapPaktikaElem, index, 'main__box-paktika-active');
					addActiveClass(mainBoxPaktikaHtmlElem, 0, 'main__inner-paktika-html-active');
					addActiveClass(mainBoxPaktikaCssElem, 0, 'main__inner-paktika-css-active');
					addActiveClass(mainBoxPaktikaJsElem, 0, 'main__inner-paktika-js-active');
				};
			});
			bodyElem.classList.remove('body__main__work');
			mainWrapMainElem.classList.remove('main__wrap-main-active');
			mainWrapWorkElem.classList.remove('main__wrap-work-active');
			asideElem.classList.remove('aside__none');
			mainElem.classList.remove('main__top');
			removePopup();
		};


		if (target.closest('.header__item-first-work') || target.closest('.header__popup-item-first-work')) {
			mainWrapWorkElem.classList.add('main__wrap-work-active');
			bodyElem.classList.add('body__main__work');
			asideElem.classList.add('aside__none');
			mainElem.classList.add('main__top');
			mainWrapAnnexesElem.classList.remove('main__wrap-active');
			mainWrapTheoryElem.classList.remove('main__wrap-active');
			mainWrapPaktikaElem.classList.remove('main__wrap-active');
			mainWrapMainElem.classList.remove('main__wrap-main-active');
			removePopup();
		};


		if (target.closest('.header__item-first-main') || target.closest('.header__popup-item-first-main')) {
			mainWrapMainElem.classList.add('main__wrap-main-active');
			bodyElem.classList.add('body__main__work');
			asideElem.classList.add('aside__none');
			mainElem.classList.add('main__top');
			mainWrapAnnexesElem.classList.remove('main__wrap-active');
			mainWrapTheoryElem.classList.remove('main__wrap-active');
			mainWrapPaktikaElem.classList.remove('main__wrap-active');
			mainWrapWorkElem.classList.remove('main__wrap-work-active');
			removePopup();
		}
	});
	bodyElem.classList.add('body__main__work');
	mainWrapMainElem.classList.add('main__wrap-main-active');
	mainElem.classList.add('main__top');

	// mainWrapMainElem.classList.add('main__wrap-main-active');
	// mainWrapWorkElem.classList.add('main__wrap-work-active');
	// mainWrapAnnexesElem.classList.remove('main__wrap-active');
	
}
export default headerAddClass;