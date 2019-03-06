"use strict";
var CANHCAM_APP = {
	ACTIVE_FIXED_HEADER: !0,
	HEADER_TRANPARENT: !1,
	ACTIVE_HEADER_POSITION: 1,
	ACTIVE_PADDING_MAIN: !0,
	ACTIVE_VALIDATOR: !0,
	ACTIVE_SELECT: !0,
	ACTIVE_FIXED_FOOTER: !0,
	ACTIVE_LIST_TO_SELECT: !0,
	DISPLAY_FOOTER: 600,
	ACTIVE_RESPONSIVE: !0,
	ACTIVE_BACKTOTOP: !0,
	DISPLAY_BACKTOTOP: 100,
	CHANGE_GRID: 991,
	CHANGE_GRID_SM: 767,
	DEV_MODE: !1,
	DEV_MODE_GIRD_FULL: !1
};

function backToTop() {
	if ($("#back-to-top").length) {
		var e = function () {
			$(window).scrollTop() > CANHCAM_APP.DISPLAY_BACKTOTOP ? $("#back-to-top").addClass("show") : $("#back-to-top").removeClass("show")
		};
		e(), $(window).on("scroll", function () {
			e()
		}), $("#back-to-top").on("click", function (e) {
			e.preventDefault(), $("html,body").animate({
				scrollTop: 0
			}, 700)
		})
	}
}

function CanhCamResponsive() {
	$("[bg-mask]").each(function () {
		var e = $(this).attr("bg-mask");
		$(this).css({
			"mask-image": "url(" + e + ")",
			"mask-position": "center center",
			"mask-repeat": "no-repeat",
			"-webkit-mask-image": "url(" + e + ")",
			"-webkit-mask-position": "center center",
			"-webkit-mask-repeat": "no-repeat"
		})
	}), $("[bg-img]").each(function () {
		var e = $(this).attr("bg-img"),
			a = $(this).attr("bg-pos"),
			t = $(this).attr("bg-size");
		a && a.length > 0 ? $(this).css({
			"background-position": a
		}) : $(this).css({
			"background-position": "center center"
		}), t && t.length > 0 ? $(this).css({
			"background-size": t
		}) : $(this).css({
			"background-size": "cover"
		}), $(this).css({
			"background-image": "url(" + e + ")"
		})
	}), $("[bg-img-responsive]").each(function () {
		var e = $(this).attr("bg-img-responsive"),
			a = $(this).attr("bg-img-responsive-sm"),
			t = $(this).attr("bg-img-responsive-xs");
		$(window).width() >= CANHCAM_APP.CHANGE_GRID ? $(this).css({
			"background-image": "url(" + e + ")",
			"background-position": "center center",
			"background-size": "cover"
		}) : $(window).width() < CANHCAM_APP.CHANGE_GRID && $(window).width() > CANHCAM_APP.CHANGE_GRID_SM ? $(this).css({
			"background-image": "url(" + a + ")",
			"background-position": "center center",
			"background-size": "cover"
		}) : $(this).css({
			"background-image": "url(" + t + ")",
			"background-position": "center center",
			"background-size": "cover"
		})
	}), $("[img-src-responsive]").each(function () {
		var e = $(this).attr("img-src-responsive"),
			a = $(this).attr("img-src-responsive-sm"),
			t = $(this).attr("img-src-responsive-xs");
		$(window).width() >= CANHCAM_APP.CHANGE_GRID ? $(this).attr("src", "" + e) : $(window).width() < CANHCAM_APP.CHANGE_GRID && $(window).width() > CANHCAM_APP.CHANGE_GRID_SM ? $(this).attr("src", "" + a) : $(this).attr("src", "" + t)
	})
}

function checkDev() {
	$("#devtools").length && ($(window).width() < 576 ? $(".canhcam-develop #devtools .header-devtools h3").html("Dev - XS") : $(window).width() >= 576 && $(window).width() < 768 ? $(".canhcam-develop #devtools .header-devtools h3").html("Dev - SM") : $(window).width() >= 768 && $(window).width() < 992 ? $(".canhcam-develop #devtools .header-devtools h3").html("Dev - MD") : $(window).width() >= 992 && $(window).width() < 1200 ? $(".canhcam-develop #devtools .header-devtools h3").html("Dev - LG") : $(".canhcam-develop #devtools .header-devtools h3").html("Dev - XL"))
}

