import React from 'react';

import { Avatar } from 'antd';

const Header = ({ currentUser }) => (
  <React.Fragment>
    <Avatar icon="user" />
  </React.Fragment>
  // <AppBar position="static" color="default">
  //   <Toolbar>
  //     {currentUser &&
  //       <Avatar alt={currentUser.full_name} src={currentUser.avatar_url} />
  //     }

  //     <IconButton>
  //       <EditSharp />
  //     </IconButton>
  //     <Typography type="title" color="inherit">
  //       Home
  //           </Typography>
  //   </Toolbar>
  // </AppBar>
);

export default Header;