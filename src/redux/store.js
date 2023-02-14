import reducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
//:redux persistor toolkit/////////////////////////////
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
// import storage from "redux-persist/lib/storage";
// const persistConfig = {
//     key: "root",
//     version: 1,
//     storage,
// };
// const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
    reducer: reducers,
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //         },
    //     }),
});
// let Persistor = persistStore(store);

export default store