function countUpCanhCam() {
	$("[data-count]").each(function () {
		var e = $(this).offset().top,
			a = $(window).height(),
			t = $(window).scrollTop(),
			n = 0;
		$(this).attr("data-top") && $(this).attr("data-top").length && (n = parseInt($(this).attr("data-top")));
		var o = !1;
		if (e + n - (a + t) <= 0 && !o) {
			var i = $(this),
				c = i.attr("data-count"),
				s = parseInt(i.attr("data-duration"));
			$({
				countNum: i.text()
			}).animate({
				countNum: c
			}, {
				duration: s,
				easing: "linear",
				step: function () {
					i.text(Math.floor(this.countNum))
				},
				complete: function () {
					i.text(this.countNum), o = !0
				}
			})
		}
	})
}

function CanhCamChangeDataHoverClick() {
	$("[data-change]").each(function () {
		var e = $(this).attr("data-new"),
			a = $(this).attr("data-old"),
			t = $(this).attr("data-change");
		t && t.length > 0 && ("src" === t ? $(this).hover(function () {
			$(this).attr(t, e)
		}, function () {
			$(this).attr(t, a)
		}) : "background" === t || "background-image" === t ? $(this).hover(function () {
			$(this).css(t, "url(" + e + ")")
		}, function () {
			$(this).css(t, "url(" + a + ")")
		}) : "class" === t && $(this).hover(function () {
			$(this).removeClass(a).addClass(e)
		}, function () {
			$(this).removeClass(e).addClass(a)
		}))
	})
}

function setFooter() {
	var e = $("body").outerHeight(),
		a = $("header").outerHeight(),
		t = $("footer").outerHeight(),
		n = ($("main").outerHeight(), e - (a + t)),
		o = e - t;
	$(window).width() > CANHCAM_APP.DISPLAY_FOOTER ? $(window).width() <= CANHCAM_APP.CHANGE_GRID ? $("main").css("min-height", o + "px") : CANHCAM_APP.ACTIVE_FIXED_HEADER ? $("main").css("min-height", o + "px") : $("main").css("min-height", n + "px") : $("main").css("min-height", "initial")
}

function setHeader(e) {
	e >= CANHCAM_APP.ACTIVE_HEADER_POSITION ? $("header").addClass("active") : $("header").removeClass("active")
}

function setMain() {
	var e = $("header").outerHeight();
	$(window).width() <= CANHCAM_APP.CHANGE_GRID ? $("main").css("padding-top", e + "px") : CANHCAM_APP.ACTIVE_PADDING_MAIN ? CANHCAM_APP.ACTIVE_FIXED_HEADER ? $("main").css("padding-top", e + "px") : $("main").css("padding-top", "initial") : $("main").css("padding-top", "0px")
}

function setHeaderTranparent(e) {
	e >= CANHCAM_APP.ACTIVE_HEADER_POSITION ? $("header").removeClass("has-tranparent") : $("header").addClass("has-tranparent")
}

function b64EncodeUnicode(e) {
	return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, a) {
		return String.fromCharCode("0x" + a)
	}))
}

