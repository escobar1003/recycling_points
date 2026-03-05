usuarios = []

def registrar_usuario():
    print("=== Registro de Usuario ===")

    nombre = input("Ingrese su nombre: ")
    correo = input("Ingrese su correo: ")
    password = input("Ingrese su contraseña: ")

    if nombre == "" or correo == "" or password == "":
        print("Todos los campos son obligatorios.")
        return

    usuario = {
        "nombre": nombre,
        "correo": correo,
        "password": password
    }

    usuarios.append(usuario)

    print("Usuario registrado ")
    print("Usuarios actuales:", usuarios)

