import React, { useContext, useEffect, useState } from 'react';
import { FiFastForward, FiPause, FiPlay, FiRefreshCcw, } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { Title } from '../../../styles/GlobalComponents';
import { Container, Timer, ContainerControlers, Button, DetailPomo, Badge, PomoTimer, PomoHeader, CardDetail } from './styles';
import { useRef } from 'react';



const Pomodoro: React.FC = () => {

    const { colors } = useContext(ThemeContext);
    const defaultTime = 5 * 1;
    const smallBreakTime = 5 * 60;
    const bigBreakTime = 10 * 60;
    const [time, setTime] = useState(defaultTime);
    const [isRunning, setIsRunning] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [isBreak, setIsBreak] = useState(false);
    const [pomos, setPomos] = useState(0);
    const [breaks, setBreaks] = useState(0);

    const audioRef = useRef<HTMLAudioElement>(null)

    const [isPlaying, setIsPlaying] = useState(false)

    function setPlayingState(state:boolean) {
      setIsPlaying(state)
    }
  
    function toggleIsPlaying() {
      setIsPlaying(!isPlaying)
    }
  

    const handleStart = () => {
        setIsRunning(true);
    }

    const handlePause = () => {
        setIsRunning(false);
    }

    const handleReset = () => {
        setIsRunning(false);
        setIsFinished(false);
        setIsBreak(false);
        setTime(defaultTime);
    }

    const handleFinish = () => {
        setIsRunning(false);
        handleReset()
        setPomos(pomos + 1);
    }

    useEffect(() => {
        if (time === 0 && !isBreak) {
            const timeBreack = pomos > 0 ? pomos % 3 === 0 ? bigBreakTime : smallBreakTime : smallBreakTime
            setIsRunning(false)
            setIsBreak(true)
            setTime(timeBreack)
            setBreaks(breaks + 1)
            setPlayingState(true)

        }
        if (time === 0 && isBreak) {
            setIsRunning(false)
            setIsBreak(false)
            setIsFinished(true)
            setTime(defaultTime)
            setPomos(pomos + 1)
            setPlayingState(true)
        }
    }, [time])

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setTime(time => time - 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isRunning]);

    useEffect(()=> {
        console.log(isPlaying);
        
        if (!audioRef.current) {
            return;
        }
    
       let playPromise = audioRef.current.play();
        if (isPlaying) {
            playPromise.then(()=>{
                setTimeout(() => {
                    // Follow up operation
                    console.log("done.");
                }, audioRef.current?.duration || 1 * 1000); // audio.duration is the length of the audio in seconds.
            })
        } else {
            audioRef.current.pause()
        }
      }, [isPlaying])
    

    return (

        <Container>
            <PomoHeader>
                <Title fontSize={'1.5rem'}>Pomodoro</Title>
            </PomoHeader>
            <PomoTimer >
                <Timer>
                    <h1>EasyPomo</h1>
                    <h2>{Math.floor(time / 60)}:{time % 60 < 10 ? '0' : ''}{time % 60}</h2>
                </Timer>

                <ContainerControlers>
                    <div>
                        <audio
                            src='/audio/beep.mp3'
                            autoPlay={true}
                            ref={audioRef}
                            // onPlay={() => setPlayingState(true)}
                            // onPause={() => setPlayingState(false)}
                        />
                        {isRunning ? (
                            <Button isActive={isRunning} onClick={handlePause}>Pause <FiPause /></Button>
                        ) : (
                            <Button isActive={isRunning} onClick={()=>{
                                handleStart()
                            }}>Iniciar <FiPlay /></Button>
                        )}
                        <Button onClick={handleReset}>Reiniciar <FiRefreshCcw /></Button>
                        <Button onClick={handleFinish}>Pular <FiFastForward /></Button>
                    </div>
                </ContainerControlers>
            </PomoTimer>
            <DetailPomo>
                <CardDetail>
                    <h1>Pomos</h1>
                    <h2>{pomos}</h2>
                    <Badge bgColor={colors.quaternary}>Completos</Badge>
                </CardDetail>
                <CardDetail>
                    <h1>Pausas</h1>
                    <h2>{breaks}</h2>
                    <Badge bgColor={colors.quaternary}>Completos</Badge>
                </CardDetail>

            </DetailPomo>
        </Container>
    )
}

export default Pomodoro;