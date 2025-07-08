
export default function Info() {
    return (
        <main>
            <img className="foto-profile" src="./src/assets/foto-profile.png"/>

            <div className="profile-info">
                <h1>Hanna Shymanovych</h1>
                <p className="job-title">Frontend Developer</p>
                <p className="personal-website-name">shymanovych.dev</p>
            </div>

            
            
        <div className="info-btns">

            <a className="email-btn" href="mailto:shimsnov111@gmail.com" target="_blank">
                <span>
                    <i className="fa-solid fa-envelope"></i>
                </span>
                Email
            </a>


            <a className="linkedin-btn" href="https://www.linkedin.com/in/hanna-shymanovych-998006173/" target="_blank">
                <span>
                    <i className="fa-brands fa-linkedin"></i>
                </span>
                LinkedIn
            </a>



            {/* <button className="email-btn">
                <span>
                <i className="fa-solid fa-envelope"></i>
                </span>
                Email
            </button>
            <button className="linkedin-btn">
                <span>
                <i className="fa-brands fa-linkedin"></i>
                </span>
                LinkedIn
            </button> */}
        </div>
        </main>
        
    )

}
