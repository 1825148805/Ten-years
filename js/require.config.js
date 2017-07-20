/**
 * @description javascript for require js config
 * @author TuzK1ss
 * @date 15/8/10.
 */


require.config({
    urlArgs: "st=" + (new Date()).getTime(),
    baseUrl : '/static/scripts/',
    paths: {

        jquery : 'libs/jquery-1.11.3.min',
        doT: 'libs/dot',
        md5: 'libs/md5',

        tyCommon: 'common/tyCommon',
        tyEventHandler : 'common/tyEventHandler',


        'feeds-common':'view/feeds-common',
        tooltipster : 'libs/jquery.tooltipster.min',

        // 登陆时间轴所需JS
        timeline : 'libs/storyjs-embed',
        timeline2 : 'libs/storyjs-embed2',
        timelineData :'common/timelineData',

        limitInput : 'common/LimitInput.min',
        limit : 'common/limit',


        // view
        tyExplore : 'view/explore',
        channel : 'view/channel',
        mine    : 'view/mine',
        layoutLogin : 'view/layoutLogin',
        layoutSearch : 'view/layoutSearch',
        layoutMsg : 'view/layoutMsg',

        tyAddArticle : 'common/tyAddArticle',
        tyModifyArticle : 'common/tyModifyArticle',
        simditorModule : 'libs/simditor/module',
        simditorHotkeys : 'libs/simditor/hotkeys',
        simditorUploader : 'libs/simditor/uploader',
        simditor : 'libs/simditor/simditor',


        tyAddMood : 'common/tyAddMood',
        tyAddDream : 'common/tyAddDream',
        tyAddTimeline : 'common/tyAddTimeline',
        feeds : 'view/feeds',

        //tyFeedCommon : 'common/tyFeedCommon',
        tyArticle : 'common/tyArticle',
        datePicker : 'libs/datepicker.min'


    },
    shim: {
        'simditor' : {
            deps : ['jquery', 'simditorModule', 'simditorHotkeys','simditorUploader' ]
        },
        'tyAddArticle' : {
            deps : ['simditor']
        },
        'tyModifyArticle' : {
            deps : ['simditor']
        },
        'tyCommon' : {
            deps : ['jquery', 'doT']
        },
        tyEventHandler : {
            deps : ['jquery', 'tyCommon']
        },
        'tyAddMood' : {
            deps : ['jquery']
        },
        'tyAddDream' : {
            deps : ['jquery', 'limit']
        },
        'feeds' : {
            deps : ['jquery', 'tyCommon']
        },
        'tyFeedCommon' : {
            deps : ['jquery']
        },
        'tyArticle' : {
            deps : ['jquery']
        },
        'layoutSearch' : {
            deps : ['jquery', 'doT']
        },
        "feeds-common" : {
            deps : ['jquery', 'doT', 'common']
        },
        "mine" : {
            deps : ['tyCommon']
        },
        "datePicker" : {
            deps : ['jquery']
        }
    }
});

