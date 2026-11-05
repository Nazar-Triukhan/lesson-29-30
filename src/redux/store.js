// import { createStore } from "redux";

// const saveContact = localStorage.getItem('contacts')
// const parseContacts = JSON.parse(saveContact)

// const initialState = {
//     contacts: parseContacts || [
//     {
//       id: "1",
//       name: "Іван Петренко",
//       number: "+380501112233",
//     },
//     {
//       id: "2",
//       name: "Марія Коваленко",
//       number: "+380671234567",
//     },
//     {
//       id: "3",
//       name: "Олег Шевченко",
//       number: "+380931234567",
//     },
//     ],


// }

// export const addContact = (contact) => {
//     return {
//         type: "contact/addContact", 
//         payload: contact, 
//     }
// }

// export const deleteContact = (contactID) => {
//     return {
//         type: 'contact/deleteContact', 
//         payload: contactID, 
//     }
// }

// export const updateContact = (contact) => {
//     return {
//         type: 'contact/updateContact', 
//         payload: contact, 
//     }
// }

// const reducer = (state = initialState, action) => {

//     if(action.type === 'contact/addContact') {
//         return {
//         ...state,
//         contacts: [...state.contacts, action.payload]
//         }
//     }

//     if(action.type === 'contact/deleteContact') {
//         return {
//             ...state, 
//             contacts: state.contacts.filter((contact) => contact.id !== action.payload)
//         }
//     }
    
//     if(action.type === 'contact/updateContact') {
//         return {
//             ...state, 
//             contacts: state.contacts.map((contact) => contact.id === action.payload.id ? action.payload : contact)
//         }
//     }

//     return state
// }

// const store = createStore(reducer)

// store.subscribe(() => {
//     localStorage.setItem('contacts', JSON.stringify(store.getState().contacts))
// })

// export default store











// ============ redux persist ==============

import { persistReducer , persistStore} from "redux-persist";
import storage from 'redux-persist/es/storage'  //  redux-persist/es/storage
import { createStore } from "redux";

const persistConfig = {
    key: 'root', 
    storage, 
}

const initialState = {
    contacts: [
    {
      id: "1",
      name: "Іван Петренко",
      number: "+380501112233",
    },
    {
      id: "2",
      name: "Марія Коваленко",
      number: "+380671234567",
    },
    {
      id: "3",
      name: "Олег Шевченко",
      number: "+380931234567",
    },
    ],


}

export const addContact = (contact) => {
    return {
        type: "contact/addContact", 
        payload: contact, 
    }
}

export const deleteContact = (contactID) => {
    return {
        type: 'contact/deleteContact', 
        payload: contactID, 
    }
}

export const updateContact = (contact) => {
    return {
        type: 'contact/updateContact', 
        payload: contact, 
    }
}

const reducer = (state = initialState, action) => {

    if(action.type === 'contact/addContact') {
        return {
        ...state,
        contacts: [...state.contacts, action.payload]
        }
    }

    if(action.type === 'contact/deleteContact') {
        return {
            ...state, 
            contacts: state.contacts.filter((contact) => contact.id !== action.payload)
        }
    }
    
    if(action.type === 'contact/updateContact') {
        return {
            ...state, 
            contacts: state.contacts.map((contact) => contact.id === action.payload.id ? action.payload : contact)
        }
    }

    return state
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer)

export const persistor = persistStore(store)

export default store