"use client"
import React, { useState, useEffect } from "react";


function Tarjeta({ nombre, identificacion, correo, avatar }) {
  const cardStyles = {
    background: "rgb(49,43,145)",
    background: "linear-gradient(169deg, rgba(49,43,145,0.7483368347338936) 0%, rgba(9,85,121,0.46262254901960786) 43%, rgba(0,212,255,1) 91%)",
    color: "white",
    boxShadow: "10px 10px 6px 0px rgba(255,255,255,0.22)",
  };

  const avatarStyles = {
    width: "80px",
    height: "80px",
  };

  return (
    <div
      className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      style={cardStyles}
    >
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-12 h-12 mb-3 rounded-full shadow-lg"
          src={avatar}
          alt="Imagen de perfil"
          style={avatarStyles}
        />
        <h5 className="mb-1 text-xl font-medium text-white-900 dark:text-white">
          {nombre}
        </h5>
        <span className="text-sm text-white-500 dark:text-white-400">
          {identificacion}
        </span>
        <span className="text-sm text-white-500 dark:text-white-400">
          {correo}
        </span>
      </div>
    </div>
  );
}

export default function Principal() {
  const [tarjetas, setTarjetas] = useState([]);

  useEffect(() => {
    async function llamarApi() {
      const peticion = await fetch("https://reqres.in/api/users?page=2");
      const respuesta = await peticion.json();
      setTarjetas(respuesta.data);
    }
    llamarApi();
  }, []);

  return (
    <div className="flex justify-center">
      <div>
        <div className="flex mt-6">
          {tarjetas.slice(0, 3).map((tarjeta, index) => (
            <Tarjeta
              key={index}
              nombre={tarjeta.first_name}
              identificacion={tarjeta.id}
              correo={tarjeta.email}
              avatar={tarjeta.avatar}
            />
          ))}
        </div>

        <div className="flex mt-6">
          {tarjetas.slice(3, 6).map((tarjeta, index) => (
            <Tarjeta
              key={index}
              nombre={tarjeta.first_name}
              identificacion={tarjeta.id}
              correo={tarjeta.email}
              avatar={tarjeta.avatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
}






// import { useState } from "react";
// import Image from "next/image";

// export default function Principal() {
//   // let count = 0;

//   const [resultado, actualizarResultado] = useState(0);

//   function increment() {
//     actualizarResultado(resultado - 1);
//   }

//   return (
//     <div className="text-center">
//       <Image
//         src="/images.png"
//         alt="Vercel Logo"
//         className="dark:invert m-auto mb-2"
//         width={100}
//         height={24}
//         priority
//       />
//       El conteo es: {resultado} <br></br>
//       <Boton incrementar={increment}></Boton>
//     </div>
//   );
// }

// function Boton(propiedades) {
//   return (
//     <button
//       onClick={propiedades.incrementar}
//       className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-5"
//     >
//       Clic Acá
//     </button>
//   );
// }