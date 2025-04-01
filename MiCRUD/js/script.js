document.getElementById('formulario').addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const nombre = document.getElementById('Nombre').value;
    const descripcion = document.getElementById('Descripcion').value;
    const precio = document.getElementById('Precio').value;
    const cantidadStock = document.getElementById('CantidadStock').value;
    const categoria = document.getElementById('Categoria').value;

    try {
        const respuesta = await fetch('/guardar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `nombre=${encodeURIComponent(nombre)}&descripcion=${encodeURIComponent(descripcion)}&precio=${encodeURIComponent(precio)}&cantidadStock=${encodeURIComponent(cantidadStock)}&categoria=${encodeURIComponent(categoria)}`
        });

        if (respuesta.ok) {
            const data = await respuesta.json();
            Swal.fire({
                title: "¡Guardado!",
                text: "El producto ha sido agregado correctamente.",
                icon: "success",
                draggable: true,
                timer: 2000
            }).then(() => {
                window.location.href = '/';
            });
        } else {
            const errorData = await respuesta.json();
            Swal.fire({
                icon: "error",
                title: "Error al guardar",
                text: errorData.error || "Hubo un problema al guardar el producto.",
                timer: 2000
            });
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Error de conexión",
            text: "Hubo un problema al intentar enviar los datos.",
            timer: 2000
        });
    }
});
