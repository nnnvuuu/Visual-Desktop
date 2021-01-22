import React from 'react';


export default function MainPage (){

  return(
    <div>
        <script src={'./database/connection.js'}></script>
        <form onSubmit={"getFormData()"}>
            Username: <input name="username" type="text" placeholder="Username" /> <br />
            Password: <input name="password" type="password" placeholder="Password"/> <br />
            <input type="submit" />
        </form>
    </div>
    );
}
