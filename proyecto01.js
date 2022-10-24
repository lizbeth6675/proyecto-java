//Este es mi Proyecto-JS

 var EnfermerosADomicilio = function(ServiciosDeEnfermeria, DuracionDelServicio, HorasDelServicio, Precio) {
     this.ServiciosDeEnfermeria = ServiciosDeEnfermeria;
     this.DuracionDelServicio = DuracionDelServicio
     this.HorasDelServico = HorasDelServicio;
     this.Precio = Precio;
    
        console.log("Enfermeros a domicilio")
    }

let cotizacion = [];

document.querySelectorAll('.tabla-cotizacion tbody tr').forEach(function(e){
  let fila = {
    codigo: e.querySelector('.personal de la salud').innerText,
    material: e.querySelector('.duracion del servicio').innerText,
    cantidad: e.querySelector('.horas del servicio').innerText,
    magnitud: e.querySelector('.precios').innerText
  };
  cotizacion.push(fila);
});

console.log(cotizacion);


