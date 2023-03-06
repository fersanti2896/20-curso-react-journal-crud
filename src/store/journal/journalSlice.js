import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
        // active: {
        //     id: 'ABC',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageUrls: []
        // }
    },
    reducers: {
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: ( state, action ) => {
            state.active = action.payload;
        },
        setNotes: ( state, action ) => {
            state.notes = action.payload;
        },
        setSaving: ( state ) => {

        },
        savingNewNote: ( state, action ) => {
            state.isSaving = true;
        },
        updateNote: ( state, action ) => {

        },
        deleteNoteById: ( state, action ) => {

        }
    }
});

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, 
               setActiveNote, 
               setNotes, 
               setSaving, 
               savingNewNote,
               updateNote,
               deleteNoteById } = journalSlice.actions;