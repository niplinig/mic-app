import { Grid, Card, Button } from "@geist-ui/core";
import Link from "next/link";

export default function App() {

    return (
        <Grid.Container direction="row" wrap="wrap" alignContent="center" gap={2} justify="center" height="100vh">
            <Grid xl>
                <Card width="500px">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, eligendi. Suscipit veritatis voluptas delectus accusantium optio dignissimos perspiciatis, eaque impedit? Voluptatibus cum similique quisquam! Quis aliquam nobis dolor sequi! Eos?
                    Cumque quis beatae excepturi consequatur voluptatem voluptas nemo maiores nobis repellat quaerat. Asperiores delectus nemo atque assumenda in consectetur, quae culpa saepe autem facere eligendi a, sapiente corporis sequi consequatur.
                    Ex deleniti asperiores excepturi a nam. Sapiente omnis molestias repudiandae explicabo! Id ex ad perspiciatis ullam, odio ea nulla tenetur excepturi dolore ipsam! Deserunt unde id vel tenetur deleniti. Iure.
                    Aliquam modi, consectetur, libero iure excepturi dicta unde voluptatibus quia, similique quos repudiandae facere nisi officia at? Similique error totam odit provident non. Accusantium quae repellendus accusamus odit veritatis voluptatibus.
                    Quos iusto asperiores suscipit eaque id, tenetur nulla? Fuga officia sapiente ut eveniet veniam perspiciatis nobis? Nostrum ex deserunt ipsam cupiditate dignissimos. Ipsam ea id reprehenderit saepe delectus obcaecati tenetur.
                </Card>
            </Grid>
            <Grid xl>
                <Card width="500px">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. A facere illo dolorum nihil quam, quod soluta quisquam vero expedita tempore suscipit nam. Debitis, exercitationem eligendi enim possimus fugit perferendis. Perspiciatis!
                    Perferendis qui quo impedit officiis fugit eligendi vitae numquam esse beatae quibusdam, necessitatibus earum enim architecto, incidunt facilis iusto optio saepe, quisquam nihil! Molestias, consequuntur? Cum repellat assumenda ea distinctio.
                    Adipisci excepturi nobis repellendus alias dolor, modi, repellat pariatur fugit aperiam quas ipsam minima ullam sed quam exercitationem at beatae nostrum? Ad, aspernatur facilis expedita aliquid adipisci reiciendis facere minus.
                    Itaque eius qui, ab aperiam reprehenderit inventore voluptates dicta sunt exercitationem vero quam quos amet non voluptatibus molestiae optio maiores error rem cum? Consectetur aspernatur ipsam sint unde tenetur ipsum?
                    Impedit eius sit libero deleniti, modi aut quasi cum quos odio doloribus? Nulla cupiditate consectetur esse maiores, quas voluptas at provident veritatis sed ducimus, cum eveniet laudantium, aperiam saepe fugit.
                </Card>
                <Link href="/videos/1">
                        <Button>
                        Continuar
                    </Button>
                </Link>
            </Grid>


            
        </Grid.Container>

    );
}