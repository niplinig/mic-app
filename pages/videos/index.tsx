import { Button, Display, Note, Spacer, Tabs, Input, Radio, Text, Pagination, Card, Grid, Checkbox, useInput, useTabs, useRect, useKeyboard, useToasts } from "@geist-ui/core";
import { useEffect, useRef, useState } from "react";
import { KeyCode } from "@geist-ui/core";

let videoStart: string = '';
let videoEnd: string = '';
let reactionTime: string = '';
let reactionStart: string = '';

export default function App() {

    const video: any = useRef<HTMLVideoElement>(null);

    const { state, setState, bindings } = useTabs('1');

    const { setToast } = useToasts()

    const togglePlay = async () => {
        await video.current.play();
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
                <Tabs.Item label="Inicio" value="1" >
                    Aqui va un texto con la explicación del experimento
                </Tabs.Item>
                <Tabs.Item label="Video 1" value="2">
                    <Display shadow caption={
                        <Button onClick={togglePlay}>Play Video</Button>
                    }>
                        <video preload="auto" height="500rem" id="Conducir contra vía" ref={video} onDurationChange={detectVideoStarts} onEnded={detectVideoEnds}>
                            <source src='/assets/CCV.mp4' type="video/mp4" />
                        </video>
                    </Display>
                </Tabs.Item>
                <Tabs.Item label="Video 2" value="3">
                    <Display shadow caption={
                        <Button onClick={togglePlay}>Play Video</Button>
                    }>
                        <video preload="auto" height="500rem" id="Pasar Luz Roja 1" ref={video} onPlay={detectVideoStarts} onEnded={detectVideoEnds}>
                            <source src='/assets/PLR1.mp4' type="video/mp4" />
                        </video>
                    </Display>
                </Tabs.Item>
                <Tabs.Item label="Video 3" value="4">
                    <Display shadow caption={
                        <Button onClick={togglePlay}>Play Video</Button>
                    }>
                        <video preload="auto" height="500rem" id="Exceso de velocidad" ref={video} onPlay={detectVideoStarts} onEnded={detectVideoEnds}>
                            <source src='/assets/EV.mp4' type="video/mp4" />
                        </video>
                    </Display>
                </Tabs.Item>
                <Tabs.Item label="Video 4" value="5">
                    <Display shadow caption={
                        <Button onClick={togglePlay}>Play Video</Button>
                    }>
                        <video preload="auto" height="500rem" id="Sin casco 1" ref={video} onPlay={detectVideoStarts} onEnded={detectVideoEnds}>
                            <source src='/assets/SC1.mp4' type="video/mp4" />
                        </video>
                    </Display>
                </Tabs.Item>
                <Tabs.Item label="Video 5" value="6">
                    <Display shadow caption={
                        <Button onClick={togglePlay}>Play Video</Button>
                    }>
                        <video preload="auto" height="500rem" id="Pasar Luz Roja 2" ref={video} onPlay={detectVideoStarts} onEnded={detectVideoEnds}>
                            <source src='/assets/PLR2.mp4' type="video/mp4" />
                        </video>
                    </Display>
                </Tabs.Item>
                <Tabs.Item label="Fin" value="7">
                    Gracias por tu aporte
                </Tabs.Item>
            </Tabs>
        </div>

    );
}