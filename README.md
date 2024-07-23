# UserManager-Crypto-Fs
Ejercicio Class con crypto y fs

Práctica de módulos nativos:
fs + crypto
HANDS ON LAB
¿Cómo lo hacemos? Se creará una clase “UserManager” que permitirá guardar usuarios en
un archivo. El usuario se recibirá con una contraseña en string plano, y se deberá guardar la
contraseña hasheada con crypto. Utilizar los módulos nativos fs y crypto, El manager debe
contar con los siguientes métodos:
✓ El método “Crear usuario” debe recibir un objeto con los campos:
○ Nombre
○ Apellido
○ Nombre de usuario
○ Contraseña
El método debe guardar un usuario en un archivo “Usuarios.json”, recordando que la
contraseña debe estar hasheada por seguridad
Práctica de módulos nativos:
fs + crypto
HANDS ON LAB
✓ El método “Validar Usuario” recibirá el nombre de usuario que quiero validar, seguido de la
contraseña, debe poder leer el json previamente generado con el arreglo de usuarios y hacer la
comparación de contraseñas, Si coinciden el usuario y la contraseña, devolver un mensaje
“Logueado”, caso contrario indicar error si el usuario no existe, o si la contraseña no coincide.
