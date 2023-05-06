import "./Home.css";
import backgroundVideo from "../../assets/background-futuristic.mp4";
import backgroundAudio from "../../assets/videoplayback.mp3";
import FollowModal from "../../components/FollowModal/FollowModal";
import { useEffect, useState } from "react";
import headerLogo from "../../assets/creative-cloud-logo.png";
import mute from "../../assets/hear-beat.mp3";
import contactUs from "../../assets/strange-drone.mp3";
import followAudio from "../../assets/low.mp3";
import desclimerAudio from "../../assets/transition-coat.mp3";

function Home() {

    const [isFollowOpen, setIsFollowOpen] = useState<boolean>(false);
    const [audio] = useState(new Audio(backgroundAudio));
    const [toggleAudio, setToggleAudio] = useState(false);
    const [muteAudio] = useState(new Audio(mute));
    const [contact] = useState(new Audio(contactUs));
    const [follow] = useState(new Audio(followAudio));
    const [desclimer] = useState(new Audio(desclimerAudio));


    const [textFirst, setTextFirst] = useState("SI");
    const [textSecond, setTextSecond] = useState("JNJ");
    const [textThird, setTextThird] = useState(100);
    const [textFour, setTExtFour] = useState(355);
    const [textFive, setTextFive] = useState("N");
    const [textSix, setTextSix] = useState(22);

    useEffect(() => {
        if (toggleAudio === true) {
            audio.play();
            audio.volume = 0.02;
            return;
        }
        audio.pause();
    }, [toggleAudio])

    const handleMove = () => {
        let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let randomLetter = Math.floor(0 + Math.random() * alphabet.length);
        let randomSecondLetter = Math.floor(0 + Math.random() * alphabet.length);
        let randomThirdLetter = Math.floor(0 + Math.random() * alphabet.length);

        let randomTo355 = Math.floor(0 + Math.random() * 355);
        let randomTo100 = Math.floor(0 + Math.random() * 100);
        let randomTo22 = Math.floor(0 + Math.random() * 22)

        setTextFirst(alphabet[randomLetter].concat(alphabet[randomSecondLetter]));
        setTextSecond(alphabet[randomLetter].concat(alphabet[randomSecondLetter]).concat(alphabet[randomThirdLetter]));
        setTextThird(randomTo100);
        setTExtFour(randomTo355);
        setTextFive(alphabet[randomLetter]);
        setTextSix(randomTo22);
    }

    return (
        <>
            <div className="home" onMouseMove={handleMove} onClick={() => setToggleAudio(!toggleAudio)}>
                <video id="background-video" loop autoPlay muted>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>

                <div className="home-page">
                    <div className="home-page__header">
                        <div className="header-logo">
                            <a href="#">
                                <img src={headerLogo} width={"50px"} alt="" />
                            </a>
                        </div>
                        <div className="mute-btn" onMouseEnter={() => muteAudio.play()} onMouseLeave={() => muteAudio.pause()}>
                            <button onClick={() => setToggleAudio(!toggleAudio)}><span className="circle"></span></button>
                        </div>
                    </div>
                    <div className="soon">
                        coming soon
                        <div className="soon-line"></div>
                        <div className="contact" onMouseEnter={() => contact.play()} onMouseLeave={() => contact.pause()} onClick={(e) => { setIsFollowOpen(true); e.stopPropagation() }}>
                            <button style={{ transform: isFollowOpen ? "rotate(45deg)" : "" }}>
                                <span className="circle"></span>
                            </button>
                            <div className="contact-text"><span className="contact-primary">contact</span> us</div>
                        </div>
                        <div className="coords">
                            <div className="coords-text">
                                <div className="text-first">{ textFirst }</div>
                                <div className="text-second">{ textSecond }</div>
                                <div className="text-third">{ textThird }</div>
                                <div className="text-four">{ textFour }</div>
                                <div className="text-five">{ textFive }</div>
                                <div className="text-six">{ textSix }</div>
                            </div>
                            <div className="coords-line"></div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="footer-follow"  onMouseEnter={() => follow.play()} onMouseLeave={() => follow.pause()}>Follow</div>
                    <div className="footer-desclimer"  onMouseEnter={() => desclimer.play()} onMouseLeave={() => desclimer.pause()}>Declimer</div>
                </footer>
            </div>
            <FollowModal isOpen={isFollowOpen} setIsOpen={setIsFollowOpen} />
        </>
    )
}

export default Home;