// ==UserScript==
// @name         知乎去提醒
// @namespace    https://soulogic.com/
// @version      0.7
// @description  try to take over the world!
// @author       Zheng Kai
// @match        https://www.zhihu.com/*
// @match        https://zhihu.com/*
// @grant        none
// ==/UserScript==

(() => {
    'use strict';

    const clean = () => {

		if (document.hidden) {
			return
		}

        document.title = document.title.replace(/\(.+?\) /, '');

		document.querySelectorAll('.Pc-feedAd-container').forEach(v => v?.parentNode?.remove());
		document.querySelectorAll('.VideoAnswerPlayer').forEach(v => v?.parentNode?.parentNode?.parentNode?.remove());
		document.querySelectorAll('.ZVideoItem').forEach(v => v?.parentNode?.parentNode?.remove());
    };

    clean();
    setInterval(clean, 500);
})();
