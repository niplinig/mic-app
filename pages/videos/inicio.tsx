import { Divider, Grid, Text, Button, Card } from "@geist-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";

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
        mp4Source: "/exp/mp4/1.mp4",
        videoName: "Cambio de carril sin direccionales",
        contextContent: "Usted circula por una carretera.",
        infractionSeconds: 7
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
        contextContent: "Usted circula por una calle de un solo sentido.",
        infractionSeconds: 1
    },
    {
        videoNumber: 4,
        mp4Source: "/exp/mp4/ConducirConTelefono.mp4",
        videoName: "Conducir con teléfono",
        contextContent: "Usted está esperando a cruzar una intersección",
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
        videoName: "Pasar luz roja",
        contextContent: "Usted circula por una calle y llega hasta un semáforo en luz roja",
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
        mp4Source: "/exp/mp4/2.mp4",
        videoName: "Cambio de carril sin direccional",
        contextContent: "Usted circula por una calle.",
        infractionSeconds: 5
    }, {
        videoNumber: 10,
        mp4Source: "/exp/mp4/3.mp4",
        videoName: "Moto obstruyendo paso peatonal",
        contextContent: "Usted se encuentra esperando hasta que el semáforo cambie a luz verde.",
        infractionSeconds: 2
    }, {
        videoNumber: 11,
        mp4Source: "/exp/mp4/4.mp4",
        videoName: "Vehículo obstruyendo la calle",
        contextContent: "Usted avanza por una calle y a su derecha esta permitido estacionar.",
        infractionSeconds: 2
    }, {
        videoNumber: 12,
        mp4Source: "/exp/mp4/5.mp4",
        videoName: "Vehículos estacionados en lugar no permitido",
        contextContent: "Usted avanza por una calle y a su derecha es prohibido estacionar.",
        infractionSeconds: 5
    }, {
        videoNumber: 13,
        mp4Source: "/exp/mp4/6.mp4",
        videoName: "Girar sin usar direccional",
        contextContent: "Usted avanza por una calle y se detiene en el semáforo",
        infractionSeconds: 5
    }, {
        videoNumber: 14,
        mp4Source: "/exp/mp4/7.mp4",
        videoName: "Pasar luz roja",
        contextContent: "Usted avanza por una calle y se detiene en el semáforo",
        infractionSeconds: 5
    }, {
        videoNumber: 15,
        mp4Source: "/exp/mp4/8.mp4",
        videoName: "Pasar luz roja",
        contextContent: "Usted se encuentra esperando hasta que el semáforo cambie a luz verde.",
        infractionSeconds: 5
    }, {
        videoNumber: 16,
        mp4Source: "/exp/mp4/9.mp4",
        videoName: "Cambiar de carril sin usar direccional",
        contextContent: "Usted avanza por una calle",
        infractionSeconds: 5
    }, {
        videoNumber: 17,
        mp4Source: "/exp/mp4/10.mp4",
        videoName: "Vehículos estacionados en lugar no permitido",
        contextContent: "Usted avanza por una calle y a su derecha es prohibido estacionar.",
        infractionSeconds: 5
    }, {
        videoNumber: 18,
        mp4Source: "/exp/mp4/11.mp4",
        videoName: "Cambiar de carril sin usar direccional",
        contextContent: "Usted avanza por una calle.",
        infractionSeconds: 5
    }, {
        videoNumber: 19,
        mp4Source: "/exp/mp4/12.mp4",
        videoName: "Girar sin usar direccional",
        contextContent: "Usted avanza por una avenida y se detiene en la luz roja del semáforo.",
        infractionSeconds: 3
    }
    , {
        videoNumber: 20,
        mp4Source: "/exp/mp4/13.mp4",
        videoName: "Pasar luz roja",
        contextContent: "Usted avanza por una avenida y se detiene en la luz roja del semáforo.",
        infractionSeconds: 5
    }, {
        videoNumber: 21,
        mp4Source: "/exp/mp4/14.mp4",
        videoName: "Cambiar de carril sin usar direccional",
        contextContent: "Usted avanza por una carretera.",
        infractionSeconds: 8
    }, {
        videoNumber: 22,
        mp4Source: "/exp/mp4/15.mp4",
        videoName: "Cambiar de carril sin usar direccional",
        contextContent: "Usted avanza por una carretera.",
        infractionSeconds: 9
    }, {
        videoNumber: 23,
        mp4Source: "/exp/mp4/16.mp4",
        videoName: "Girar sin usar direccional",
        contextContent: "Usted avanza por una avenida y se detiene en la luz roja del semáforo.",
        infractionSeconds: 8
    }, {
        videoNumber: 24,
        mp4Source: "/exp/mp4/17.mp4",
        videoName: "Girar sin usar direccional",
        contextContent: "Usted avanza por una avenida y avanza por un cruce.",
        infractionSeconds: 10
    }, {
        videoNumber: 25,
        mp4Source: "/exp/mp4/ExcesoDeVelocidad.mp4",
        videoName: "Exceso de velocidad",
        contextContent: "Usted avanza por una carretera a la velocidad máxima permitida",
        infractionSeconds: 1
    },
]

