import { Divider, Button, Input, Radio, Text, Card, Grid, Checkbox, useInput } from "@geist-ui/core";
import { useState } from "react";
import Link from "next/link";

export default function App() {

  const [check, setCheck] = useState(false);

  const checkHandler = (event: any) => {
    console.log(event.target);
    setCheck(event.target.checked);
  }



  const { state, setState, reset, bindings } = useInput('');

  const [sex, setSex] = useState('');

  const sexHandler = (value: any) => {
    setSex(value);
  }

  const validateAge = (inputAge: string) => {
    if (inputAge != '') {
      if (Number(inputAge) < 0 || Number(inputAge) == 0 || Number(inputAge) > 99) {
        return 'Ingresar edad válida'
      }
    }
  }

  const validateSex = (inputSex: string) => {
    if (inputSex == '') {
      return 'Seleccionar sexo'
    }
  }

  const validateCheck = (inputCheck: boolean) => {
    if (!inputCheck) {
      return 'Tiene que aceptar los terminos para continuar'
    }
  }

  const checkErrorMsg = validateCheck(check);
  const ageErrorMsg = validateAge(state);
  const sexErrorMsg = validateSex(sex);

  const btnHandler = () => {
    localStorage.setItem('age', state);
    localStorage.setItem('sex', sex);
  }

  return (
    <Grid.Container direction="row" alignContent="center" justify="center" height="100vh">
      <Grid>
        <Card>
          <Card.Content>
            <Text h3>Formulario de inicio</Text>
            <Text>Por favor llena el siguiente formulario para poder continuar</Text>
          </Card.Content>
          <Divider h="1px" my={0} />
          <Card.Content>
            <Text>Edad</Text>
            <Input type={ageErrorMsg ? "error" : "default"} {...bindings} htmlType="number" width="100%" maxLength={3} />
            <Text type="error">{ageErrorMsg}</Text>
            <Text>Sexo</Text>
            <Radio.Group useRow value={sex} onChange={sexHandler}>
              <Radio value="Femenino">Femenino</Radio>
              <Radio value="Masculino">Masculino</Radio>
            </Radio.Group>
{/*             <Text type="error">{sexErrorMsg}</Text> */}

            <Checkbox onChange={checkHandler}>Aceptar</Checkbox>
            {/* <Text type="error">{checkErrorMsg}</Text> */}

            <Link href="/videos/inicio">
              <Button disabled={(ageErrorMsg || state == '' || sex == '' || checkErrorMsg) ? true : false} width="100%" onClick={btnHandler}>
                Continuar
              </Button>
            </Link>
          </Card.Content>
        </Card>
      </Grid>
    </Grid.Container>



  );
}