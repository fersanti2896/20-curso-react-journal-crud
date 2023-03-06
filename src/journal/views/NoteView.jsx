import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
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
                        21 Febrero 2023
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
                               sx={{ border: 'none', mb: 1 }}
                               type='text'
                               variant='filled'/>

                    <TextField fullWidth
                               multiline
                               minRows={ 5 }
                               placeholder='¿Qué sucedió en el día de hoy?'
                               type='text'
                               variant='filled'/>

                    <ImageGallery />
                </Grid>
            </Grid>
        </>
    )
}
