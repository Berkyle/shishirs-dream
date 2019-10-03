import React, {useContext, useEffect} from 'react';

import { UserContext } from '../Contexts/UserContext';

const MakeRoom = props => {

    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        if(user === {} && window.location.href.includes("access_token")) {
            var access_token = window.location.href.split("=")[1].split("&")[0];
            setUser(access_token);
        }
    })

    return (
        <div></div>
    )
}

export default MakeRoom;