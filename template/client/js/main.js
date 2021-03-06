/*
 * Copyright 2016, 2017 IBM Corp.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *      http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

$(function() {

	// arrow animation
	$('.arrow').click(function() {
			$('html, body').animate({
				scrollTop: $('.base-elements__element').offset().top
			}, 300);
			return false;
	});

	$(window).scroll(function() {

		// keep sidebar active
		if (window.scrollY < $('.base-elements__element').offset().top) {
			$('.nav-container').css({
				"position" : "absolute",
				"left" : 0
			});
		}
		else {
			$('.nav-container').css({
				"position" : "fixed",
				"top" : $('.design-guide__header').height() + "px",
				"left" : $('.components__sidebar').offset().left + "px"
			});
		}

		// select buttons on scroll
		if (window.scrollY < second.offsetTop - 10) {
			$('.buttons:not(a.buttons:eq(0))').removeClass("selected-component");
			$('a.buttons:eq(0)').addClass("selected-component");
		}
		else if (window.scrollY < third.offsetTop - 10) {
			$('.buttons:not(a.buttons:eq(1))').removeClass("selected-component");
			$('a.buttons:eq(1)').addClass("selected-component");
		}
		else if (window.scrollY < fourth.offsetTop - 10) {
			$('.buttons:not(a.buttons:eq(2))').removeClass("selected-component");
			$('a.buttons:eq(2)').addClass("selected-component");
		}
		else if (window.scrollY < fifth.offsetTop - 10) {
			$('.buttons:not(a.buttons:eq(3))').removeClass("selected-component");
			$('a.buttons:eq(3)').addClass("selected-component");
		}
		else if (window.scrollY < sixth.offsetTop - 10) {
			$('.buttons:not(a.buttons:eq(4))').removeClass("selected-component");
			$('a.buttons:eq(4)').addClass("selected-component");
		}
		else {
			$('.buttons:not(a.buttons:eq(5))').removeClass("selected-component");
			$('a.buttons:eq(5)').addClass("selected-component");
		}
	});

	$(window).scroll();
});
