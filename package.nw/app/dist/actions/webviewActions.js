"use strict";function init(){var t=require("../dispatcher/dispatcher.js"),e={cleanWebview:function(e){t.dispatch({actionType:"ClEAN_WEBVIEW",webviewID:e})},deleteWebviewID:function(e){t.dispatch({actionType:"DELETE_WEBVIEW_ID",webviewID:e})},changeWebviewID:function(e){t.dispatch({actionType:"CHANGE_WEBVIEW_ID",webviewID:e})},setWebviewSnapshot:function(e,i){t.dispatch({actionType:"SET_WEBVIEW_SNAPSHOT",webviewID:e,data:i})},setInitURL:function(e){t.dispatch({actionType:"SET_INIT_URL",URL:e})},clearWebview:function(e){t.dispatch({actionType:"CLEAR_WEBVIEW_DATA",data:e})},upWebviewStatus:function(e,i){t.dispatch({webviewID:e,actionType:"UP_WEBVIEW_STATUS",data:i})},setWebviewAction:function(e,i){t.dispatch({webviewID:e,actionType:"SET_WEBVIEW_ACTION",data:i})},execWebviewJSSDK:function(e,i){t.dispatch({webviewID:e,actionType:"EXEC_WEBVIEW_JSSDK",data:i})},getA8keyWebview:function(e,i){t.dispatch({webviewID:e,actionType:"GET_A8KEY_WEBVIEW",data:i})},showShareWebview:function(e,i){t.dispatch({webviewID:e,actionType:"SHOW_SHARE_WEBVIEW",data:i})},setWebviewUA:function(e){t.dispatch({actionType:"SET_WEBVIEW_UA",data:e})},setWebviewInfo:function(e){t.dispatch({actionType:"SET_WEBVIEW_INFO",data:e})},sendJSSDKRes:function(e,i,a,n){t.dispatch({actionType:"GET_JSSDK_RES",webviewID:e,sdkName:i,sdkRes:a,sdkResExt:n})},setInterfaceFromPageFrame:function(e,i){t.dispatch({actionType:"SET_INTERFACT_FROMPAGEFRAME",webviewID:e,header:i})},asTojs:function(e){t.dispatch({actionType:"AS_TO_JS",data:e})},upASData:function(e,i){t.dispatch({actionType:"UP_AS_DATA",data:i,appid:e})},upBLData:function(e,i){t.dispatch({actionType:"UP_BL_DATA",data:i,appid:e})},asPublish:function(e){t.dispatch({actionType:"AS_PUBLISH",msg:e})},postMessageToAS:function(e){t.dispatch({actionType:"POST_MSG_TOAS",msg:e})},sendASSDK:function(e,i,a){t.dispatch({actionType:"SEND_AS_SDK",api:e,data:i,callback:a})},stopPullDownRefresh:function(e){t.dispatch({actionType:"STOP_PULL_DOWN_REFRESH",args:e})},touchSetSuc:function(e){t.dispatch({actionType:"TOUCH_SET_SUC",webviewID:e})},toggleRecordWording:function(e){t.dispatch({actionType:"TOGGLE_RECORD_WORDING",show:e})},operatePaymentQrcodeWnd:function(e){t.dispatch({actionType:"OPERATE_PAYMENT_QRCODE_WND",data:e})}};_exports=e}var _exports;init(),module.exports=_exports;