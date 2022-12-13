import { Button, Spacer, Input, Radio, Text, Card, Grid, Checkbox, useInput } from "@geist-ui/core";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function App() {

  const { state, setState, reset, bindings } = useInput('');

  useEffect(() => {
    console.log(state), [state]
  })

  const [sex, setSex] = useState('');
  const sexHandler = (value: any) => {
    setSex(value);
    console.log(value);
  }

  const checkHandler = (value: any) => {
    console.log(value);
  }

  const btnHandler = () => {
    localStorage.setItem('age', state);
    localStorage.setItem('sex', sex);
  }

  return (

    <div>
      <Grid.Container alignItems="center" direction="column" alignContent="center" justify="center">

        <Grid>
          <Text h1>Bienvenido</Text>
          <Text>Lorem ipsum dolor sit amet.</Text>
        </Grid>

        <Grid>
          <Card>

            <Text>Edad</Text>
            <Input {...bindings} htmlType="number" width="100%" />

            <Text>Sexo</Text>
            <Radio.Group useRow value={sex} onChange={sexHandler}>
              <Radio value="Femenino">Femenino</Radio>
              <Radio value="Masculino">Masculino</Radio>
            </Radio.Group>

            <Spacer h={2}></Spacer>

            <Checkbox.Group value={['aceptar']} onChange={checkHandler}>
              <Checkbox value="aceptar">Aceptar</Checkbox>
            </Checkbox.Group>

            <Spacer h={1}></Spacer>

            <Link href="/videos">
              <Button width="100%" onClick={btnHandler}>
                Continuar
              </Button>
            </Link>

          </Card>
        </Grid>
      </Grid.Container>

    </div>

  );
}