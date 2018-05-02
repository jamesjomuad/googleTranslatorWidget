`<div class="dropdown lang-menu translation-links">
    <button class="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        EN
        <i class="icon ion-chevron-down"></i>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li><a href="#" data-lang="English">EN</a></li>
        <li><a href="#" data-lang="French">FR</a></li>
        <li><a href="#" data-lang="German">DE</a></li>
        <li><a href="#" data-lang="Spanish">ES</a></li>
        <li><a href="#" data-lang="Portuguese">BR</a></li>
        <li><a href="#" data-lang="Chinese">ZH</a></li>
        <li><a href="#" data-lang="Norwegian">NO</a></li>
        <li><a href="#" data-lang="Danish">DA</a></li>
        <li><a href="#" data-lang="Swedish">SV</a></li>
    </ul>
</div>`

$(function () {
    this.gTranslator
    var element = $('<div/>').attr('id', 'googleTranslateEl')
    $('body').append(element)

    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'googleTranslateEl');
    }
    $.getScript('http://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit')
    $(".translation-links a").click(function () {
        var t = $(this).data("lang"),
            n = $(".goog-te-menu-frame:first");
        return n.size() ? (n.contents().find(".goog-te-menu2-item span.text:contains(" + t + ")").get(0).click(), !1) : (alert("Error: Could not find Google translate frame."), !1)
    });
})


var data = [
    {label:'tsdfasdf',lang:'en'},
    {label:'French',lang:'fr'}
];
var $list = '<li><a href="#" data-lang="{{lang}}">{{label}}</a></li>';
var mapped = $.map( data, function ( v ) {
    return $list.replace( /{{lang}}/, v.lang ).replace( /{{label}}/, v.label );
});
console.log(mapped)