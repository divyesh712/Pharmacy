import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userReducers from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore,persistReducer } from 'redux-persist';

const persistConfig = {
    key : 'root',
    storage: AsyncStorage,
    whitelist:['user']
}

const rootReducer = combineReducers(
    {
        userReducers : persistReducer(persistConfig ,userReducers)
    }
);

export const store = createStore (rootReducer,applyMiddleware(thunk));
export const persistor = persistStore(store);