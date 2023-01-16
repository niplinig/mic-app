import { Text, Divider, Grid, Card } from "@geist-ui/core";

export default function App() {
  
    return (
        <div>
        <Grid.Container justify="center" direction="column" alignContent="center" alignItems="center" height="100vh">
            <Grid>
                <Card shadow width="60vw">
                    <Card.Content>
                        <Text h2>Muchas gracias por participar</Text>
                    </Card.Content>
                </Card>
            </Grid>

        </Grid.Container>
    </div>
    );
}