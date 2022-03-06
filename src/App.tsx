import React from "react";
import './main.global.css'
import {hot} from "react-hot-loader/root";
import {createStore} from "redux";
import {Layout} from "./shared/Layout";
import {rootReducer} from "./store/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import {CardsBlock} from "./shared/CardsBlock";

const store = createStore(rootReducer, composeWithDevTools())

function AppComponent() {
    return (
        <Provider store={store}>
            <Layout>
                <CardsBlock/>
            </Layout>
        </Provider>
    )
}

export const App = hot(AppComponent)