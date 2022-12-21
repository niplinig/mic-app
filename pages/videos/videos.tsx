import { KeyCode, Display, useToasts, useKeyboard, Modal, Button, Toast } from "@geist-ui/core";
import { useRouter } from "next/router";
import { useState, useRef } from "react";

interface pageInfo {
    mp4Src: string;
    webmSrc: string;
    name: string;
    contextTitle: string;
    contextContent: string;
    infractionStart: number;
}

const videoArray: pageInfo[] = [
    {
        mp4Src: "/exp/mp4/ExcesoDeVelocidad.mp4",
        webmSrc: "/exp/webm/ExcesoDeVelocidad.webm",
        name: "Exceso de velocidad",
        contextTitle: "Contexto del video",
        contextContent: "Usted se desplaza a la velocidad máxima permitida en la carretera.",
        infractionStart: 5
    },
    {
        mp4Src: "/exp/mp4/ConducirContraVia.mp4",
        webmSrc: "/exp/webm/ConducirContraVia.webm",
        name: "Conducir en contra vía",
        contextTitle: "Contexto del video",
        contextContent: "Usted se encuentra en una vía de un solo sentido.",
        infractionStart: 3
    },
    {
        mp4Src: "/exp/mp4/SinCasco.mp4",
        webmSrc: "/exp/webm/SinCasco.webm",
        name: "Conducir sin casco",
        contextTitle: "Contexto del video",
        contextContent: "El conductor y los acompañantes, de motocicletas que no utilicen adecuadamente casco de seguridad, estan cometiendo una infracción de tránsito.",
        infractionStart: 1
    },
    {
        mp4Src: "/exp/mp4/ConducirConTelefono.mp4",
        webmSrc: "",
        name: "Conducir con teléfono",
        contextTitle: "Contexto del video",
        contextContent: "El conductor que utilice el teléfono celular mientras conduce está cometiendo una infracción de tránsito.",
        infractionStart: 3
    },
    {
        mp4Src: "/exp/mp4/InvadirCarril.mp4",
        webmSrc: "",
        name: "Invadir carril de circulación",
        contextTitle: "Contexto del video",
        contextContent: "El conductor que no respete el derecho preferente de los ciclistas en avenidas, carreteras y ciclovías, está cometiendo una infracción de tránsito.",
        infractionStart: 1
    },
    {
        mp4Src: "/exp/mp4/PasarLaLuzRoja1.mp4",
        webmSrc: "/exp/webm/PasarLaLuzRoja1.webm",
        name: "Pasar la luz roja del semáforo",
        contextTitle: "Contexto del video",
        contextContent: "Usted se encuentra en una vía con un semáforo.",
        infractionStart: 3
    },
    {
        mp4Src: "/exp/mp4/PasarElPare.mp4",
        webmSrc: "",
        name: "Pasar el pare",
        contextTitle: "Contexto del video",
        contextContent: "Usted se encuentra en una vía donde usted tiene la preferencia de cruzar primero.",
        infractionStart: 4
    },
    {
        mp4Src: "/exp/mp4/VueltaEnU.mp4",
        webmSrc: "/exp/webm/VueltaEnU.webm",
        name: "Vuelta en U",
        contextTitle: "Contexto del video",
        contextContent: "Usted se encuentra en una vía en donde no está permitido hacer una vuelta en U.",
        infractionStart: 3
    },
]

let videoStart: string = '';
let videoEnd: string = '';
let reactionSeconds: string = '';
let reactionStart: string = '';

