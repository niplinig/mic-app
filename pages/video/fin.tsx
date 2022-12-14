import { Grid, Card } from "@geist-ui/core";

export default function App() {

    return (
        <Grid.Container gap={2} justify="center" height="100vh" width="100vw">
            <Grid xs={6}>
                <Card shadow width="100%" />
            </Grid>
            <Grid xs={6}>
                <Card shadow width="100%" />
            </Grid>
        </Grid.Container>

    );
}