import { TurnedInNot } from '@mui/icons-material';
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const Sidebar = ({ drawerWidth = 240 }) => {
    const { displayName } = useSelector( state => state.auth );

    return (
        <>
            <Box component='nav'
                 sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
                <Drawer open 
                        sx={{ 
                            display: { xs: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                        }} 
                        variant='permanent'>
                    <Toolbar>
                        <Typography component='div' 
                                    noWrap
                                    sx={{ fontSize: 24 }} 
                                    variant='h6'>
                            { displayName }
                        </Typography>
                    </Toolbar>
                    <Divider />

                    <List>
                        {
                            ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
                                <ListItem  disablePadding key={ text }>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <TurnedInNot />
                                        </ListItemIcon>

                                        <Grid container>
                                            <ListItemText primary={ text }/>
                                            <ListItemText secondary={ 'Una manera eficaz consejos sobre como crearlas efectivamente.' }/>
                                        </Grid>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>
                </Drawer>
            </Box>
        </>
    )
}

Sidebar.propTypes = {
    drawerWidth: PropTypes.number.isRequired
}
