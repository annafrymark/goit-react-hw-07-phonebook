import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
            state.push(action.payload);
            
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            name: text.name,
            number: text.number,
          },
        };
      },
    },
      deleteContact(state, action) {
          const index = state.findIndex(contact => contact.id === action.payload);
          state.splice(index, 1);
       
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

