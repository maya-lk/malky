import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import commonReducer from './common/common.reducer';
import wizardReducer from './wizard/wizard.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist : ['']
}

const rootReducer = combineReducers({
    common : commonReducer,
    wizard : wizardReducer,
});

export default persistReducer(persistConfig, rootReducer);