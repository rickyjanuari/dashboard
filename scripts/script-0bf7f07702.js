$(".submenu-open").bind("click",function(s){jQuery(this).parent().find(".hide").slideToggle("fast"),jQuery(this).parent().toggleClass("show"),s.preventDefault()});var sidebar=function(){$(window).width()<1210&&$(window).width()>=768&&($(".sidebar").removeClass("open").addClass("close-sm"),$(".hamberger").addClass("active")),$(window).width()>=768?$(".hamberger").click(function(){$(this).addClass("disable"),$(".sidebar").hasClass("open")?($(".hamberger").addClass("active"),$(".sidebar-content").addClass("transparent",400),$(".page-dashboard").addClass("page"),$(".sidebar").delay(150).addClass("close-sm",600).removeClass("open",600)):($(".hamberger").removeClass("active"),$(".sidebar-content").removeClass("transparent",800),$(".sidebar").addClass("open",600),$(".page-dashboard").removeClass("page"),$(".sidebar").removeClass("close-sm",600)),setTimeout(function(){$(".hamberger").removeClass("disable")},1200)}):($(".sidebar").removeClass("open").removeClass("close-sm").addClass("close-xs").addClass("sidebar-xs"),$(".hamberger").click(function(){$(".sidebar").hasClass("close-xs")?$(".sidebar").removeClass("close-xs",800).addClass("open-xs"):$(".sidebar").removeClass("open-xs").addClass("close-xs",800)}))};$(window).resize(function(){$(this).addClass("disable"),$(window).width()<1210&&$(window).width()>=768?($(".hamberger").addClass("active"),$(".sidebar-content").addClass("transparent",400),$(".sidebar").delay(150).addClass("close-sm",600).removeClass("open",600)):$(window).width()>=1210&&($(".hamberger").removeClass("active"),$(".sidebar-content").removeClass("transparent",800),$(".sidebar").addClass("open",600),$(".sidebar").removeClass("close-sm",600)),setTimeout(function(){$(".hamberger").removeClass("disable")},1200)}),$(document).ready(function(){sidebar()});
//# sourceMappingURL=../maps/scripts/script-0bf7f07702.js.map