function b64DecodeUnicode(e) {
	return decodeURIComponent(atob(e).split("").map(function (e) {
		return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
	}).join(""))
}
if ($(document).ready(function () {
		CANHCAM_APP.ACTIVE_BACKTOTOP && backToTop()
	}), $(function () {
		CANHCAM_APP.ACTIVE_RESPONSIVE && CanhCamResponsive()
	}), $(window).resize(function () {
		CANHCAM_APP.ACTIVE_RESPONSIVE && CanhCamResponsive()
	}), $(function () {
		$('[data-toggle="tooltip"]').tooltip(), $('[data-toggle="popover"]').popover({
			trigger: "focus"
		})
	}), $(window).width() > CANHCAM_APP.CHANGE_GRID ? $(".dropdown").on("mouseenter mouseleave", function () {
		var e = $(this).find('[dropdown-type="hover"]').parents(".dropdown");
		e && e.length > 0 && ($(this).find('[dropdown-type="hover"]').removeAttr("data-toggle"), setTimeout(function () {
			e[e.is(":hover") ? "addClass" : "removeClass"]("show"), e.is(":hover") ? e.find(".dropdown-menu").show() : e.find(".dropdown-menu").hide()
		}, 10))
	}) : $(".dropdown").each(function () {
		$(this).addClass("show"), $(this).find(".dropdown-menu").show()
	}), $(document).ready(function () {
		checkDev()
	}), $(window).resize(function () {
		checkDev()
	}), function (e) {
		e.fn.drags = function (a) {
			if ("" === (a = e.extend({
					handle: "",
					cursor: "move"
				}, a)).handle) var t = this;
			else t = this.find(a.handle);
			return t.find(".header-devtools").css("cursor", a.cursor).on("mousedown", function (t) {
				if ("" === a.handle) var n = e(this).parent().addClass("draggable");
				else n = e(this).parent().addClass("active-handle").parent().addClass("draggable");
				var o = n.css("z-index"),
					i = n.outerHeight(),
					c = n.outerWidth(),
					s = n.offset().top + i - t.pageY,
					r = n.offset().left + c - t.pageX;
				n.css("z-index", 99999).parents().on("mousemove", function (a) {
					getSizeDevTo(), e(".draggable").offset({
						top: a.pageY + s - i,
						left: a.pageX + r - c
					}).on("mouseup", function () {
						e(this).removeClass("draggable").css("z-index", o)
					}), e("#devtools .inline").offset({
						top: a.pageY + s - i
					}), e("#devtools .online").offset({
						left: a.pageX + r - c
					})
				}), t.preventDefault()
			}).on("mouseup", function () {
				"" === a.handle ? e(this).removeClass("draggable") : e(this).removeClass("active-handle").parent().removeClass("draggable")
			})
		}
	}(jQuery), $(document).ready(function () {
		countUpCanhCam()
	}), $(window).scroll(function () {
		countUpCanhCam()
	}), $(window).resize(function () {
		countUpCanhCam()
	}), $(function () {
		CanhCamChangeDataHoverClick()
	}), $(document).ready(function () {
		CANHCAM_APP.ACTIVE_FIXED_FOOTER && setFooter()
	}), $(window).resize(function () {
		CANHCAM_APP.ACTIVE_FIXED_FOOTER && setFooter()
	}), $(document).ready(function () {
		CANHCAM_APP.ACTIVE_FIXED_HEADER ? ($("header").addClass("fixedheader"), $(window).scrollTop() >= CANHCAM_APP.ACTIVE_HEADER_POSITION && setHeader($(window).scrollTop())) : $(window).width() <= CANHCAM_APP.CHANGE_GRID ? $("header").addClass("fixedheader") : $("header").removeClass("fixedheader"), $("header").hasClass("fixedheader") && $("main").addClass("main-fixedheader")
	}), $(window).scroll(function () {
		setHeader($(document).scrollTop())
	}), $(window).resize(function () {
		CANHCAM_APP.ACTIVE_FIXED_HEADER || ($(window).width() <= CANHCAM_APP.CHANGE_GRID ? $("header").addClass("fixedheader") : $("header").removeClass("fixedheader"))
	}), $(document).ready(function () {
		setMain()
	}), $(window).resize(function () {
		setMain()
	}), $(document).ready(function () {
		CANHCAM_APP.HEADER_TRANPARENT && ($("header").addClass("has-tranparent"), $(window).scrollTop() >= CANHCAM_APP.ACTIVE_HEADER_POSITION && setHeaderTranparent($(window).scrollTop()))
	}), $(window).scroll(function () {
		CANHCAM_APP.HEADER_TRANPARENT && setHeaderTranparent($(document).scrollTop())
	}), navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement("style");
	msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.head.appendChild(msViewportStyle)
}

function listToSelect() {
	$("[data-select]").each(function () {
		var e = $(this),
			a = $(document.createElement("select")).insertBefore($(this).hide());
		a.addClass("custom-select").attr("data-select-show", ""), $(">li a", this).each(function () {
			$(document.createElement("option")).appendTo(a).val(this.href).html($(this).html())
		}), e.hide().removeAttr("data-select").attr("data-select-changed", ""), a.on("change", function () {
			var e = $(this).val();
			return e && (window.location = e), !1
		})
	})
}

function selectChangeToList() {
	CANHCAM_APP.ACTIVE_LIST_TO_SELECT && ($(window).width() > CANHCAM_APP.CHANGE_GRID_SM ? ($("[data-select-changed]").each(function () {
		$(this).show().removeAttr("data-select-changed").attr("data-select", "")
	}), $("[data-select-show]").remove()) : listToSelect())
}

