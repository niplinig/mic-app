export interface videoData {
    videoNumber: number;
    mp4Source: string;
    videoName: string;
    contextContent: string;
    infractionSeconds: number;
}

let videoExpArray: videoData[] = [
    {
        videoNumber: 1,
        mp4Source: "/exp/mp4/ExcesoDeVelocidad.mp4",
        videoName: "Exceso de velocidad",
        contextContent: "Usted se desplaza a la velocidad máxima permitida en la carretera.",
        infractionSeconds: 5
    },
    {
        videoNumber: 2,
        mp4Source: "/exp/mp4/ConducirContraVia.mp4",
        videoName: "Conducir en contra vía",
        contextContent: "Usted se encuentra en una vía de un solo sentido.",
        infractionSeconds: 3
    },
    {
        videoNumber: 3,
        mp4Source: "/exp/mp4/SinCasco.mp4",
        videoName: "Conducir sin casco",
        contextContent: "Usted se encuentra en una vía urbana.",
        infractionSeconds: 1
    },
    {
        videoNumber: 4,
        mp4Source: "/exp/mp4/ConducirConTelefono.mp4",
        videoName: "Conducir con teléfono",
        contextContent: "Usted está esperando que cambie la luz roja del semáforo.",
        infractionSeconds: 3
    },
    {
        videoNumber: 5,
        mp4Source: "/exp/mp4/InvadirCarril.mp4",
        videoName: "Invadir carril de circulación",
        contextContent: "Usted está esperando avanzar y no puede invadir el carril de la ciclovía.",
        infractionSeconds: 1
    },
    {
        videoNumber: 6,
        mp4Source: "/exp/mp4/PasarLaLuzRoja1.mp4",
        videoName: "Pasar la luz roja del semáforo",
        contextContent: "Usted está esperando que cambie la luz roja del semáforo.",
        infractionSeconds: 3
    },
    {
        videoNumber: 7,
        mp4Source: "/exp/mp4/PasarElPare.mp4",
        videoName: "Pasar el pare",
        contextContent: "Usted se encuentra en una vía donde usted tiene la preferencia de cruzar primero.",
        infractionSeconds: 4
    },
    {
        videoNumber: 8,
        mp4Source: "/exp/mp4/VueltaEnU.mp4",
        videoName: "Vuelta en U",
        contextContent: "Usted se encuentra en una vía en donde no está permitido hacer una vuelta en U.",
        infractionSeconds: 3
    },
    {
        videoNumber: 9,
        mp4Source: "/exp/mp4/VueltaEnU.mp4",
        videoName: "Vuelta en U",
        contextContent: "Usted se encuentra en una vía en donde no está permitido hacer una vuelta en U.",
        infractionSeconds: 3
    }, {
        videoNumber: 10,
        mp4Source: "/exp/mp4/VueltaEnU.mp4",
        videoName: "Vuelta en U",
        contextContent: "Usted se encuentra en una vía en donde no está permitido hacer una vuelta en U.",
        infractionSeconds: 3
    }
]

let videoNoExpArray: videoData[] = [
    {
        videoNumber: 1,
        mp4Source: "/exp/mp4/ExcesoDeVelocidad.mp4",
        videoName: "Exceso de velocidad",
        contextContent: "Usted se desplaza a la velocidad máxima permitida en la carretera.",
        infractionSeconds: 5
    },
    {
        videoNumber: 2,
        mp4Source: "/exp/mp4/ConducirContraVia.mp4",
        videoName: "Conducir en contra vía",
        contextContent: "Usted se encuentra en una vía de un solo sentido.",
        infractionSeconds: 3
    },
    {
        videoNumber: 3,
        mp4Source: "/exp/mp4/SinCasco.mp4",
        videoName: "Conducir sin casco",
        contextContent: "Usted se encuentra en una vía urbana.",
        infractionSeconds: 1
    },
    {
        videoNumber: 4,
        mp4Source: "/exp/mp4/ConducirConTelefono.mp4",
        videoName: "Conducir con teléfono",
        contextContent: "Usted está esperando que cambie la luz roja del semáforo.",
        infractionSeconds: 3
    },
    {
        videoNumber: 5,
        mp4Source: "/exp/mp4/InvadirCarril.mp4",
        videoName: "Invadir carril de circulación",
        contextContent: "Usted está esperando avanzar y no puede invadir el carril de la ciclovía.",
        infractionSeconds: 1
    },
    {
        videoNumber: 6,
        mp4Source: "/exp/mp4/PasarLaLuzRoja1.mp4",
        videoName: "Pasar la luz roja del semáforo",
        contextContent: "Usted está esperando que cambie la luz roja del semáforo.",
        infractionSeconds: 3
    },
    {
        videoNumber: 7,
        mp4Source: "/exp/mp4/PasarElPare.mp4",
        videoName: "Pasar el pare",
        contextContent: "Usted se encuentra en una vía donde usted tiene la preferencia de cruzar primero.",
        infractionSeconds: 4
    },
    {
        videoNumber: 8,
        mp4Source: "/exp/mp4/VueltaEnU.mp4",
        videoName: "Vuelta en U",
        contextContent: "Usted se encuentra en una vía en donde no está permitido hacer una vuelta en U.",
        infractionSeconds: 3
    },
    {
        videoNumber: 9,
        mp4Source: "/exp/mp4/VueltaEnU.mp4",
        videoName: "Vuelta en U",
        contextContent: "Usted se encuentra en una vía en donde no está permitido hacer una vuelta en U.",
        infractionSeconds: 3
    }, {
        videoNumber: 10,
        mp4Source: "/exp/mp4/VueltaEnU.mp4",
        videoName: "Vuelta en U",
        contextContent: "Usted se encuentra en una vía en donde no está permitido hacer una vuelta en U.",
        infractionSeconds: 3
    }
]

videoExpArray.sort((a: videoData, b: videoData) => Math.random() - 0.5)
videoNoExpArray.sort((a: videoData, b: videoData) => Math.random() - 0.5)

let videoSlicedExp : videoData[] = videoExpArray.slice(0, 5);
let videoSlicedNoExp : videoData[] = videoExpArray.slice(0, 5);

export let videoArray : videoData[] = videoSlicedExp.concat(videoSlicedNoExp);

videoArray.sort((a: videoData, b: videoData) => Math.random() - 0.5)