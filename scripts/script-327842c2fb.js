$(".submenu-open").bind("click",function(s){jQuery(this).parent().find(".hide").slideToggle("fast"),jQuery(this).parent().toggleClass("show"),s.preventDefault()});var sidebar=function(){$(window).width()<1210&&$(window).width()>=768&&($(".sidebar").removeClass("open").addClass("close-sm"),$(".hamberger").addClass("active")),$(window).width()>=768?$(".hamberger").click(function(){$(this).addClass("disable"),$(".sidebar").hasClass("open")?($(".hamberger").addClass("active"),$(".sidebar-content").addClass("transparent",400),$(".page-dashboard").addClass("page"),$(".sidebar").delay(150).addClass("close-sm",600).removeClass("open",600)):($(".hamberger").removeClass("active"),$(".sidebar-content").removeClass("transparent",800),$(".sidebar").addClass("open",600),$(".page-dashboard").removeClass("page"),$(".sidebar").removeClass("close-sm",600)),setTimeout(function(){$(".hamberger").removeClass("disable")},1200)}):($(".sidebar").removeClass("open").removeClass("close-sm").addClass("close-xs").addClass("sidebar-xs"),$(".hamberger").click(function(){$(".sidebar").hasClass("close-xs")?$(".sidebar").removeClass("close-xs",800).addClass("open-xs"):$(".sidebar").removeClass("open-xs").addClass("close-xs",800)}))};$(window).resize(function(){$(this).addClass("disable"),$(window).width()<1210&&$(window).width()>=768?($(".hamberger").addClass("active"),$(".page-dashboard").addClass("page"),$(".sidebar-content").addClass("transparent",400),$(".sidebar").delay(150).addClass("close-sm",600).removeClass("open",600)):$(window).width()>=1210&&($(".hamberger").removeClass("active"),$(".page-dashboard").removeClass("page"),$(".sidebar-content").removeClass("transparent",800),$(".sidebar").addClass("open",600),$(".sidebar").removeClass("close-sm",600)),setTimeout(function(){$(".hamberger").removeClass("disable")},1200)}),$(document).ready(function(){sidebar()}),$(function(){$(".hide-show").show(),$(".hide-show").addClass("show"),$(".hide-show").click(function(){$(this).hasClass("show")?($(this).html('<i class="fa fa-eye-slash"></i>'),$('input[name="password"]').attr("type","text"),$(this).removeClass("show")):($(this).html('<i class="fa fa-eye"></i>'),$('input[name="password"]').attr("type","password"),$(this).addClass("show"))}),$('form button[type="submit"]').on("click",function(){$(".hide-show span").text("Show").addClass("show"),$(".hide-show").parent().find('input[name="login[password]"]').attr("type","password")})}),$(".standar").on("click",function(s){$("#standard").show()}),$(".close-button,.btn-close").click(function(){$("#standard").hide()}),$(".large").on("click",function(s){$("#large-modal").show()}),$(".close-button,.btn-close").click(function(){$("#large-modal").hide()}),$(".small").on("click",function(s){$("#small").show()}),$(".close-button,.btn-close").click(function(){$("#small").hide()}),$(".btn-confirmation").on("click",function(s){$(".close-button").hide(),$("#modal-confirmation").show()}),$(".close-button,.btn-close").click(function(){$("#modal-confirmation").hide()}),$(document).ready(function(){$(".accordion-tabs-minimal").each(function(s){$(this).children("li").first().children("a").addClass("is-active").next().addClass("is-open").show()}),$(".accordion-tabs-minimal").on("click","li > a.tab-link",function(s){if($(this).hasClass("is-active"))s.preventDefault();else{s.preventDefault();var e=$(this).closest(".accordion-tabs-minimal");e.find(".is-open").removeClass("is-open").hide(),$(this).next().toggleClass("is-open").toggle(),e.find(".is-active").removeClass("is-active"),$(this).addClass("is-active")}})}),$(".chosen-select").chosen({width:"auto"});
//# sourceMappingURL=../maps/scripts/script-327842c2fb.js.map
