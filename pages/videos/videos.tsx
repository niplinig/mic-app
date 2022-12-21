import { useToasts, useKeyboard, Modal, Button, Toast } from "@geist-ui/core";
import { useRouter } from "next/router";
import { useState, useRef } from "react";

interface pageInfo {
    mp4Src: string;
    webmSrc: string;
    name: string;
    contextTitle: string;
    contextContent: string;
}

const VideoArray: pageInfo[] = [
    {
        mp4Src: "/exp/mp4/ExcesoDeVelocidad.mp4",
        webmSrc: "/exp/webm/ExcesoDeVelocidad.webm",
        name: "Exceso de velocidad",
        contextTitle: "",
        contextContent: ""
    },
    {
        mp4Src: "/exp/mp4/ConducirContraVia.mp4",
        webmSrc: "/exp/webm/ConducirContraVia.webm",
        name: "Conducir en contra vía",
        contextTitle: "",
        contextContent: ""
    },
    {
        mp4Src: "/exp/mp4/SinCasco.mp4",
        webmSrc: "/exp/webm/SinCasco.webm",
        name: "Conducir sin casco",
        contextTitle: "",
        contextContent: ""
    },
    {
        mp4Src: "",
        webmSrc: "",
        name: "Usar teléfono mientras conduce",
        contextTitle: "",
        contextContent: ""
    },
    {
        mp4Src: "",
        webmSrc: "",
        name: "Invadir carril de circulación",
        contextTitle: "",
        contextContent: ""
    },
    {
        mp4Src: "/exp/mp4/PasarLaLuzRoja1.mp4",
        webmSrc: "/exp/webm/PasarLaLuzRoja1.webm",
        name: "Pasar la luz roja",
        contextTitle: "",
        contextContent: ""
    },
    {
        mp4Src: "",
        webmSrc: "",
        name: "Pasar el pare",
        contextTitle: "",
        contextContent: ""
    },
    {
        mp4Src: "",
        webmSrc: "",
        name: "Guirar en sitio prohibido",
        contextTitle: "",
        contextContent: ""
    },
]

let videoStart: string = '';
let videoEnd: string = '';
let reactionTime: string = '';
let reactionStart: string = '';

export default function VideosPage() {

    const router = useRouter();
    const { setToast } = useToasts();
    const [pageNumber, setPageNumber] = useState(0)
    const [visible, setVisible] = useState(true)
    const video: any = useRef<HTMLVideoElement>(null);

    const closeHandler = () => {
        setVisible(false);
    }

    const btnHandler = () => {
        if (pageNumber < (VideoArray.length - 1)) {
            setPageNumber(pageNumber + 1)
            setVisible(true);
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
                    let date = new Date();
                    reactionTime = `${video.current.currentTime}`;
                    reactionStart = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:}`
                    setToast({ type: "success", text: 'Reacción guardada', delay: 2000 });
                }
            }
        },
        [],
    )

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
                reactionTime: reactionTime,
                reactionStart: reactionStart,
                videoEnd: videoEnd,
                videoNumber: 2,
                videoName: video.current.id,
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
                    Contexto
                </Modal.Title>
                <Modal.Content>
                    Usted se desplaza a la velocidad maxima permitida.
                </Modal.Content>
            </Modal>

            <video className="max-w-screen-md" preload="auto" ref={video}>
                <source src={VideoArray[pageNumber].mp4Src} type="video/mp4" />
                <source src={VideoArray[pageNumber].webmSrc} type="video/webm" />
            </video>

            <Button type="success" onClick={btnHandler}>
                Reproducir Video
            </Button>
        </div>
    )
}