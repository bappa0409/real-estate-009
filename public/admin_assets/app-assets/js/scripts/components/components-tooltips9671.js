!function(t,e,o){"use strict";var n=e.getElementById("manual-tooltip"),i=new bootstrap.Tooltip(n);n.addEventListener("click",(function(){i.show()})),n.addEventListener("mouseleave",(function(){i.hide()}));var l=e.getElementById("show-method"),d=new bootstrap.Tooltip(l);l.addEventListener("click",(function(){d.show()}));var r=e.getElementById("hide-method"),a=new bootstrap.Tooltip(r);r.addEventListener("mouseenter",(function(){a.show()})),r.addEventListener("click",(function(){a.hide()}));var s=e.getElementById("toggle-method"),p=new bootstrap.Tooltip(s);s.addEventListener("click",(function(){p.toggle()}));var c=e.getElementById("show-tooltip");new bootstrap.Tooltip(c,{title:"Tooltip Show Event",trigger:"click",placement:"right"});c.addEventListener("show.bs.tooltip",(function(){alert("Show event fired.")}));var v=e.getElementById("shown-tooltip");new bootstrap.Tooltip(v,{title:"Tooltip Shown Event",trigger:"click",placement:"top"});v.addEventListener("shown.bs.tooltip",(function(){alert("Shown event fired.")}));var E=e.getElementById("hide-tooltip");new bootstrap.Tooltip(E,{title:"Tooltip Hide Event",trigger:"click",placement:"bottom"});E.addEventListener("hide.bs.tooltip",(function(){alert("Hide event fired.")}));var g=e.getElementById("hidden-tooltip");new bootstrap.Tooltip(g,{title:"Tooltip Hidden Event",trigger:"click",placement:"left"});g.addEventListener("hidden.bs.tooltip",(function(){alert("Hidden event fired.")}));var h=e.getElementById("inserted-tooltip");new bootstrap.Tooltip(h,{title:"Tooltip inserted Event",trigger:"click",placement:"left"});h.addEventListener("inserted.bs.tooltip",(function(){alert("inserted event fired.")}))}(window,document,jQuery);