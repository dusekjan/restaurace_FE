import React from 'react';

function PasswordInfo() {
    return (
        <div id="password-info">
            Heslo musí obsahovat alespoň:
            <ul>
                <li>malé písmeno</li>
                <li>velké písmeno</li>
                <li>jedno číslo</li>
                <li>osm znaků</li>
            </ul>
        </div>
    );
}

export default PasswordInfo;