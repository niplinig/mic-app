import { Collapse, Modal, Link, Divider, Button, Input, Radio, Text, Card, Grid, Checkbox, useInput, useModal } from "@geist-ui/core";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function App() {

  const [sex, setSex] = useState('');
  const [check, setCheck] = useState(false);
  const [visible, setVisible] = useState(false)
  const { state, setState, reset, bindings } = useInput('');

  const router = useRouter();

  const checkHandler = (event: any) => {
    setCheck(event.target.checked);
  }

  const openHandler = () => {
    setVisible(true);
  }
  const closeHandler = () => {
    setVisible(false);
  }

  const sexHandler = (value: any) => {
    setSex(value);
  }

  const validateAge = (inputAge: string) => {
    if (inputAge != '') {
      if (Number(inputAge) < 0
        || inputAge.includes('.')
        || Number(inputAge) == 0
        || Number(inputAge) > 99
      ) {
        return 'Ingresar edad válida'
      }
    }
  }

  const ageErrorMsg = validateAge(state);

  const btnHandler = () => {
    localStorage.setItem('age', state);
    localStorage.setItem('sex', sex);
    router.push("/videos/inicio");
  }

  return (
    <div>
      <Modal visible={visible} onClose={closeHandler}>
        <Modal.Title>
          Condiciones de participar
        </Modal.Title>
        <Modal.Subtitle>
          Lea las condiciones de participar antes de aceptar
        </Modal.Subtitle>
        <Modal.Content>
          <Collapse.Group>
            <Collapse title="¿Qué datos recopilamos?">
              Su edad, sexo y su tiempo de reacción expresado en hh:mm:ss.
              No recopilamos ningún dato que lo pueda indentificar.
            </Collapse>
            <Collapse title="¿Por qué recopilamos esos datos?">
              Los datos serán usados para una investigación sobre los tiempos de reacción de las personas
              al percibir sucesos en vías de tránsito. Esta investigación se lleva a cabo por un grupo de investigación conformado por
              estudiantes universitarios.
            </Collapse>
            <Collapse title="¿Dónde se almacenan esos datos?">
              Los datos serán almacenados en una base de datos de uso exclusivo de los miembros del grupo de investigación.
            </Collapse>
            <Collapse title="¿Qué se harán con esos datos?">
              Se realizará un análisis de los tiempos de reacción de las personas con respecto a su edad y sexo.
            </Collapse>
            <Collapse title="¿Qué se hará después?">
              Una vez terminada la investigación se procederá a eliminar todos los datos de la base de datos.
            </Collapse>
            <Collapse title="¿Qué puede esperar de nosotros?">
              Uso confidencial de los datos para fines meramente académicos.
            </Collapse>
            <Collapse title="¿Qué esperamos de usted?">
              Total honestidad al momento de ingresar la información que se le pide.
            </Collapse>
          </Collapse.Group>
        </Modal.Content>
      </Modal>
      <Grid.Container direction="row" alignItems="center" alignContent="center" justify="center" height="100vh">
        <Grid alignContent="center" justify="center" alignItems="center">
          <Card shadow>
            <Card.Content>
              <Text h3>Formulario de inicio</Text>
              <Text>Por favor llena el siguiente formulario para poder continuar</Text>
            </Card.Content>
            <Card.Content>
              <Text>Edad</Text>
              <Input type={ageErrorMsg ? "error" : "default"} {...bindings} htmlType="number" width="100%" maxLength={3} />
              <Text type="error">{ageErrorMsg}</Text>
              <Text>Sexo</Text>
              <Radio.Group useRow value={sex} onChange={sexHandler}>
                <Radio value="Femenino">Femenino</Radio>
                <Radio value="Masculino">Masculino</Radio>
              </Radio.Group>
              <Divider h="0px" my={3} />
              <Checkbox onChange={checkHandler} type="success">
                Acepto las <Link href="#" onClick={openHandler} block>condiciones de participar</Link>
              </Checkbox>
              <Divider h="0px" my={3} />
              <Button disabled={(ageErrorMsg || state == '' || sex == '' || !check) ? true : false} width="100%" onClick={btnHandler}>
                Continuar
              </Button>

            </Card.Content>
          </Card>
        </Grid>
      </Grid.Container>
    </div >



  );
}