import React from 'react';

const Forms= ({inputs,setInputs}) => {
    const cambio = (e) =>{
        setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }
    return (
        <form>
        <div className='formulario'>
            <div className='entrada'>
                <label>First Name: </label>
                <input type="text" onChange={cambio} name='firstName'/>
            </div>
            <div className='entrada'>
                <label>Last Name: </label>
                <input type="text" onChange={cambio} name='lastName'/>
            </div>
            <div>
                <label htmlFor='email'>Email: </label>
                <input type="email" onChange={cambio} name='email'/>
            </div>
            <div className='entrada'>
                <label>Password: </label>
                <input type="password" onChange={cambio} name='password'/>
            </div>
            <div className='entrada'>
                <label>Confirm Password: </label>
                <input type="password" onChange={cambio} name='conPassword'/>
            </div>
        </div>
        </form>
    );
}

export default Forms;