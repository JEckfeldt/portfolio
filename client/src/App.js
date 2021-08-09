import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


const App = () => {

  const handleMenuClick = () => {
    
  }

  return (
    <AppBar position="fixed" color='primary'>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Jake Eckfeldt
        </Typography>
      </Toolbar>
    </AppBar>

  )
}


export default App;
