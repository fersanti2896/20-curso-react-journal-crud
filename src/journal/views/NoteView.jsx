import { useSelector } from 'react-redux';
import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';

import { useForm } from '../../hooks/useForm';
import { ImageGallery } from '../components';
import { useMemo } from 'react';

export const NoteView = () => {
    const { active: note } = useSelector( state => state.journal );
    const { body, title, date, onInputChange, formState } = useForm( note );

    const dateString = useMemo(() => {
        const newDate = new Date( date );

        return newDate.toUTCString();
    }, [ date ]);

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
                    <Button color='primary'
                            sx={{ padding: 2, mb: 2 }}>
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
                               name={ body }
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
