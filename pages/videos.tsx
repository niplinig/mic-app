export interface videoData {
    videoNumber: number;
    mp4Source: string;
    webmSource: string;
    videoName: string;
    contextContent: string;
    infractionSeconds: number;
}

export let videoArray: videoData[] = [
    {
        videoNumber: 1,
        mp4Source: "/exp/mp4/ExcesoDeVelocidad.mp4",
        webmSource: "/exp/webm/ExcesoDeVelocidad.webm",
        videoName: "Exceso de velocidad",
        contextContent: "Usted se desplaza a la velocidad máxima permitida en la carretera.",
        infractionSeconds: 5
    },
    {
        videoNumber: 2,
        mp4Source: "/exp/mp4/ConducirContraVia.mp4",
        webmSource: "public/exp/webm/ConducirContraVia.webm",
        videoName: "Conducir en contra vía",
        contextContent: "Usted se encuentra en una vía de un solo sentido.",
        infractionSeconds: 3
    },
    {
        videoNumber: 3,
        mp4Source: "/exp/mp4/SinCasco.mp4",
        webmSource: "/exp/webm/SinCasco.webm",
        videoName: "Conducir sin casco",
        contextContent: "Usted se encuentra en una vía urbana.",
        infractionSeconds: 1
    },
    {
        videoNumber: 4,
        mp4Source: "/exp/mp4/ConducirConTelefono.mp4",
        webmSource: "/exp/webm/ConducirConTelefono.webm",
        videoName: "Conducir con teléfono",
        contextContent: "Usted está esperando que cambie la luz roja del semáforo.",
        infractionSeconds: 3
    },
    {
        videoNumber: 5,
        mp4Source: "/exp/mp4/InvadirCarril.mp4",
        webmSource: "/exp/webm/InvadirCarril.webm",
        videoName: "Invadir carril de circulación",
        contextContent: "Usted está esperando avanzar y no puede invadir el carril de la ciclovía.",
        infractionSeconds: 1
    },
    {
        videoNumber: 6,
        mp4Source: "/exp/mp4/PasarLaLuzRoja1.mp4",
        webmSource: "/exp/webm/PasarLaLuzRoja1.webm",
        videoName: "Pasar la luz roja del semáforo",
        contextContent: "Usted está esperando que cambie la luz roja del semáforo.",
        infractionSeconds: 3
    },
    {
        videoNumber: 7,
        mp4Source: "/exp/mp4/PasarElPare.mp4",
        webmSource: "/exp/webm/PasarElPare.webm",
        videoName: "Pasar el pare",
        contextContent: "Usted se encuentra en una vía donde usted tiene la preferencia de cruzar primero.",
        infractionSeconds: 4
    },
    {
        videoNumber: 8,
        mp4Source: "/exp/mp4/VueltaEnU.mp4",
        webmSource: "/exp/webm/VueltaEnU.webm",
        videoName: "Vuelta en U",
        contextContent: "Usted se encuentra en una vía en donde no está permitido hacer una vuelta en U.",
        infractionSeconds: 3
    },
]

videoArray.sort((a: videoData, b: videoData) => Math.random() - 0.5 )