import { Link, Modal, Divider, Grid, Keyboard, Text, KeyCode, useKeyboard, Card } from "@geist-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App() {

    const router = useRouter();
    const [visible, setVisible] = useState(false)

    const openHandler = () => {
        setVisible(true);
    }
    const closeHandler = () => {
        setVisible(false);
    }

    useKeyboard(
        () => {
            router.push('/videos/1')
        },
        [KeyCode.KEY_R],
    )

    return (
        <div>
            <Modal visible={visible} onClose={closeHandler}>
                <Modal.Title>
                    Infracciones de tránsito
                </Modal.Title>
                <Modal.Content>
                    <Text h3></Text>
                    <Text p>
                        Son infracciones de tránsito las acciones u omisiones culposas producidas en el ámbito del transporte y seguridad vial.
                    </Text>
                </Modal.Content>
                <Modal.Content>
                    <Text b>Por ejemplo:</Text>
                    <Text p>Un vehículo automotor exceda dentro de un rango moderado los límites de velocidad permitidos.
                    </Text>
                    <Text>
                        Conducir un vehículo en sentido contrario a la vía normal de circulación, siempre que la respectiva señalización esté clara y visible.
                    </Text>
                    <Text>
                        La o el conductor y los acompañantes, en caso de haberlos, de motocicletas que no utilicen adecuadamente casco de seguridad.
                    </Text>
                </Modal.Content>
            </Modal>
            <Grid.Container justify="center" direction="column" alignContent="center" alignItems="center" height="100vh">
                <Grid>
                    <Card shadow width="60vw">
                        <Card.Content>
                            <Text h2>Antes de iniciar</Text>
                            <Text>Por favor sigue las siguientes indicaciones.</Text>
                        </Card.Content>
                        <Divider h="1px" my={0} />
                        <Card.Content>
                            <Text p>
                                El experimento tiene una duración de 5 min aproximadamente, consiste en una serie de 5 videos
                                a los cuales tiene que reaccionar. Cada video es una grabacion de cámaras de panel de vehículos o dashcams con una infracción.
                                Presione la tecla <Keyboard>R</Keyboard> de su teclado cuando perciba la <Link href="#" block onClick={openHandler}>infracción de tránsito</Link> en el video.
                                Espere hasta que termine el video para que se cargue el siguiente.
                            </Text>
                        </Card.Content>
                        <Card.Footer>
                            <Text> Para continuar presiona la tecla </Text> <Keyboard>R</Keyboard>
                        </Card.Footer>
                    </Card>
                </Grid>
            </Grid.Container>
        </div >
    );
}