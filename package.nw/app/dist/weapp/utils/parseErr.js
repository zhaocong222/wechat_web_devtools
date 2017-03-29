"use strict";function init(){function e(e,r,t,n){t=t>0?t:1;var s=p(e,r,t);return n+"\n"+s}var r=require("path"),t=require("fs"),n=require("../../config/config.js"),s=require("../../lib/jsonlint.js").parser,a=require("../../stores/projectStores.js"),p=require("babel-code-frame");s.parseError=s.lexer.parseError=function(e,r){throw r};var o=n.WXML_ERROR,i=n.WXML_LOSE_ERROR;_exports={},_exports.parseWXMLRuntimeErr=function(s){var p=a.getCurrentProject(),o=s.message.replace(n.WXML_RUNTIME_ERROR,""),i=o.split(":"),c=parseInt(i[2]),l=parseInt(i[3]);if(c!==-1){var u=t.readFileSync(r.join(p.projectpath,i[0]),"utf8"),f=o.replace(i[0]+":"+i[1]+":"+i[2]+":"+i[3]+":","").replace(/`/g,'"'),g=e(u,c,l,f),m={file:i[0],reason:f,msg:g};return m}},_exports.parseJsFileErr=function(e){var n=e.file.replace(/\.js$/,""),s=e.project,a=JSON.parse(t.readFileSync(r.join(s.projectpath,"app.json"),"utf8")),p=a.pages,o=p.findIndex(function(e){return e==n});return{file:n,msg:" app.json.pages\n > | pages["+o+"] : "+p[o]}},_exports.parseJsonContentErr=function(e){return{file:e.file,msg:e.data}},_exports.parseJsonEntranceErr=function(e){var r=JSON.parse(e.data),t=r.pages;return{file:e.file,msg:"未找到入口页面\napp.json 中定义的 pages : "+JSON.stringify(t)}},_exports.parseJsonFileErr=function(e){return{file:e.file,msg:"未找到入口 "+e.file+" 文件，或者文件读取失败，请检查后重新编译。"}},_exports.parseJsonParseErr=function(r){var t=r.data;r.e;try{s.parse(t)}catch(s){var n="Expecting "+s.expected+", got "+s.token,a=e(t,s.line,s.loc.first_column,n);return r.msg=a,delete r.data,delete r.e,r}return r.msg=r.e.toString(),r},_exports.parseWxmlErr=function(n,s){var a=(s||"").trim().split(":");try{if(a.length){var p=r.join(n.projectpath,a[0]),i=(t.readFileSync(p,"utf8").split("\n"),parseInt(a[1])),c=parseInt(a[2]-1),l=e(t.readFileSync(p,"utf8"),i,c,a[3]),u={file:a[0],msg:l};return""+o+encodeURIComponent(JSON.stringify(u))}}catch(e){return s}},_exports.parseWxmlLoseErr=function(e,r){var t=r.match(/(\d.*?)\:/),n=t[1],s=JSON.parse(r.replace(t[0],"")),a="未找到 "+s.pages[n]+".wxml 文件 \n > "+n+" "+s.pages[n];return""+i+encodeURIComponent(a)},_exports.parseWxssErr=function(n){var s=n.msg,p=a.getCurrentProject();try{s=s.split("\n")[0];var o=s.match(/ERR:\s(.+)\((\d*):(\d*)\):\s*?(.+)/),i=parseInt(o[2]),c=parseInt(o[3]-1),l=o[4].replace(/`/g,'"'),u=o[1],f=t.readFileSync(r.join(p.projectpath,u),"utf8"),g=e(f,i,c,l),m={file:u,reason:l,msg:g};return m}catch(e){}}}var _exports;init(),module.exports=_exports;