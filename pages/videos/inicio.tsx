import { Divider, Grid, Text, Button, Card } from "@geist-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App() {

    const router = useRouter();
    const [visible, setVisible] = useState(false)

    const btnHandler = () => {
        router.push("/videos/");
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
                                Se mostrarán 8 videos grabados en vehículos en movimiento e información de contexto.
                                Por cada video usted debe presionar <Text b>cualquier tecla</Text> cuando crea haber visto una <Text b>infracción de tránsito</Text> y esperar que se cargue el siguiente video.
                                Solo se detecta la <Text b>PRIMERA</Text> infracción.
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