export default function VideosPage() {

    const router = useRouter();
    const { setToast } = useToasts();
    const [pageNumber, setPageNumber] = useState(0)
    const [visible, setVisible] = useState(true)
    const video: any = useRef<HTMLVideoElement>(null);
    const [videoEnded, setVideoEnded] = useState(false);

    const closeHandler = () => {
        setVisible(false);
    }

    const resetData = () => {
        videoStart = '';
        videoEnd = '';
        reactionSeconds = '';
        reactionStart = '';
    }

    const nextVideo = () => {
        if (pageNumber < (videoArray.length - 1)) {
            setPageNumber(pageNumber + 1)
            setVisible(true);
            resetData();
            video.current.load();
        }
        else {
            router.push('/videos/fin')
        }
    }

    useKeyboard(
        () => {
            if (video.current !== null) {
                if (video.current.currentTime > 0 && !video.current.ended) {
                    let reactionStartDate = new Date();
                    reactionSeconds = `${video.current.currentTime}`;
                    reactionStart = `${reactionStartDate.getFullYear()}/${reactionStartDate.getMonth()}/${reactionStartDate.getDay()} ${reactionStartDate.getHours()}:${reactionStartDate.getMinutes()}:${reactionStartDate.getSeconds()}`
                    setToast({ type: "success", text: 'Reacción guardada', delay: 2000 });
                }
            }
        },
        [
            KeyCode.KEY_A,
            KeyCode.KEY_B,
            KeyCode.KEY_C,
            KeyCode.KEY_D,
            KeyCode.KEY_E,
            KeyCode.KEY_F,
            KeyCode.KEY_G,
            KeyCode.KEY_H,
            KeyCode.KEY_I,
            KeyCode.KEY_J,
            KeyCode.KEY_K,
            KeyCode.KEY_L,
            KeyCode.KEY_M,
            KeyCode.KEY_N,
            KeyCode.KEY_O,
            KeyCode.KEY_P,
            KeyCode.KEY_Q,
            KeyCode.KEY_R,
            KeyCode.KEY_S,
            KeyCode.KEY_T,
            KeyCode.KEY_U,
            KeyCode.KEY_V,
            KeyCode.KEY_W,
            KeyCode.KEY_X,
            KeyCode.KEY_Y,
            KeyCode.KEY_Z
        ],
    )

    const togglePlay = () => {
        video.current.play();
    }

    const detectVideoStarts = () => {
        let videoStartDate = new Date();
        videoStart = `${videoStartDate.getFullYear()}/${videoStartDate.getMonth()}/${videoStartDate.getDay()} ${videoStartDate.getHours()}:${videoStartDate.getMinutes()}:${videoStartDate.getSeconds()}`
        setVideoEnded(false);
    }

    const detectVideoEnds = async () => {
        let date = new Date();
        videoEnd = `${date.getFullYear()}/${date.getMonth()}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        setVideoEnded(true);
        postData();
        nextVideo();
    }

    const postData = async () => {

        let age = localStorage.getItem('age');
        let sex = localStorage.getItem('sex');
        let license = localStorage.getItem('license');

        const response = await fetch('/api/reaction', {
            method: 'POST',
            body: JSON.stringify({
                age: Number(age),
                sex: sex,
                license: license,
                videoStart: videoStart,
                reactionSeconds: reactionSeconds,
                reactionStart: reactionStart,
                videoEnd: videoEnd,
                videoNumber: pageNumber,
                videoName: video.current.id,
                diferenceReaction: Number(reactionSeconds) - videoArray[pageNumber].infractionStart
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
    }

    return (
        <div>

            <Modal visible={visible} onClose={closeHandler}>
                <Modal.Title>
                    {videoArray[pageNumber].contextTitle}
                </Modal.Title>
                <Modal.Content>
                    {videoArray[pageNumber].contextContent}
                </Modal.Content>
            </Modal>
            <Display shadow caption={
                <Button type="success" onClick={togglePlay}>Reproducir video</Button>
            }>

                <video className="max-w-screen-md" preload="auto" ref={video} onDurationChange={detectVideoStarts} onEnded={detectVideoEnds}>
                    <source src={videoArray[pageNumber].mp4Src} type="video/mp4" />
                    <source src={videoArray[pageNumber].webmSrc} type="video/webm" />
                </video>
            </Display>
        </div>
    )
}