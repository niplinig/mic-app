import { Grid, Card } from "@geist-ui/core";

export default function App() {

    return (
            <Grid.Container direction="row" alignContent="center" gap={2} justify="center" height="100vh">
                <Grid xl><Card shadow width="100%" /></Grid>
                <Grid xl><Card shadow width="100%" /></Grid>
            </Grid.Container>

    );
}