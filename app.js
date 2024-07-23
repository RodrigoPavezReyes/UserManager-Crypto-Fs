const fs = require (`fs/promises`)
const crypto = require (`crypto`)


class UserManager {
    constructor(){
        this.filePath = `./Usuarios.json`
    }

    async createUser(user){
        const {nombre, apellido, username, password} = user

        //Hasheo de contraseña

        const hashPassword = crypto.createHash(`sha256`).update(password).digest(`hex`)

        try {
            //cargamos los usuarios de un archivo ya creado

            let users = []

            if(await fs.access(this.filePath).then(()=>true ).catch(()=>false)){

                const fileContent = await fs.readFile(this.filePath, `utf8`)
                users = JSON.parse(fileContent)
                }
            
            users.push({nombre, apellido, username, password:hashPassword})
            await fs.writeFile(this.filePath,JSON.stringify(users, null, 2))
            
        } catch (error) {
                console.error("error al crear el usuario", error)
        }

    }

    async validateUser(username,password){

        try {
             //cargamos los usuarios de un archivo ya creado
             if(await fs.access(this.filePath).then(()=>true ).catch(()=>false)){

            const fileContent = await fs.readFile(this.filePath, `utf8`)
            const users = JSON.parse(fileContent)
            
            //buscamos los usuarios por username

            const user = users.find(user => user.username === username)

                if(user){
                //verificar password
                const hashPassword= crypto.createHash(`sha256`).update(password).digest(`hex`)
                    if(hashPassword===user.password){
                    console.log("Usuario Logueado")
                    }else{
                    console.log("contraseña incorrecta")
                    }
                }else{
                    console.log("el usuario no fue encontrado")
                } 
            

            }else{
                console.log("no hay usuarios registrados")
            }

            
        } catch (error) {
            console.error("error de validacion", error)
        }
    }

}

//pruebas

const userManager = new UserManager()

userManager.createUser({
    nombre:"rodrigo",
    apellido:"pavez",
    username: "rodri",
    password: "1"
}).then(()=>{
    userManager.validateUser("rodri","1")
})