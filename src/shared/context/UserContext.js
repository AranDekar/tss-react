import React from 'react';

export const User = {
  name: 'Guest',
  userId: '5b1f555491c055001d9d10ff',
  authenticate: () => {
    this.name = 'Aran';
    this.userId = 'Aran';
  }
}
export const UserContext = React.createContext(User);
