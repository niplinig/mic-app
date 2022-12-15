import { Note, Keyboard, Button, Display, Tabs, useTabs, KeyCode, useKeyboard, useToasts } from "@geist-ui/core";
import { useRef, useState } from "react";
import { useRouter } from "next/router";

let videoStart: string = '';
let videoEnd: string = '';
let reactionTime: string = '';
let reactionStart: string = '';

export default function App() {

    const router = useRouter();

    const [videoEnded, setVideoEnded] = useState(false);

    const video: any = useRef<HTMLVideoElement>(null);

    const { state, setState, bindings } = useTabs('1');

    const [loading, setLoading] = useState(false);

    const { setToast } = useToasts()

    const togglePlay = () => {
        video.current.play();
    }

    const detectVideoStarts = () => {
        let date = new Date();
        videoStart = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
    }

    useKeyboard(
        () => {
            if (video.current !== null) {
                if (video.current.currentTime > 0 && !video.current.ended) {
                    let date = new Date();
                    reactionTime = `${video.current.currentTime}`;
                    reactionStart = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
                    setToast({ type: "success", text: 'Reacción guardada', delay: 2000 });
                }

            }
        },
        [KeyCode.KEY_R],
    )

    const detectVideoEnds = async () => {
        let date = new Date();
        videoEnd = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`

        if (reactionTime == '') {
            setVideoEnded(true);
        } else {
            postData();
            changePage();
        }
    }

    const changePage = () => {
        let previus = state;
        let result: string = `${Number(previus) + 1}`
        setState(result);
        router.push('/videos/5')
    }

    const postData = async () => {

        let age = localStorage.getItem('age');
        let sex = localStorage.getItem('sex')

        const response = await fetch('/api/reaction', {
            method: 'POST',
            body: JSON.stringify({
                age: Number(age),
                sex: sex,
                videoStart: videoStart,
                reactionTime: reactionTime,
                reactionStart: reactionStart,
                videoEnd: videoEnd,
                videoNumber: Number(state),
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
            {reactionTime == '' && videoEnded && <Note type="warning" label="NOTA" filled>Recuerda presionar <Keyboard>R</Keyboard> cuando perciba una infracción</Note>}
            <Display shadow caption={
                <Button onClick={togglePlay}>Reproducir video</Button>
            }>
                <video preload="auto" height="100vh" id="Sin casco 1" ref={video} onPlay={detectVideoStarts} onEnded={detectVideoEnds}>
                    <source src='/exp/mp4/SinCasco.mp4' type="video/mp4" />
                    <source src='/exp/webm/SinCasco.webm' type="video/webm" />
                </video>
            </Display>
        </div>

    );
}