/*
*   Ref: https://sites.google.com/site/tomihasa/google-language-codes
*/
;(function(w,$){
    "use strict";
    var settings;

    $.fn.googleTranslate = function(options){
        settings = $.extend({
            // default options.
            default:'en',
            lang: ['en','fr','de','es','pt-BR','zh-CN','no','da','sv'],
            languages: {
                'af': 'Afrikaans',
                'ak': 'Akan',
                'sq': 'Albanian',
                'am': 'Amharic',
                'ar': 'Arabic',
                'hy': 'Armenian',
                'az': 'Azerbaijani',
                'eu': 'Basque',
                'be': 'Belarusian',
                'bem': 'Bemba',
                'bn': 'Bengali',
                'bh': 'Bihari',
                'bs': 'Bosnian',
                'br': 'Breton',
                'bg': 'Bulgarian',
                'km': 'Cambodian',
                'ca': 'Catalan',
                'chr': 'Cherokee',
                'ny': 'Chichewa',
                'zh-CN': 'Chinese (Simplified)',
                'zh-TW': 'Chinese (Traditional)',
                'co': 'Corsican',
                'hr': 'Croatian',
                'cs': 'Czech',
                'da': 'Danish',
                'nl': 'Dutch',
                'en': 'English',
                'eo': 'Esperanto',
                'et': 'Estonian',
                'ee': 'Ewe',
                'fo': 'Faroese',
                'tl': 'Filipino',
                'fi': 'Finnish',
                'fr': 'French',
                'fy': 'Frisian',
                'gaa': 'Ga',
                'gl': 'Galician',
                'ka': 'Georgian',
                'de': 'German',
                'el': 'Greek',
                'gn': 'Guarani',
                'gu': 'Gujarati',
                'ht': 'Haitian Creole',
                'ha': 'Hausa',
                'haw': 'Hawaiian',
                'iw': 'Hebrew',
                'hi': 'Hindi',
                'hu': 'Hungarian',
                'is': 'Icelandic',
                'ig': 'Igbo',
                'id': 'Indonesian',
                'ia': 'Interlingua',
                'ga': 'Irish',
                'it': 'Italian',
                'ja': 'Japanese',
                'jw': 'Javanese',
                'kn': 'Kannada',
                'kk': 'Kazakh',
                'rw': 'Kinyarwanda',
                'rn': 'Kirundi',
                'kg': 'Kongo',
                'ko': 'Korean',
                'kri': 'Krio (Sierra Leone)',
                'ku': 'Kurdish',
                'ckb': 'Kurdish (Soranî)',
                'ky': 'Kyrgyz',
                'lo': 'Laothian',
                'la': 'Latin',
                'lv': 'Latvian',
                'ln': 'Lingala',
                'lt': 'Lithuanian',
                'loz': 'Lozi',
                'lg': 'Luganda',
                'ach': 'Luo',
                'mk': 'Macedonian',
                'mg': 'Malagasy',
                'ms': 'Malay',
                'ml': 'Malayalam',
                'mt': 'Maltese',
                'mi': 'Maori',
                'mr': 'Marathi',
                'mfe': 'Mauritian Creole',
                'mo': 'Moldavian',
                'mn': 'Mongolian',
                'ne': 'Nepali',
                'pcm': 'Nigerian Pidgin',
                'nso': 'Northern Sotho',
                'no': 'Norwegian',
                'nn': 'Norwegian (Nynorsk)',
                'oc': 'Occitan',
                'or': 'Oriya',
                'om': 'Oromo',
                'ps': 'Pashto',
                'fa': 'Persian',
                'pl': 'Polish',
                'pt-BR': 'Portuguese (Brazil)',
                'pt-PT': 'Portuguese (Portugal)',
                'pa': 'Punjabi',
                'qu': 'Quechua',
                'ro': 'Romanian',
                'rm': 'Romansh',
                'nyn': 'Runyakitara',
                'ru': 'Russian',
                'gd': 'Scots Gaelic',
                'sr': 'Serbian',
                'sh': 'Serbo-Croatian',
                'st': 'Sesotho',
                'tn': 'Setswana',
                'crs': 'Seychellois Creole',
                'sn': 'Shona',
                'sd': 'Sindhi',
                'si': 'Sinhalese',
                'sk': 'Slovak',
                'sl': 'Slovenian',
                'so': 'Somali',
                'es': 'Spanish',
                'es-419': 'Spanish (Latin American)',
                'su': 'Sundanese',
                'sw': 'Swahili',
                'sv': 'Swedish',
                'tg': 'Tajik',
                'ta': 'Tamil',
                'tt': 'Tatar',
                'te': 'Telugu',
                'th': 'Thai',
                'ti': 'Tigrinya',
                'to': 'Tonga',
                'lua': 'Tshiluba',
                'tum': 'Tumbuka',
                'tr': 'Turkish',
                'tk': 'Turkmen',
                'tw': 'Twi',
                'ug': 'Uighur',
                'uk': 'Ukrainian',
                'ur': 'Urdu',
                'uz': 'Uzbek',
                'vi': 'Vietnamese',
                'cy': 'Welsh',
                'wo': 'Wolof',
                'xh': 'Xhosa',
                'yi': 'Yiddish',
                'yo': 'Yoruba',
                'zu': 'Zulu'
            }
        }, options );

        $.fn.googleTranslate.init();
        $(this).after($.fn.googleTranslate.build());
        $(this).remove();
        $.fn.googleTranslate.events();
    };

    $.fn.googleTranslate.helper = {
        strRand: function(){
            return Math.random().toString(30).substring(7);
        },
        toTitleCase: function(str) {
            var lcStr = str.toLowerCase();
            return lcStr.replace(/(?:^|\s)\w/g, function(match) {
                return match.toUpperCase();
            });
        }
    };

    $.fn.googleTranslate.init = function(){
        if($('iframe.goog-te-menu-frame').length)
            console.log('Google translator already loaded!')
        else
        {
            $("body").append($('<div id="googleTranslator"></div>'))
            w.gTransInit = function(){
                new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false}, 'googleTranslator');
            }
            $.getScript('//translate.google.com/translate_a/element.js?cb=gTransInit')
        }
    };

    $.fn.googleTranslate.events = function(){
        $(".translation-links a").click(function (){
            var lang = $(this).data("lang"),n = $(".goog-te-menu-frame:first");
            console.log(n)
            return n.length ? (n.contents().find(".goog-te-menu2-item span.text:contains(" + lang + ")").get(0).click(), !1) : (alert("Error: Could not find Google translate frame."), !1)
        });
    }

    $.fn.googleTranslate.build = function(){
        var $htm = $(`<div class="dropdown lang-menu translation-links">
            <button class="dropdown-toggle btn btn-default btn-sm" type="button" id="googleTranslateDrop" data-toggle="dropdown" aria-haspopup="true"aria-expanded="true">EN<i class="icon ion-chevron-down"></i></button><ul class="dropdown-menu" aria-labelledby="googleTranslateDrop"></ul>
        </div>`);
        var $list = '<li><a href="#" data-lang="{{lang}}">{{label}}</a></li>';
        var $ul = $htm.find('ul');
        $ul.on('updatedList',function ( event, data ) {
            var list = $.map( data, function ( v ) {
                return $list.replace( /{{label}}/, v.label ).replace( /{{lang}}/, v.lang );
            });
            $ul.html(list);
        })
        $ul.trigger( "updatedList", [ $.fn.googleTranslate.getLang()]);
        return $htm;
    }

    $.fn.googleTranslate.getLang = function(){
        var Lang = null;
        if(settings.lang.constructor===Array)
            Lang = $.map(settings.lang,function(v){
                return {
                    lang:v,
                    label:settings.languages[v]
                };
            })
        else if(settings.lang.constructor===Object)
            Lang = $.map(settings.lang,function(v,k){
                return {
                    lang: settings.languages[k],
                    label: v
                };
            })
        return Lang;
    }

    return this;
})(window,jQuery)