function ccCreateRipple() {
	$("[ripple]").on("click", function (e) {
		var a = $('<div class="ripple" />'),
			t = $(this).offset(),
			n = e.pageY - t.top,
			o = e.pageX - t.left,
			i = $(".ripple");
		a.css({
			top: n - i.height() / 2,
			left: o - i.width() / 2,
			background: $(this).attr("ripple-color")
		}).appendTo($(this)), window.setTimeout(function () {
			a.remove()
		}, 1500)
	})
}

function selectResset(e) {
	$(e).val(null).trigger("change", 0)
}

function canhCamStickyComtent() {
	$("[data-fix]").each(function () {
		$(this).css({
			"z-index": "500"
		}), $(this).attr("data-top") && $(this).attr("data-top").length && $(this).css({
			top: $(this).attr("data-top")
		}), $(this).attr("data-left") && $(this).attr("data-left").length && $(this).css({
			left: $(this).attr("data-left")
		}), $(this).attr("data-bottom") && $(this).attr("data-bottom").length && $(this).css({
			bottom: $(this).attr("data-bottom")
		}), $(this).attr("data-right") && $(this).attr("data-right").length && $(this).css({
			right: $(this).attr("data-right")
		});
		var e = 0,
			a = "fixed",
			t = "static";
		$(this).attr("data-fix") && $(this).attr("data-fix").length && (e = parseInt($(this).attr("data-fix"))), $(this).attr("data-fix-type") && $(this).attr("data-fix-type").length && (a = $(this).attr("data-fix-type")), $(this).attr("data-fix-change") && $(this).attr("data-fix-change").length && (t = $(this).attr("data-fix-change")), $(this).css({
			position: a
		});
		var n = $(window).scrollTop();
		$(this).offset().top - n <= e && $(this).css({
			position: t,
			top: e + "px"
		})
	})
}

function CCHeader8() {
	$(".canhcam-header-8 .navbar-toggler").on("click", function () {
		$(".canhcam-header-8").addClass("expand")
	}), $(".canhcam-header-8 .navbar-closed").on("click", function () {
		$(".canhcam-header-8").removeClass("expand")
	})
}

function toggleSearch() {
	$(".canhcam-header-8 .navbar-collapse .searchclick").on("click", function () {
		$(this).toggleClass("active"), $(".canhcam-header-8 .navbar-collapse .searchbox").toggleClass("active")
	})
}

function ccHeader1() {
	$(".canhcam-header-8 .navbar-toggler").click(function () {
		$(".canhcam-header-8 #CCMenuHeader").addClass("active")
	}), $(".canhcam-header-8 .navbar-collapse .menubars .navbar-closed").click(function () {
		$(".canhcam-header-8 #CCMenuHeader").removeClass("active")
	})
}

function addClassByLocation() {
	var e = window.location.pathname;
	console.log(e), e.search("tin-tuc-su-kien") > 0 ? $(".Module.Module-143 .navbar-nav .nav-item:first-child").addClass("active") : e.search("thu-vien") > 0 ? $(".Module.Module-143 .navbar-nav .nav-item:nth-child(2)").addClass("active") : e.search("lien-he") > 0 && $(".Module.Module-143 .navbar-nav .nav-item:nth-child(3)").addClass("active")
}

function CCHeader8() {
	$(".canhcam-header-9 .navbar-toggler").on("click", function () {
		$(".canhcam-header-9").addClass("expand")
	}), $(".canhcam-header-9 .navbar-closed").on("click", function () {
		$(".canhcam-header-9").removeClass("expand")
	})
}

function marginDots() {
	$(".canhcam-slider-1 .owl-dots").length && $(window).width() > 992 && $(".canhcam-slider-1 .owl-dots").css({
		right: $(".canhcam-header-8 .container").offset().left - 25
	})
}

function checkTab1() {
	$(".canhcam-home-5 #cct-01-tab").tab("show").parents("li").addClass("active"), $('.canhcam-home-5 a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
		$(this).parents("ul").find("li").removeClass("active"), $(this).parents("li").addClass("active")
	})
}

