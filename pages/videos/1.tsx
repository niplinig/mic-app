import { Progress, useKeyboard, KeyCode, Loading, Modal, useToasts, Divider } from "@geist-ui/core";
import { Note } from "@geist-ui/core";
import Router from "next/router";
import { useEffect, useRef, useState } from "react";


// Local imports
import { videoData } from "./inicio";
import { videoArray } from "./inicio";


let videoStart: string = '';
let videoEnd: string = '';
let reactionSeconds: string = '';
let reactionStart: string = '';

// Get the element

let currentVideoData = videoArray.pop();

let videoNumber = currentVideoData?.videoNumber;
let videoSource = currentVideoData?.mp4Source;
let videoName = currentVideoData?.videoName;
let videoContext = currentVideoData?.contextContent;
let infractionSeconds = currentVideoData?.infractionSeconds;

export default function VideosPage() {

    const video = useRef<HTMLVideoElement>(null);
    const { setToast } = useToasts();

    // State variables

    const [noteText, setNoteText] = useState('Pulsa cualquier letra del teclado para reproducir');
    const [progress, setProgress] = useState(0);

    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(true);

    const detectVideoStartLoading = () => {
        setLoading(true);
    }

    const detectVideoEndsLoading = () => {
        setLoading(false);
    }

    const closeHandler = () => {
        setVisible(false);
    }

    const changeProgress = () => {
        if (video.current == undefined) {
            return;
        }
        if (!video.current.ended) {
            setProgress(Math.round((video.current.currentTime / video.current.duration) * 100));
        }
    }

    const detectVideoStarts = () => {
        let videoStartDate = new Date();
        videoStart = `${videoStartDate.getFullYear()}/${videoStartDate.getMonth() + 1}/${videoStartDate.getDay()} ${videoStartDate.getHours()}:${videoStartDate.getMinutes()}:${videoStartDate.getSeconds()}`;
        console.log('videoStart', videoStart);
    }

    const detectVideoEnds =  async() => {
        let date = new Date();
        videoEnd = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDay()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
 console.log('videoEnd', videoEnd);

        postData();

        Router.push('/videos/2');
    }

    const postData = async () => {
        let age = localStorage.getItem('age');
        let sex = localStorage.getItem('sex');
        let license = localStorage.getItem('license');

        let diferenceReaction = '0';

        if (infractionSeconds != null) {
            diferenceReaction = Math.abs(Number(reactionSeconds) - infractionSeconds).toFixed(2)
        }

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
                videoNumber: videoNumber,
                videoName: videoName,
                diferenceReaction: diferenceReaction
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
                const data = await response.json()
        console.log(data);
    }

    useEffect(() => {
        let interval = setInterval(changeProgress, 10);

        return () => {
            clearInterval(interval);
        }
    })

    useKeyboard(
        () => {

            if (video.current == undefined) {
                return
            }
            if (video.current.currentTime == 0 && reactionStart.length == 0) {
                video.current.play();
                setNoteText('Pulsa cualquier letra del teclado para grabar tu reacción');
                return;
            }
            if (reactionStart.length != 0) {
                setNoteText('Espere hasta que termine el video');
                setToast({
                    type: "warning",
                    text: 'Espere hasta que termine el video',
                    delay: 1500
                });
            }
            if (video.current.played && !video.current.ended && reactionStart.length == 0) {
                let reactionStartDate = new Date();
                reactionSeconds = video.current.currentTime.toFixed(2);
                reactionStart = `${reactionStartDate.getFullYear()}/${reactionStartDate.getMonth() + 1}/${reactionStartDate.getDay()} ${reactionStartDate.getHours()}:${reactionStartDate.getMinutes()}:${reactionStartDate.getSeconds()}`;
                console.log('reactionStart', reactionStart, 'reactionSeconds', reactionSeconds);
                setNoteText('Espere hasta que termine el video');
                setToast({
                    type: "success",
                    text: 'Reacción guardada',
                    delay: 1500
                })
                return;
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

    return (

        <div onLoad={() => console.log('loaded')} className="flex bg-gray-800 text-white flex-col flex-wrap justify-center items-center text-center w-screen h-screen gap-y-3">

            <Modal visible={visible} onClose={closeHandler}>
                <Modal.Title>
                    Contexto del video
                </Modal.Title>
                <Modal.Content>
                    {videoContext}
                </Modal.Content>
                <Modal.Action onClick={closeHandler}>
                    Continuar
                </Modal.Action>
            </Modal>

            <div>
                Video 1 de 10
            </div>

            <div className="w-4/6 justify-center items-center drop-shadow-2xl">

                {loading && <div className="h-full"><Loading>Cargando</Loading></div>}

                <video preload="auto"
                    onCanPlay={detectVideoEndsLoading} onLoadStart={detectVideoStartLoading} onPlay={detectVideoStarts} onEnded={detectVideoEnds} className="rounded-lg" ref={video}>
                    <source src={videoSource} type='video/mp4' />
                </video>
            </div>

            <div className="w-4/6">
                <Progress value={progress} type={"success"} />
            </div>

            <div>
                <Note label={"Nota"}>
                    {noteText}
                </Note>
            </div>

        </div>
    )
}