let videoNoExpArray: videoData[] = [
    {
        videoNumber: 1,
        mp4Source: "/noexp/mp4/NON1.mp4",
        videoName: "Sin infracción 1",
        contextContent: "Usted avanza por una carretera.",
        infractionSeconds: 0
    },
    {
        videoNumber: 2,
        mp4Source: "/noexp/mp4/NON2.mp4",
        videoName: "Sin infracción 2",
        contextContent: "Usted avanza por una calle.",
        infractionSeconds: 0
    },
    {
        videoNumber: 3,
        mp4Source: "/noexp/mp4/NON3.mp4",
        videoName: "Sin infracción 3",
        contextContent: "Usted se encuentra en una calle congestionada.",
        infractionSeconds: 0
    },
    {
        videoNumber: 4,
        mp4Source: "/noexp/mp4/NON4.mp4",
        videoName: "Sin infracción 4",
        contextContent: "Usted avanza por una avenida.",
        infractionSeconds: 0
    },
    {
        videoNumber: 5,
        mp4Source: "/noexp/mp4/NON5.mp4",
        videoName: "Sin infracción 5",
        contextContent: "Usted avanza por una avenida.",
        infractionSeconds: 0
    }
]

videoExpArray.sort((a: videoData, b: videoData) => Math.random() - 0.5)
videoNoExpArray.sort((a: videoData, b: videoData) => Math.random() - 0.5)

let videoSlicedExp: videoData[] = videoExpArray.slice(0, 5);

console.log(videoSlicedExp);

let videoSlicedNoExp: videoData[] = videoNoExpArray.slice(0, 5);

console.log(videoSlicedNoExp);

export let videoArray: videoData[] = videoSlicedExp.concat(videoSlicedNoExp);

console.log(videoArray);

videoArray.sort((a: videoData, b: videoData) => Math.random() - 0.5)

export default function App() {

    const router = useRouter();
    const [visible, setVisible] = useState(false)

    const btnHandler = () => {
        router.push("/videos/1");
    }

    return (
        <div>
            <Grid.Container justify="center" direction="column" alignContent="center" alignItems="center" height="100vh">
                <Grid>
                    <Card shadow width="60vw">
                        <Card.Content>
                            <Text h2>Antes de iniciar</Text>
                        </Card.Content>
                        <Divider h="1px" my={0} />
                        <Card.Content>
                            <Text p>
                                Se mostrarán 10 videos grabados en vehículos en movimiento e información de contexto.
                                Por cada video usted debe presionar <Text b>cualquier tecla</Text> cuando crea haber visto una <Text b>infracción de tránsito</Text> y esperar que se cargue el siguiente video.
                                Solo se detecta la <Text b>PRIMERA</Text> reacción.
                            </Text>
                            <Text>
                                Ejemplo de infracciones:
                            </Text>
                            <ol>
                                <li>
                                    Un vehículo automotor a velocidad mayor al rango permitido.
                                </li>
                                <li>
                                    Conducir un vehículo en sentido contrario a la vía normal de circulación.
                                </li>
                                <li>
                                    Conductor y/o acompañantes de motocicletas que no utilicen adecuadamente casco de seguridad.
                                </li>
                                <li>
                                    Conductor usando el celular mientras el vehículo está en movimiento.
                                </li>
                                <li>
                                    Invadir el carril de circulación.
                                </li>
                                <li>
                                    No detenerse en la luz roja

                                </li>
                                <li>
                                    No detenerse en una señal de pare.
                                </li>
                                <li>
                                    Girar en sitio prohibido.
                                </li>
                            </ol>
                        </Card.Content>
                        <Card.Footer className="justify-center">
                            <Button type="success" onClick={btnHandler}>
                                Continuar
                            </Button>
                        </Card.Footer>
                    </Card>
                </Grid>
            </Grid.Container>
        </div >
    );
}   
