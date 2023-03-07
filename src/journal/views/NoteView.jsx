import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css'

import { useForm } from '../../hooks/useForm';
import { ImageGallery } from '../components';
import { setActiveNote, startLoadingFles, startSaveNot } from '../../store/journal';

export const NoteView = () => {
    const { active: note, messageSaved, isSaving } = useSelector( state => state.journal );
    const { body, title, date, onInputChange, formState } = useForm( note );
    const dispatch = useDispatch();

    const dateString = useMemo(() => {
        const newDate = new Date( date );

        return newDate.toUTCString();
    }, [ date ]);

    useEffect(() => {
        dispatch( setActiveNote( formState ) );
    }, [ formState ]);

    useEffect(() => {
        if( messageSaved.length > 0 ) {
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }
    }, [ messageSaved ]);
    
    const fileInputRef = useRef();
    
    const onSaveNote = () => {
        dispatch( startSaveNot() );
    }

    const onFileInputChange = ({ target }) => {
        if( target.files == 0 ) return;

        dispatch( startLoadingFles( target.files ) );
    }

    return (
        <>
            <Grid alignItems='center'
                  className='animate__animated animate__fadeIn animate__faster'
                  container 
                  direction='row' 
                  justifyContent='space-between'
                  sx={{ mb: 1 }}>
                <Grid item>
                    <Typography fontSize={ 39 }
                                fontWeight='light'>
                        { dateString }
                    </Typography>
                </Grid>

                <Grid item>
                    <input  multiple
                            onChange={ onFileInputChange }
                            ref={ fileInputRef }
                            style={{ display: 'none' }}
                            type="file" />
                    <IconButton color="primary"
                                disabled={ isSaving }
                                onClick={ () => fileInputRef.current.click() } >
                        <UploadOutlined />
                    </IconButton>

                    <Button color='primary'
                            disabled={ isSaving }
                            onClick={ onSaveNote }
                            sx={{ padding: 2 }}>
                        <SaveOutlined sx={{ fontSize: 30, rm: 1 }}/>
                        Guardar
                    </Button>
                </Grid>

                <Grid container>
                    <TextField label='Titulo'
                               fullWidth
                               placeholder='Ingrese un título.'
                               name='title'
                               onChange={ onInputChange }
                               sx={{ border: 'none', mb: 1 }}
                               type='text'
                               value={ title }
                               variant='filled' />

                    <TextField fullWidth
                               multiline
                               minRows={ 5 }
                               name='body'
                               onChange={ onInputChange }
                               placeholder='¿Qué sucedió en el día de hoy?'
                               type='text'
                               value={ body }
                               variant='filled' />

                    <ImageGallery />
                </Grid>
            </Grid>
        </>
    )
}
