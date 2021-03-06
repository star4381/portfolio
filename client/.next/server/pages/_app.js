(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3940:
/***/ ((module) => {

// Exports
module.exports = {
	"inner": "Toolbar_inner__xchK1",
	"title": "Toolbar_title__f7_iu",
	"toolbar_box": "Toolbar_toolbar_box__je8PC",
	"toolbar": "Toolbar_toolbar__j05g8",
	"title_line": "Toolbar_title_line__o8EsK",
	"side_toolbar": "Toolbar_side_toolbar___L0PI",
	"side_toolbar_line": "Toolbar_side_toolbar_line__EVuSF",
	"mark": "Toolbar_mark__gMpZt"
};


/***/ }),

/***/ 2252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/Toolbar.module.css
var Toolbar_module = __webpack_require__(3940);
var Toolbar_module_default = /*#__PURE__*/__webpack_require__.n(Toolbar_module);
// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__(5555);
;// CONCATENATED MODULE: ./components/Toolbar.js




// import PropTypes from 'prop-types';


function Toolbar() {
    const { me  } = (0,external_react_redux_.useSelector)((state)=>state.user
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    const LogOutHandler = (0,external_react_.useCallback)(()=>{
        dispatch((0,user/* logoutRequestAction */.vR)());
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Toolbar_module_default()).inner,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    height: '10px'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (Toolbar_module_default()).title,
                    children: "NEXT"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (Toolbar_module_default()).mark
                })
            }),
            me ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: (Toolbar_module_default()).toolbar_box,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    onClick: LogOutHandler,
                    "aria-hidden": "true",
                    className: (Toolbar_module_default()).toolbar,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            style: {
                                fontSize: '24px'
                            },
                            children: [
                                "(",
                                me.id,
                                ")"
                            ]
                        }),
                        "\xa0????????????"
                    ]
                })
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Toolbar_module_default()).toolbar_box,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "Signup",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Toolbar_module_default()).toolbar,
                                children: "????????????"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        style: {
                            float: 'right',
                            marginRight: 10,
                            fontSize: '19px'
                        },
                        children: "|"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Toolbar_module_default()).toolbar_box,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "/Login",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (Toolbar_module_default()).toolbar,
                                children: "?????????"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Toolbar_module_default()).title_line
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (Toolbar_module_default()).side_toolbar,
                    children: "Home"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/Studies",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (Toolbar_module_default()).side_toolbar,
                    children: "Studies"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/Mypage",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (Toolbar_module_default()).side_toolbar,
                    children: "About"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: "/Introduce",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (Toolbar_module_default()).side_toolbar,
                    children: "Introduce"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Toolbar_module_default()).side_toolbar_line
            })
        ]
    }));
}
/* harmony default export */ const components_Toolbar = (Toolbar);

;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "redux-saga"
const external_redux_saga_namespaceObject = require("redux-saga");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_namespaceObject);
// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__(1217);
;// CONCATENATED MODULE: ./reducers/index.js




// <- ????????? ????????? ????????? ????????? ?????????
// (????????????, ??????) => ????????????
const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    // ??????????????? ???????????? ?????? HYDRATE??? ???????????? ????????????
    index: (state = {}, action)=>{
        switch(action.type){
            case external_next_redux_wrapper_namespaceObject.HYDRATE:
                console.log('HYDRATE', action);
                return {
                    ...state,
                    ...action.payload
                };
            default:
                return state;
        }
    },
    user: user/* default */.ZP,
    post: post/* default */.Co
});
/* harmony default export */ const reducers = (rootReducer); // import { HYDRATE } from 'next-redux-wrapper';
 // import { combineReducers } from 'redux';
 // import user from './user';
 // // (????????????, ??????) => ????????????
 // const rootReducer = (state, action) => {
 //   switch (action.type) {
 //     case HYDRATE:
 //       console.log('HYDRATE', action);
 //       return action.payload;
 //     default: {
 //       const combinedReducer = combineReducers({
 //         user,
 //       });
 //       return combinedReducer(state, action);
 //     }
 //   }
 // };
 // export default rootReducer;

;// CONCATENATED MODULE: external "redux-saga/effects"
const effects_namespaceObject = require("redux-saga/effects");
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./sagas/user.js




