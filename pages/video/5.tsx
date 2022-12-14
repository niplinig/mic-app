import { Loading, Button, Display, Tabs, useTabs, KeyCode, useKeyboard, useToasts } from "@geist-ui/core";
import { useRef, useState } from "react";

let videoStart: string = '';
let videoEnd: string = '';
let reactionTime: string = '';
let reactionStart: string = '';

export function LoadingScreen() {
    return (
        <Loading>Cargando</Loading>
    )
};

export default function App() {

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
        console.log(`videoStart: ${videoStart}`);
    }

    useKeyboard(
        () => {
            if (video.current !== null) {
                if (video.current.currentTime > 0 && !video.current.ended) {
                    let date = new Date();
                    reactionTime = `${video.current.currentTime}`;
                    reactionStart = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
                    console.log(`reactionTime ${reactionTime}, reactionStart: ${reactionStart}`);
                    setToast({ text: 'Reacción guardada', delay: 2000 });
                }

            }
        },
        [KeyCode.KEY_R],
    )

    const detectVideoEnds = async () => {
        let date = new Date();
        videoEnd = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
        console.log(`videoEnd: ${videoEnd}`);

        postData();
        changePage();
    }

    const changePage = () => {
        let previus = state;
        let result: string = `${Number(previus) + 1}`
        setState(result);
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
        console.log(data);
    }


    return (
        <div>
            <Tabs {...bindings} initialValue="1" align="center" leftSpace={0}>
            <Tabs.Item label="Video 5" value="1">
                    <Display shadow caption={
                        <Button onClick={togglePlay}>Play Video</Button>
                    }>
                        <video height="720px" id="Pasar Luz Roja 2" ref={video} onPlay={detectVideoStarts} onEnded={detectVideoEnds}>
                            <source src='/videos/mp4/PasarLaLuzRoja2.mp4' type="video/mp4" />
                            <source src='/videos/webm/PasarLaLuzRoja2.webm' type="video/webm" />
                        </video>
                    </Display>
                </Tabs.Item>
            </Tabs>
        </div>

    );
}