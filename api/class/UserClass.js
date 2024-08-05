//registrarse
//iniciar sesion
//cerrar sesion
//ontener info
//crear transaccion
//pedir prestamos
//borrar cuentas
//actualizar

import UserModel from "../Models/UserModel.js"
import ManagerAccount from "./accountclass.js";
import ManagerCards from "./CardClass.js";

class ManagerUsers {
    constructor(
        email, phone, name, lastName, isInSession, isAdmin, password
    ) {
        this.email = email;
        this.phone = phone;
        this.name = name;
        this.lastName = lastName;
        this.isInSession = isInSession;
        this.isAdmin = isAdmin;
        this.password = password;

    }

    async register() {
        try {
            const user = await UserModel.create({
                email: this.email,
                phone: this.phone,
                name: this.name,
                lastName: this.lastName,
                isInSession: this.isInSession,
                isAdmin: this.isAdmin,
                password: this.password
            })
            const Ma = new ManagerAccount(user._id, 12345, "Ahorro", 10000)
            const currentAccount = await Ma.createAccount();
            const MC = new ManagerCards(user._id, currentAccount._id, "16 al azar", "debito", "de la fecha actual a 3 anos", "generar codigo", "active")
            await MC.createCard();
            return user;
        } catch (error) {
            throw new Error(`Error al obtener usuario: ${error}`);
        }
    }
    async Login(email, password) {
        try {
            const user = await UserModel.findOne({ email: email })
            if (!user) {
                throw new Error("Usuario no registrado")
            }
            if (user, password !== password) { throw new Error("contrasena incorrecta") }
            return "Succeeded"
        } catch (error) {
            throw new Error(`Error al obtener usuario: ${error}`);
        }
    }

    async getuserinfo(id) {
        try {
            const user = await UserModel.findById(id)
            return user

        } catch (error) {

        }
        throw new Error(`Error al obtener info del usuario: ${error}`);
    }

    async updateEmail(id, email) {
        try {
            if (!email) {
                throw new Error("Es invalido")
            }
            await UserModel.findByIdAndUpdate(id, { $set: { email: email } })
            return "ok";
        } catch (error) {
            throw new Error(`Error al actu el correo: ${error}`);
        }

    }
    async updatePhone(id, phone) {
        try {
            if (!phone) {
                throw new Error("Es invalido")
            }
            await UserModel.findByIdAndUpdate(id, { $set: { phone: phone } })
            return "ok";
        } catch (error) {
            throw new Error(`Error al actu el phone: ${error}`);
        }
    }
    async updatePassword(id, password) {
        try {
            if (!password) {
                throw new Error("Es invalida")
            }
            await UserModel.findByIdAndUpdate(id, { $set: { password: password } })
            return "ok";
        } catch (error) {
            throw new Error(`Error al actu la contra: ${error}`);
        }
    }
}



export default ManagerUsers;





