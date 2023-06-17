class TicketManager {
  #precioBaseDeGanancia = 0.15;
  constructor() {
    this.eventos = [];
  }

  getEventos = () => {
    return this.eventos;
  };

  addEvento = (
    nombre,
    lugar,
    precio,
    capacidad = 50,
    fecha = new Date().toLocaleDateString()
  ) => {
    const evento = {
      id: this.eventos.length + 1,
      nombre,
      lugar,
      precio: precio + precio * this.#precioBaseDeGanancia,
      capacidad,
      fecha,
      participantes: [],
    };
    this.eventos.push(evento);
    return;
  };
  addUser = (idUser, IdEvent) => {
    const eventoIndex = this.eventos.findIndex((event) => event.id == IdEvent);
    const evento = this.eventos[eventoIndex];
    if (eventoIndex == -1) {
      console.log("Evento inexistente");
      return;
    }
    if (evento.participantes.include(idUser)) {
      return "Usuario duplicado";
    }
    this.eventos[eventoIndex].participantes.push(idUser);
  };

  putEventsOnTour = (IdEvent, newTown, newDate) => {
    const eventoIndex = this.eventos.findIndex((event) => event.id == IdEvent);
    if (eventoIndex == -1) {
      console.log("Evento inexistente");
      return;
    }
    const evento = this.eventos[eventoIndex];
    const newEvent = {
      ...evento,
      lugar: newTown,
      fecha: newDate,
      id: this.eventos.length + 1,
      participantes: [],
    };
    this.eventos.push(newEvent);
  };
}

const eventos2023 = new TicketManager();
eventos2023.addEvento("Evento Junio", "Lujan, BsAs", 5890, 120, "27/06/2023");
eventos2023.addEvento(
  "Evento Julio",
  "San Vicente, BsAs",
  7580,
  60,
  "25/07/2023"
);
eventos2023.addEvento("Evento Agosto", "Tigre, BsAs", 12000, 250, "15/08/2023");
eventos2023.addEvento(
  "Evento Septiemnre",
  "Caba, BsAs",
  9500,
  120,
  "22/09/2023"
);
console.log(eventos2023.getEventos());
