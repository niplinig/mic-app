import { Text, Divider, Grid, Card } from "@geist-ui/core";

export default function App() {
  
    return (
        <div>
        <Grid.Container justify="center" direction="column" alignContent="center" alignItems="center" height="100vh">
            <Grid>
                <Card shadow width="60vw">
                    <Card.Content>
                        <Text h2>Gracias por participar</Text>
                    </Card.Content>
                    <Divider h="1px" my={0} />
                    <Card.Content>
                        <Text p>
                            Los datos recopilados son almacenados para su posterior análisis.
                            Procuramos su confidencialidad, los datos serán procesados con fines
                            meramente académicos.
                        </Text>
                    </Card.Content>
                </Card>
            </Grid>

        </Grid.Container>
    </div>
    );
}