// <- ??? ????????? ??????????????? ????????? ????????? ???????????????.
// import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE } from '../reducers/post';
// function signUpAPI() {
// return axios.get('http://localhost:3065/user')
// }
function loadUserAPI() {
    // const { me } = useSelector((state) => state.user);
    // if (me) { console.log(me); }
    return external_axios_default().get('http://localhost:3065/');
// get?????? delete??? ???????????? ???????????? 2?????? ????????? ????????? ???????????????
// saga index?????? credentials ?????? ????????? ?????????????????? ????????????.
}
function* loadUser(action) {
    try {
        const result = yield (0,effects_namespaceObject.call)(loadUserAPI, action.data);
        // console.log(result);
        yield (0,effects_namespaceObject.put)({
            type: user/* LOAD_MY_INFO_SUCCESS */.LJ,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield (0,effects_namespaceObject.put)({
            type: user/* LOAD_MY_INFO_FAILURE */.Cq,
            error: err.response.data
        });
    }
}
function logInAPI(data) {
    // const { me } = useSelector((state) => state.user);
    // if (me) { console.log(me); }
    return external_axios_default().post('http://localhost:3065/Login', data);
}
function* logIn(action) {
    try {
        const result = yield (0,effects_namespaceObject.call)(logInAPI, action.data);
        // console.log(result);
        yield (0,effects_namespaceObject.put)({
            type: user/* LOG_IN_SUCCESS */.RZ,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield (0,effects_namespaceObject.put)({
            type: user/* LOG_IN_FAILURE */.yK,
            error: err.response.data
        });
    }
}
function logOutAPI() {
    return external_axios_default().post('http://localhost:3065/Logout');
}
function* logOut() {
    try {
        yield (0,effects_namespaceObject.call)(logOutAPI);
        yield (0,effects_namespaceObject.put)({
            type: user/* LOG_OUT_SUCCESS */.kV
        });
    } catch (err) {
        yield (0,effects_namespaceObject.put)({
            type: user/* LOG_OUT_FAILURE */.mD,
            error: err.response.data
        });
    }
}
function signUpAPI(data) {
    return external_axios_default().post('http://localhost:3065/Signup', data);
}
function* signUp(action) {
    try {
        const result = yield (0,effects_namespaceObject.call)(signUpAPI, action.data);
        console.log(result);
        yield (0,effects_namespaceObject.put)({
            type: user/* SIGN_UP_SUCCESS */.I,
            data: result.data
        });
    } catch (err) {
        yield (0,effects_namespaceObject.put)({
            type: user/* SIGN_UP_FAILURE */.bP,
            error: err.response.data
        });
    }
}
// ????????? ??????????????? ????????? API??? ????????????.
// function addPostAPI(data) {
//   return axios.post('/api/post', data);
// }
// ?????? ????????? ????????? ???????????? ????????? ????????? ????????????.
// function* addPost(action) {
//   try {
//     // const result = yield call(addPostAPI, action.data)
//     yield delay(1000);
//     const id = shortId.generate();
//     yield put({
//       type: ADD_POST_SUCCESS, // post ????????? ?????????
//       data: {
//         id,
//         content: action.data,
//       },
//     });
//     yield put({
//       type: ADD_POST_TO_ME, // user ????????? ?????????
//       data: id,
//     });
//   } catch (err) {
//     yield put({
//       type: ADD_POST_FAILURE, // post ????????? ?????????
//       data: err.response.data,
//     });
//   }
// }
// ??? ????????? yield all ?????? ?????? ?????? fork ???????????? ????????? ????????????.
// ?????? ????????? ??????????????? ????????? ADD_POST_REQUEST ????????? ??????, ?????? ?????? addpost ????????? ????????????
// function* watchAddPost() {
//   yield takeLatest(ADD_POST_REQUEST, addPost);
// }
function* watchLoadUser() {
    yield (0,effects_namespaceObject.takeLatest)(user/* LOAD_MY_INFO_REQUEST */.qq, loadUser);
}
function* watchLogIn() {
    yield (0,effects_namespaceObject.takeLatest)(user/* LOG_IN_REQUEST */.uF, logIn);
}
function* watchLogOut() {
    yield (0,effects_namespaceObject.takeLatest)(user/* LOG_OUT_REQUEST */.Xd, logOut);
}
function* watchSignUp() {
    yield (0,effects_namespaceObject.takeLatest)(user/* SIGN_UP_REQUEST */.pK, signUp);
}
function* userSaga() {
    yield (0,effects_namespaceObject.all)([
        (0,effects_namespaceObject.fork)(watchLoadUser),
        (0,effects_namespaceObject.fork)(watchLogIn),
        (0,effects_namespaceObject.fork)(watchLogOut),
        (0,effects_namespaceObject.fork)(watchSignUp), 
    ]);
};

;// CONCATENATED MODULE: ./sagas/post.js





function addPostAPI(data) {
    return external_axios_default().post('http://localhost:3065/Board/post', data);
}
function* addPost(action) {
    try {
        const result = yield (0,effects_namespaceObject.call)(addPostAPI, action.data);
        console.log(result);
        yield (0,effects_namespaceObject.put)({
            type: post/* ADD_POST_SUCCESS */._s,
            data: result.data
        });
        yield (0,effects_namespaceObject.put)({
            type: user/* ADD_POST_TO_ME */.x6,
            data: result.data.id
        });
    } catch (err) {
        console.error(err);
        yield (0,effects_namespaceObject.put)({
            type: post/* ADD_POST_FAILURE */.tP,
            error: err.response.data
        });
    }
}
function loadPostsAPI(data) {
    return external_axios_default().get('/Board', data);
}
function* loadPosts(action) {
    try {
        const result = yield (0,effects_namespaceObject.call)(loadPostsAPI, action.data);
        yield (0,effects_namespaceObject.put)({
            type: post/* LOAD_POSTS_SUCCESS */.ZP,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield (0,effects_namespaceObject.put)({
            type: post/* LOAD_POSTS_FAILURE */.T5,
            error: err.response.data
        });
    }
}
function* watchAddPost() {
    yield (0,effects_namespaceObject.takeLatest)(post/* ADD_POST_REQUEST */.z9, addPost);
}
function* watchLoadPosts() {
    yield (0,effects_namespaceObject.throttle)(5000, post/* LOAD_POSTS_REQUEST */.aO, loadPosts);
// 5?????? ???????????? ?????? ?????? ??????
}
function* postSaga() {
    yield (0,effects_namespaceObject.all)([
        (0,effects_namespaceObject.fork)(watchAddPost),
        (0,effects_namespaceObject.fork)(watchLoadPosts), 
    ]);
};

;// CONCATENATED MODULE: ./sagas/index.js




// axios.defaults.baseURL = 'http://localhost:3065';
(external_axios_default()).defaults.withCredentials = true;
// ?????? ?????? ??????????????? credentials??? ?????? ????????? ???????????? ??????
function* rootSaga() {
    yield (0,effects_namespaceObject.all)([
        (0,effects_namespaceObject.fork)(userSaga),
        (0,effects_namespaceObject.fork)(postSaga), 
    ]);
};

;// CONCATENATED MODULE: ./configure/configure.js






// // ???????????? thunk 3??? ????????????, ??????????????? ??????????????? ?????? ??????
// const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
//   console.log(action); // ????????? ?????????????????? ????????? ??? ??? ???????????? ????????????
//   return next(action);
// };
const configure = (context)=>{
    console.log(context);
    const sagaMiddleware = external_redux_saga_default()();
    const middlewares = [
        sagaMiddleware
    ];
    // ??? ????????? ????????? ????????? ????????? ????????? ???????????? ???????????? ?????????. ??? ?????? ???
    const enhancer =  true ? (0,external_redux_namespaceObject.compose)((0,external_redux_namespaceObject.applyMiddleware)(...middlewares)) // Dev??? ?????? ??? ??? ???
     : 0; // Dev??? ?????? ??? ???
    const store = (0,external_redux_namespaceObject.createStore)(reducers, enhancer);
    // enhancer??? ??????????????? ?????? ????????? ?????? ??????
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(configure, {
    debug: "production" === 'development'
});
/* harmony default export */ const configure_configure = (wrapper);

;// CONCATENATED MODULE: ./pages/_app.js

/* eslint-disable react/jsx-props-no-spreading */ 







function MyApp({ Component , pageProps  }) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        dispatch({
            type: user/* LOAD_MY_INFO_REQUEST */.qq
        });
    // dispatch({
    //   type: LOAD_POSTS_REQUEST,
    // });
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "NEXT ?????????"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Toolbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
}
MyApp.propTypes = {
    Component: (external_prop_types_default()).elementType.isRequired,
    pageProps: (external_prop_types_default()).object.isRequired
};
/* harmony default export */ const _app = (configure_configure.withRedux(MyApp));


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 7133:
/***/ ((module) => {

"use strict";
module.exports = require("immer");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,555,217], () => (__webpack_exec__(2252)));
module.exports = __webpack_exports__;

})();