function checkNewsNavScroll() {
	if ($(window).width() < 992) {
		var e = $(window).scrollTop(),
			a = $("header").outerHeight(),
			t = $(".canhcam-news-1 , .canhcam-news-details-1 , .canhcam-gallery-1").offset().top;
		$(window).height();
		t - a - e <= 0 ? 1 == $("header").hasClass("active") && $(".canhcam-news-1 .sidebar-wrap , .canhcam-news-details-1 .sidebar-wrap").addClass("active").css({
			top: a - 1 + "px"
		}) : $(".canhcam-news-1 .sidebar-wrap , .canhcam-news-details-1 .sidebar-wrap").removeClass("active").removeAttr("style")
	}
}

function clickNavNews() {
	var e = $(".canhcam-news-1 .sidebar-wrap h4 , .canhcam-news-details-1 .sidebar-wrap h4"),
		a = $(".canhcam-news-1 .sidebar-wrap ul , .canhcam-news-details-1 .sidebar-wrap ul");
	$(window).width() < 992 && ($(a).slideUp(), $(e).on("click", function () {
		$(this).toggleClass("is-active"), $(a).slideToggle()
	}))
}

function topNavNews() {
	var e = $("header").outerHeight();
	$(".canhcam-news-1 .sidebar").css({
		top: e
	})
}

function marginDots2() {
	$(".canhcam-slider-2 .owl-dots").length && $(window).width() > 992 && $(".canhcam-slider-2 .owl-dots").css({
		right: $(".canhcam-header-8 .container").offset().left - 40
	})
}

function clickNav() {
	var e = $(".canhcam-nav-3 .nav-lists .trigger-click , .canhcam-nav-4 .nav-lists .trigger-click"),
		a = $(".canhcam-nav-3 .nav-lists nav , .canhcam-nav-4 .nav-lists nav");
	$(window).width() < 992 && ($(a).slideUp(), $(e).on("click", function () {
		$(this).toggleClass("active"), $(".canhcam-nav-3 .nav-lists nav , .canhcam-nav-4 .nav-lists nav").slideToggle()
	}))
}

function topNav3() {
	var e = $("header").outerHeight();
	$(".canhcam-nav-3").css({
		top: e
	})
}

function checkMenuScroll4() {
	var e = $(".canhcam-nav-4"),
		a = $("header").outerHeight();
	if (e.length) {
		var t = $(window).scrollTop(),
			n = $("header").outerHeight() + 15,
			o = $(".canhcam-nav-4").offset().top;
		$(window).height();
		o - n - t <= 0 ? 1 == $("header").hasClass("active") && $(".canhcam-nav-4 .wrap-nav").addClass("active").css({
			top: a
		}) : $(".canhcam-nav-4 .wrap-nav").removeClass("active").removeAttr("style")
	}
}

function topNav4() {
	var e = $("header").outerHeight();
	$(".canhcam-nav-4").css({
		top: e
	})
}

function checkMenuScroll() {
	if ($(".canhcam-nav-3").length) {
		var e = $(window).scrollTop(),
			a = $("header").outerHeight(),
			t = $(".canhcam-nav-3").offset().top,
			n = $(window).height();
		t - a - e <= 0 ? 1 == $("header").hasClass("active") && $(".canhcam-nav-3 .wrap-nav").addClass("active").css({
			top: a - 1 + "px",
			left: 0,
			position: "fixed",
			width: "100%"
		}) : $(".canhcam-nav-3 .wrap-nav").removeClass("active").removeAttr("style"), $(".canhcam-nav-3 nav li").each(function () {
			var a = $(this).find("a").attr("data-link"),
				t = $("#" + a).offset().top;
			n + e - 400 >= t && ($(".canhcam-nav-3 nav li a").removeClass("active"), $(this).find("a").addClass("active"))
		})
	}
}

function scroll2Target() {
	$(".canhcam-nav-3 nav li a").removeClass("active"), $(".canhcam-nav-3 nav li:first-child a").addClass("active"), $(".canhcam-nav-3 nav li a").on("click", function () {
		return $(".canhcam-nav-3 nav li a").removeClass("active"), $(this).addClass("active"), $("html, body").animate({
			scrollTop: $("#" + $(this).attr("data-link")).offset().top - $(".canhcam-nav-3").outerHeight() - 80
		}, 500), !1
	})
}

function CCFooter6() {}

function owlNewDetail() {
	$(".canhcam-carousel-1 .owl-carousel").owlCarousel({
		items: 1,
		nav: !0,
		dots: !1,
		autoplay: !0,
		autoplayTimeout: 3e3,
		margin: 30,
		navText: ['<i class="fas fa-chevron-circle-left"></i>', '<i class="fas fa-chevron-circle-right"></i>'],
		responsive: {
			768: {
				items: 3
			},
			992: {
				items: 4
			}
		}
	})
}

