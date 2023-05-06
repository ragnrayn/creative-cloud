import "./Home.css";
import backgroundVideo from "../../assets/background_video.mp4";
import backgroundAudio from "../../assets/tenet.mp3";
import FollowModal from "../../components/FollowModal/FollowModal";
import { useEffect, useState } from "react";

function Home() {

    const [isFollowOpen, setIsFollowOpen] = useState<boolean>(false);
    const [audio] = useState(new Audio(backgroundAudio));
    const [toggleAudio, setToggleAudio] = useState(true);

    useEffect(() => {
        console.log(toggleAudio);
        if(toggleAudio === true){
            audio.play();
            return;
        }
        audio.pause();
    }, [toggleAudio])

    return (
        <>
            <div className="home">
                <video id="background-video" loop autoPlay muted>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>

                <div className="home-page">
                    <div className="mute-btn">
                        <button onClick={() => setToggleAudio(!toggleAudio)}><span className="circle"></span></button>
                    </div>
                    <div className="soon">
                        comming soon
                        <div className="contact" onClick={() => setIsFollowOpen(true)}>
                            <button style={{ transform: isFollowOpen ? "rotate(45deg)" : "" }}>
                                <span className="circle"></span>
                            </button>
                            <div className="contact-text"><span className="contact-primary">contact</span> us</div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="footer-follow">Follow</div>
                    <div className="footer-desclimer">Declimer</div>
                </footer>
            </div>
            <FollowModal isOpen={isFollowOpen} setIsOpen={setIsFollowOpen} />
        </>
    )
}

export default Home;