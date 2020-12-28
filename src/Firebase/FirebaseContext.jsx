import React from 'react';

const FirebaseContext = React.createContext({
    loginState: false,
    toggleLoginState: () => {},
});

export default FirebaseContext;