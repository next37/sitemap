"use strict";let ngaur=(function(){function e(){function e(){mdp_ngaur.md_select_all=='true'&&t();mdp_ngaur.md_copy=='true'&&n();mdp_ngaur.md_cut=='true'&&r();mdp_ngaur.md_paste=='true'&&u();mdp_ngaur.md_save=='true'&&o();mdp_ngaur.md_view_source=='true'&&c();mdp_ngaur.md_print_page=='true'&&i();mdp_ngaur.md_print_page=='true'&&d();mdp_ngaur.md_right_click=='true'&&f();mdp_ngaur.md_text_selection=='true'&&s();mdp_ngaur.md_image_dragging=='true'&&y()}function t(){a(65)}function n(){a(67)}function r(){a(88)}function u(){a(86)}function o(){a(83)}function c(){a(85)}function i(){a(80)}function d(){window.addEventListener('keydown',function(e){(e.keyCode==123||(e.ctrlKey||e.metaKey)&&e.shiftKey&&e.keyCode==73)&&e.preventDefault()})}function f(){document.oncontextmenu=function(e){var t=e||window.event,n=t.target||t.srcElement;if(n.nodeName!='A'){return!1}};document.body.oncontextmenu=function(){return!1}}function s(){typeof document.body.onselectstart!='undefined'?(document.body.onselectstart=function(){return!1}):typeof document.body.style.MozUserSelect!='undefined'?(document.body.style.MozUserSelect='none'):typeof document.body.style.webkitUserSelect!='undefined'?(document.body.style.webkitUserSelect='none'):(document.body.onmousedown=function(){return!1});document.body.style.cursor='default'}function y(){document.ondragstart=function(){return!1}}function a(e){window.addEventListener('keydown',function(t){t.ctrlKey&&t.which==e&&t.preventDefault();t.metaKey&&t.which==e&&t.preventDefault()});document.keypress=function(t){if(t.ctrlKey&&t.which==e){return!1}if(t.metaKey&&t.which==e){return!1}}}return{init:e}}return e})();document.addEventListener('DOMContentLoaded',function(){if(typeof mdp_ngaur_destroyer!=='undefined'){return}var e=new ngaur;e.init()})