import React from 'react'
import { emailLookup } from '../../api/index'

class Email extends React.Component {
    handleSubmit() {
        emailLookup(this.props);
    }

    render() {
        return (
            <div className="EmailLookup">
                <header className="App-header">
                    <h1 className="App-title">¡Inscríbete ya! o ¡Invita más amigos!</h1>
                </header>
                <div>
                    <TextField
                        id = "email"
                        label="Email"
                        placeholder="Ingresa tu correo electrónico"
                        className="homepage-text-field"
                    />
                    <Button variant="raised" className="homepage-button">
                        Ingresar
                    </Button>
                </div>
            </div>
        );
    }
}
