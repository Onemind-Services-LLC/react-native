(window.webpackJsonp=window.webpackJsonp||[]).push([[577],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),j=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=j(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=j(a),p=n,m=s["".concat(l,".").concat(p)]||s[p]||O[p]||b;return a?r.a.createElement(m,c(c({ref:t},o),{},{components:a})):r.a.createElement(m,c({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},657:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var n=a(2),r=a(7),b=(a(0),a(1006)),l={id:"asyncstorage",title:"\ud83d\udea7 AsyncStorage"},c={unversionedId:"asyncstorage",id:"version-0.63/asyncstorage",isDocsHomePage:!1,title:"\ud83d\udea7 AsyncStorage",description:"Deprecated. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.63/asyncstorage.md",slug:"/asyncstorage",permalink:"/docs/asyncstorage",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/asyncstorage.md",version:"0.63",lastUpdatedAt:1613038808},i=[{value:"Methods",id:"methods",children:[{value:"<code>getItem()</code>",id:"getitem",children:[]},{value:"<code>setItem()</code>",id:"setitem",children:[]},{value:"<code>removeItem()</code>",id:"removeitem",children:[]},{value:"<code>mergeItem()</code>",id:"mergeitem",children:[]},{value:"<code>clear()</code>",id:"clear",children:[]},{value:"<code>getAllKeys()</code>",id:"getallkeys",children:[]},{value:"<code>flushGetRequests()</code>",id:"flushgetrequests",children:[]},{value:"<code>multiGet()</code>",id:"multiget",children:[]},{value:"<code>multiSet()</code>",id:"multiset",children:[]},{value:"<code>multiRemove()</code>",id:"multiremove",children:[]},{value:"<code>multiMerge()</code>",id:"multimerge",children:[]}]}],o={rightToc:i};function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Deprecated.")," Use one of the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.directory/?search=storage"}),"community packages")," instead.")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"AsyncStorage")," is an unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It should be used instead of LocalStorage."),Object(b.b)("p",null,"It is recommended that you use an abstraction on top of ",Object(b.b)("inlineCode",{parentName:"p"},"AsyncStorage")," instead of ",Object(b.b)("inlineCode",{parentName:"p"},"AsyncStorage")," directly for anything more than light usage since it operates globally."),Object(b.b)("p",null,"On iOS, ",Object(b.b)("inlineCode",{parentName:"p"},"AsyncStorage")," is backed by native code that stores small values in a serialized dictionary and larger values in separate files. On Android, ",Object(b.b)("inlineCode",{parentName:"p"},"AsyncStorage")," will use either ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"http://rocksdb.org/"}),"RocksDB")," or SQLite based on what is available."),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"AsyncStorage")," JavaScript code is a facade that provides a clear JavaScript API, real ",Object(b.b)("inlineCode",{parentName:"p"},"Error")," objects, and non-multi functions. Each method in the API returns a ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(b.b)("p",null,"Importing the ",Object(b.b)("inlineCode",{parentName:"p"},"AsyncStorage")," library:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { AsyncStorage } from 'react-native';\n")),Object(b.b)("p",null,"Persisting data:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"_storeData = async () => {\n  try {\n    await AsyncStorage.setItem(\n      '@MySuperStore:key',\n      'I like to save it.'\n    );\n  } catch (error) {\n    // Error saving data\n  }\n};\n")),Object(b.b)("p",null,"Fetching data:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"_retrieveData = async () => {\n  try {\n    const value = await AsyncStorage.getItem('TASKS');\n    if (value !== null) {\n      // We have data!!\n      console.log(value);\n    }\n  } catch (error) {\n    // Error retrieving data\n  }\n};\n")),Object(b.b)("hr",null),Object(b.b)("h1",{id:"reference"},"Reference"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"getitem"},Object(b.b)("inlineCode",{parentName:"h3"},"getItem()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static getItem(key: string, [callback]: ?(error: ?Error, result: ?string) => void)\n")),Object(b.b)("p",null,"Fetches an item for a ",Object(b.b)("inlineCode",{parentName:"p"},"key")," and invokes a callback upon completion. Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Key of the item to fetch.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callback"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"?(error: ?Error, result: ?string) => void"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function that will be called with a result if found or any error.")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"setitem"},Object(b.b)("inlineCode",{parentName:"h3"},"setItem()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setItem(key: string, value: string, [callback]: ?(error: ?Error) => void)\n")),Object(b.b)("p",null,"Sets the value for a ",Object(b.b)("inlineCode",{parentName:"p"},"key")," and invokes a callback upon completion. Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Key of the item to set.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Value to set for the ",Object(b.b)("inlineCode",{parentName:"td"},"key"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callback"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"?(error: ?Error) => void"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function that will be called with any error.")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"removeitem"},Object(b.b)("inlineCode",{parentName:"h3"},"removeItem()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static removeItem(key: string, [callback]: ?(error: ?Error) => void)\n")),Object(b.b)("p",null,"Removes an item for a ",Object(b.b)("inlineCode",{parentName:"p"},"key")," and invokes a callback upon completion. Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Key of the item to remove.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callback"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"?(error: ?Error) => void"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function that will be called with any error.")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"mergeitem"},Object(b.b)("inlineCode",{parentName:"h3"},"mergeItem()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static mergeItem(key: string, value: string, [callback]: ?(error: ?Error) => void)\n")),Object(b.b)("p",null,"Merges an existing ",Object(b.b)("inlineCode",{parentName:"p"},"key")," value with an input value, assuming both values are stringified JSON. Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"NOTE:")," This is not supported by all native implementations."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Key of the item to modify.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"New value to merge for the ",Object(b.b)("inlineCode",{parentName:"td"},"key"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callback"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"?(error: ?Error) => void"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function that will be called with any error.")))),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"let UID123_object = {\n  name: 'Chris',\n  age: 30,\n  traits: { hair: 'brown', eyes: 'brown' }\n};\n// You only need to define what will be added or updated\nlet UID123_delta = {\n  age: 31,\n  traits: { eyes: 'blue', shoe_size: 10 }\n};\n\nAsyncStorage.setItem(\n  'UID123',\n  JSON.stringify(UID123_object),\n  () => {\n    AsyncStorage.mergeItem(\n      'UID123',\n      JSON.stringify(UID123_delta),\n      () => {\n        AsyncStorage.getItem('UID123', (err, result) => {\n          console.log(result);\n        });\n      }\n    );\n  }\n);\n\n// Console log result:\n// => {'name':'Chris','age':31,'traits':\n//    {'shoe_size':10,'hair':'brown','eyes':'blue'}}\n")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"clear"},Object(b.b)("inlineCode",{parentName:"h3"},"clear()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static clear([callback]: ?(error: ?Error) => void)\n")),Object(b.b)("p",null,"Erases ",Object(b.b)("em",{parentName:"p"},"all")," ",Object(b.b)("inlineCode",{parentName:"p"},"AsyncStorage")," for all clients, libraries, etc. You probably don't want to call this; use ",Object(b.b)("inlineCode",{parentName:"p"},"removeItem")," or ",Object(b.b)("inlineCode",{parentName:"p"},"multiRemove")," to clear only your app's keys. Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callback"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"?(error: ?Error) => void"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function that will be called with any error.")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getallkeys"},Object(b.b)("inlineCode",{parentName:"h3"},"getAllKeys()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static getAllKeys([callback]: ?(error: ?Error, keys: ?Array<string>) => void)\n")),Object(b.b)("p",null,"Gets ",Object(b.b)("em",{parentName:"p"},"all")," keys known to your app; for all callers, libraries, etc. Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callback"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"?(error: ?Error, keys: ?Array<string>) => void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function that will be called with all keys found and any error.")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"flushgetrequests"},Object(b.b)("inlineCode",{parentName:"h3"},"flushGetRequests()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static flushGetRequests(): [object Object]\n")),Object(b.b)("p",null,"Flushes any pending requests using a single batch call to get the data."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"multiget"},Object(b.b)("inlineCode",{parentName:"h3"},"multiGet()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static multiGet(keys: Array<string>, [callback]: ?(errors: ?Array<Error>, result: ?Array<Array <string>>) => void)\n")),Object(b.b)("p",null,"This allows you to batch the fetching of items given an array of ",Object(b.b)("inlineCode",{parentName:"p"},"key")," inputs. Your callback will be invoked with an array of corresponding key-value pairs found:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"multiGet(['k1', 'k2'], cb) -> cb([['k1', 'val1'], ['k2', 'val2']])\n")),Object(b.b)("p",null,"The method returns a ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"keys"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Array<string>")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array of key for the items to get.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callback"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"?(errors: ?Array<Error>, result: ?Array<Array <string>>) => void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function that will be called with a key-value array of the results, plus an array of any key-specific errors found.")))),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"AsyncStorage.getAllKeys((err, keys) => {\n  AsyncStorage.multiGet(keys, (err, stores) => {\n    stores.map((result, i, store) => {\n      // get at each store's key/value so you can work with it\n      let key = store[i][0];\n      let value = store[i][1];\n    });\n  });\n});\n")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"multiset"},Object(b.b)("inlineCode",{parentName:"h3"},"multiSet()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static multiSet(keyValuePairs: Array<Array <string>>, [callback]: ?(errors: ?Array<Error>) => void)\n")),Object(b.b)("p",null,"Use this as a batch operation for storing multiple key-value pairs. When the operation completes you'll get a single callback with any errors:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"multiSet([['k1', 'val1'], ['k2', 'val2']], cb);\n")),Object(b.b)("p",null,"The method returns a ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"keyValuePairs"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Array<Array <string>>")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array of key-value array for the items to set.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callback"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"?(errors: ?Array<Error>) => void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function that will be called with an array of any key-specific errors found.")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"multiremove"},Object(b.b)("inlineCode",{parentName:"h3"},"multiRemove()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static multiRemove(keys: Array<string>, [callback]: ?(errors: ?Array<Error>) => void)\n")),Object(b.b)("p",null,"Call this to batch the deletion of all keys in the ",Object(b.b)("inlineCode",{parentName:"p"},"keys")," array. Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"keys"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Array<string>")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array of key for the items to delete.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callback"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"?(errors: ?Array<Error>) => void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function that will be called an array of any key-specific errors found.")))),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"let keys = ['k1', 'k2'];\nAsyncStorage.multiRemove(keys, (err) => {\n  // keys k1 & k2 removed, if they existed\n  // do most stuff after removal (if you want)\n});\n")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"multimerge"},Object(b.b)("inlineCode",{parentName:"h3"},"multiMerge()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static multiMerge(keyValuePairs: Array<Array <string>>, [callback]: ?(errors: ?Array<Error>) => void)\n")),Object(b.b)("p",null,"Batch operation to merge in existing and new values for a given set of keys. This assumes that the values are stringified JSON. Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," object."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"NOTE"),": This is not supported by all native implementations."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"keyValuePairs"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Array<Array <string>>")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Array of key-value array for the items to merge.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"callback"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"?(errors: ?Array<Error>) => void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function that will be called with an array of any key-specific errors found.")))),Object(b.b)("p",null,"Example:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'// first user, initial values\nlet UID234_object = {\n  name: \'Chris\',\n  age: 30,\n  traits: { hair: \'brown\', eyes: \'brown\' }\n};\n\n// first user, delta values\nlet UID234_delta = {\n  age: 31,\n  traits: { eyes: \'blue\', shoe_size: 10 }\n};\n\n// second user, initial values\nlet UID345_object = {\n  name: \'Marge\',\n  age: 25,\n  traits: { hair: \'blonde\', eyes: \'blue\' }\n};\n\n// second user, delta values\nlet UID345_delta = {\n  age: 26,\n  traits: { eyes: \'green\', shoe_size: 6 }\n};\n\nlet multi_set_pairs = [\n  [\'UID234\', JSON.stringify(UID234_object)],\n  [\'UID345\', JSON.stringify(UID345_object)]\n];\nlet multi_merge_pairs = [\n  [\'UID234\', JSON.stringify(UID234_delta)],\n  [\'UID345\', JSON.stringify(UID345_delta)]\n];\n\nAsyncStorage.multiSet(multi_set_pairs, (err) => {\n  AsyncStorage.multiMerge(multi_merge_pairs, (err) => {\n    AsyncStorage.multiGet([\'UID234\', \'UID345\'], (err, stores) => {\n      stores.map((result, i, store) => {\n        let key = store[i][0];\n        let val = store[i][1];\n        console.log(key, val);\n      });\n    });\n  });\n});\n\n// Console log results:\n// => UID234 {"name":"Chris","age":31,"traits":{"shoe_size":10,"hair":"brown","eyes":"blue"}}\n// => UID345 {"name":"Marge","age":26,"traits":{"shoe_size":6,"hair":"blonde","eyes":"green"}}\n')))}j.isMDXComponent=!0}}]);