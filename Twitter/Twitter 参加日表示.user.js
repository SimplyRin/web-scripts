// ==UserScript==
// @name        Twitter 参加日表示
// @version     1.0
// @description Twitter のプロフィールページに表示される参加日を見やすくします。(yyyy年MM月dd日 (HH時mm分))
// @author      SimplyRin
// @homepage    https://github.com/SimplyRin/Tampermonkey/
// @match       https://*.twitter.com/*
// @namespace   https://www.simplyrin.net
// @license     MIT License
// @copyright   2019 SimplyRin
// ==/UserScript==

/**
 * Created by SimplyRin on 2019/08/01.
 *
 * Copyright (c) 2019 SimplyRin
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var href = "";
function check() {
    var current = location.href;
    if (href !== current) {
        href = current;
        var join = document.getElementsByClassName("ProfileHeaderCard-joinDateText")[0];
        if (join != null) {
            var title = join.title;
            var time = title.split("-")[0].trim().replace(":", "時") + "分";

            join.innerHTML = "参加日: " + title.split("-")[1].trim() + " (" + time + ")";
        }
    }
    setTimeout(check, 500);
}
setTimeout(check, 500);