function changeNewsDetail1() {
	$(".canhcam-news-details-1 .news-read").lightGallery({
		thumbnail: !0,
		animateThumb: !1,
		showThumbByDefault: !1,
		selector: ".item-news-read"
	})
}

function createNewsSocial1() {
	var e = document.URL,
		a = encodeURIComponent(document.URL);
	$(".fb-share-button").attr("data-href", e), $(".fb-share-button .fb-xfbml-parse-ignore").attr("href", "https://www.facebook.com/sharer/sharer.php?u=" + a + "&src=sdkpreparse"), $(".twitter-share-button").attr("data-url", e)
}

function changeIMGtoDiv1() {
	$(".canhcam-news-details-1 .othernews .item figure").each(function () {
		var e = $(this).find("img").attr("src");
		$(this).append('<div class="thumb"></div>'), $(this).find(".thumb").css({
			"background-image": "url(" + e + ")",
			"background-position": "center center",
			"background-size": "cover"
		})
	})
}

function clickNavGallery() {
	var e = $(".canhcam-gallery-1 .sidebar-wrap h4 ");
	$(window).width() < 992 && ($(e).next().slideUp(), $(e).on("click", function (e) {
		return $(this).toggleClass("is-active"), $(this).next().slideToggle(), !1
	}))
}
$(function () {
	var e = navigator.userAgent;
	e.indexOf("Mozilla/5.0") > -1 && e.indexOf("Android ") > -1 && e.indexOf("AppleWebKit") > -1 && -1 === e.indexOf("Chrome") && $("select.form-control").removeClass("form-control").css("width", "100%")
}), $(document).ready(function () {
	CANHCAM_APP.ACTIVE_LIST_TO_SELECT && $(window).width() <= CANHCAM_APP.CHANGE_GRID_SM && listToSelect()
}), $(window).resize(function () {
	CANHCAM_APP.ACTIVE_LIST_TO_SELECT && selectChangeToList()
}), console.log("%cCANHCAM", "font-size:100px;color:#ff451a;text-shadow:0 1px 0 #f73936,0 2px 0 #f73936 ,0 3px 0 #f73936 ,0 4px 0 #f73936 ,0 5px 0 #f73936 ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);"), console.log("%c CANHCAM %c - The best Web Solutions Provider", "border-radius: 2px; padding: 3px; background: #ff451a; color: #FFF", "color: #ff451a"), console.warn("CANHCAM warning: This is a browser feature intended for developers. If someone told you to copy and paste something here to enable a CANHCAM feature or 'hack' someone's account, it is a scam and will give them access to your CANHCAM account."), document.onkeyup = function (e) {
	if ((e = e || window.event).altKey && e.ctrlKey && e.shiftKey && 13 == e.which) return $("body"), alert(b64DecodeUnicode("QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv")), !1
}, $(document).ready(function () {
	ccCreateRipple()
}), $(document).ready(function () {
	CANHCAM_APP.ACTIVE_SELECT && ($(".select2").select2({
		placeholder: "Chọn một"
	}), $(".select2").on("select2:select", function (e) {
		$(e.currentTarget).val()
	}), $(".select2").on("select2:unselect", function (e) {
		$(e.currentTarget).val()
	}))
}), $(document).ready(function () {
	canhCamStickyComtent()
}), $(window).scroll(function () {
	canhCamStickyComtent()
}), $(window).resize(function () {
	canhCamStickyComtent()
}), $(document).ready(function () {
	CANHCAM_APP.ACTIVE_VALIDATOR && ($('[data-toggle="validator"]').validator({
		feedback: {
			success: "fa fa-check",
			error: "fa fa-close"
		}
	}).on("submit", function (e) {
		e.isDefaultPrevented() && $('[data-toggle="validator"]').find("select").parent(".form-group").addClass("has-danger")
	}), $('[data-toggle="validator"]').find("select").hasClass("has-success") && this.removeClass("has-danger"))
}), $(document).ready(function () {
	ccHeader1(), CCHeader8(), addClassByLocation(), $("header .hidden").kResponsiveMenu({
		resizeWidth: 992
	}), toggleSearch(), AOS.init();
}), $(window).resize(function () {
	$(".canhcam-header-8").removeClass("expand")
}), $(".searchresults").addClass("bg-body"), $(document).ready(function () {
	CCHeader8()
}), $(window).resize(function () {
	$(".canhcam-header-9").removeClass("expand")
}), $(function () {
	$(".canhcam-slider-1 .owl-carousel").length && $(".canhcam-slider-1 .owl-carousel").owlCarousel({
		items: 1,
		loop: !0,
		center: !0,
		padding: 0,
		margin: 0,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		nav: !1,
		dots: !0,
		autoplay: !0,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !0,
		callbacks: !0
	})
}), $(document).ready(function () {
	$(".canhcam-slider-1 .owl-dot").each(function () {
		var e = $(this).index();
		$(this).text(e + 1)
	}), marginDots()
}), $(function () {
	$(".canhcam-home-5 .list").length && $(".canhcam-home-5 .list").owlCarousel({
		animateIn: "fadeIn",
		animateOut: "fadeOut",
		items: 3,
		loop: !0,
		center: !1,
		padding: 10,
		margin: 20,
		navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
		nav: !0,
		dots: !1,
		autoplay: !1,
		autoplayTimeout: 3e3,
		autoplayHoverPause: !1,
		callbacks: !0,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	})
}), $(document).ready(function () {
	checkTab1()
}), $(function () {
	$(".canhcam-home-6 .list").length && $(".canhcam-home-6 .list").owlCarousel({
		animateIn: "fadeIn",
		animateOut: "fadeOut",
		items: 3,
		loop: !0,
		center: !1,
		padding: 10,
		margin: 20,
		navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
		nav: !0,
		dots: !1,
		autoplay: !1,
		autoplayTimeout: 3e3,
		autoplayHoverPause: !1,
		callbacks: !0,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	})
}), $(document).ready(function () {
	clickNavNews()
}), $(window).on("scroll", function () {
	$(".canhcam-news-1  .canhcam-news-details-1").length > 0 && checkNewsNavScroll()
}), $(".Module.Module-184").appendTo(".canhcam-news-1 .news-list .wrap-list"), $(function () {
	$(".canhcam-slider-2 .owl-carousel").length && $(".canhcam-slider-2 .owl-carousel").owlCarousel({
		items: 1,
		loop: !0,
		center: !0,
		padding: 0,
		margin: 0,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		nav: !1,
		dots: !0,
		autoplay: !0,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !0,
		callbacks: !0,
		mouseDrag: !1
	})
}), $(document).ready(function () {
	$(".canhcam-slider-2 .owl-dot").each(function () {
		var e = $(this).index();
		$(this).text(e + 1)
	}), marginDots2()
}), $(document).ready(function () {
	clickNav(), topNav3()
}), $(document).ready(function () {
	checkMenuScroll4()
}), $(window).on("scroll", function () {
	checkMenuScroll4()
}), $(document).ready(function () {
	checkMenuScroll(), scroll2Target(), setTimeout(function () {
		if (1 == $("header").hasClass("active")) {
			var e = $("header").outerHeight();
			$(".canhcam-nav-3").addClass("active").css({
				top: e - 1 + "px"
			})
		}
	}, 500)
}), $(window).on("scroll", function () {
	$(".canhcam-nav-3").length > 0 && checkMenuScroll()
}), $(function () {
	CCFooter6()
}), $(window).resize(function () {}), $(function () {
	$("#selectFooter select").on("change", function () {
		var e = $(this).val();
		return e && (window.location = e), !1
	})
}), $(function () {}), $(document).ready(function () {
	"/san-pham-dich-vu" === window.location.pathname && $(".canhcam-nav-4 .nav-lists ul li:first-child a").addClass("active")
}), $(document).ready(function () {
	owlNewDetail()
}), $(document).ready(function () {
	changeNewsDetail1(), createNewsSocial1(), changeIMGtoDiv1()
}), $(window).resize(function () {
	changeIMGtoDiv1()
}), $(document).ready(function () {
	$(".canhcam-gallery-1 .gallery-details .item .hidden").lightGallery({
		thumbnail: !0
	}), $(".canhcam-gallery-1 .gallery-details .item").each(function () {
		$(this).click(function () {
			$(this).find(".hidden a:first-child").trigger("click")
		})
	}), clickNavGallery()
});
