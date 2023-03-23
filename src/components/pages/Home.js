import React from "react";
import "../../App.scss";
import HeroSection from "../HeroSection";
import "../pages/Home.scss";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import WSPGallery from "../WSPGallery";

const weddingGalleryImages = [
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/325272612_932649634399603_5359939210703763255_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=uK7udkN7LKUAX-UftqN&_nc_ht=scontent-sea1-1.xx&oh=00_AfBpvQg0AJyy6AFwa_2vMpS0xUVTZFr_FPbDYvNUtHgRTg&oe=64210D90"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/332858235_907853257084357_5538904149686989996_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5E35cB_1flQAX_KgJ6n&_nc_ht=scontent-sea1-1.xx&oh=00_AfCkU1ikRbX5nXkpIHOUGhlrs-NAZ-ywY7UWmwwtqYZq-g&oe=64205F9B"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/332854860_1388269338588021_8467510367144288019_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AHob918cEFUAX_lMjU3&_nc_ht=scontent-sea1-1.xx&oh=00_AfBYnIvgqiYBbUVx-RwH-0C9yXEcPiTUIaRFTcuCLEpIAA&oe=64200E34"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/245490183_10226668524924354_4825695638492336211_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AHO4YfRuS7UAX95s-G9&_nc_ht=scontent-sea1-1.xx&oh=00_AfCkKsDcU1-ES0mZ4NYa-wFsZ7DlqrF4ZiKG1Kv8_DT7wA&oe=6420CF83"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/244348119_10226582365250416_8495979234281685366_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Am08mOFHQ-8AX-EJdoy&_nc_ht=scontent-sea1-1.xx&oh=00_AfA7DQ6AayFT4Cf7LDBkIGffn9ifik72hfuu-g9__7iFwQ&oe=6421037D"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/267187482_10227031808046205_6384752032541618856_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SIQMeqShGE4AX8TKCQJ&_nc_ht=scontent-sea1-1.xx&oh=00_AfCrlYGMgbI_jS4StEWvQahHhr449w2LYgawBkIVEKJsFg&oe=64216A3B"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/164192402_10225297983461674_8656932875816860169_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=_2Q1JQ7r2cUAX_WFTZ2&_nc_ht=scontent-sea1-1.xx&oh=00_AfALiceDorRPRCxgH5Mj3PxXJNRi3x6MLfRktcAJaeRt8w&oe=64431B42"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/189852382_10225753320484815_5039836209942682466_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XtQpEBMT_x4AX_oUVYT&_nc_ht=scontent-sea1-1.xx&oh=00_AfCE4-w4vh-f0VGptMY-YkvseBqEcRa3X4ULcdGDaH2WOQ&oe=64432594"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/199186910_10225901084258817_5438763725261185420_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=zokIVNFmVuwAX-p14hq&_nc_ht=scontent-sea1-1.xx&oh=00_AfAqcOz3MS-q4zLnZVbkvWz06akIYfV2GbVc3XSMZi7tLQ&oe=644316EF"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/315311038_10229062378769204_4247990646483823233_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=DoUooQsMTSwAX8D15lN&_nc_ht=scontent-sea1-1.xx&oh=00_AfBOAB1d5OUah_g9QRgHpQYljlja9exIAS50haxHl5BZsA&oe=641FC39C"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/312008920_10228736897112366_927028141079402442_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=BB5Os8_o6v8AX_sLA2B&_nc_ht=scontent-sea1-1.xx&oh=00_AfBc_K_HddVhFzIZBsztnZDLauIEhlPmEYqZucPmmWBrYg&oe=642080C8"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/274533022_10227405967519958_4997040081985668355_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=QB_bPkUxsQ8AX8UfZgz&_nc_ht=scontent-sea1-1.xx&oh=00_AfBIXimaRstxk6Ht-fqYlNjg6HKPvpuciMrTj_rgJCrAPg&oe=64206312"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/190961435_10225777297764232_8488334862190209847_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=ZtsSTW70PFcAX877A5Z&_nc_ht=scontent-sea1-1.xx&oh=00_AfDSQwEAI_3fq4FsC73kZZXfEghmjpA2FVgSJlWKmwYoWA&oe=64431B09"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/162045494_10225249958301075_4030885008753156281_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=TllTtRLo1uAAX8iglsK&_nc_ht=scontent-sea1-1.xx&oh=00_AfD4CowMc7r4vFoKMyg8a7I_yUl91-qhb68HDL5LFnb6hQ&oe=64433320"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/175665867_10225481590291730_6000392865213226587_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-CWYm8rleP4AX_7221R&_nc_ht=scontent-sea1-1.xx&oh=00_AfCtU6Sa5bBtBFfcXEAjvBoLYLy6BLa73AVO-GkDTmk7xw&oe=64431C5F"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/279452620_10227814134883887_6048173190166985548_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9ZmXL84bbx4AX9OT5o0&_nc_ht=scontent-sea1-1.xx&oh=00_AfB2tBq1nBYtk-SiNmptnSkiEb72xECzYS06qjIl7i6ckg&oe=64213F40"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/267014261_10227005309983770_1355740488396584903_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Q59nx1zXDtcAX-09dRG&_nc_ht=scontent-sea1-1.xx&oh=00_AfDIHVKLCQIcpDiUCrCcZS7sXcS7d9hM_GsrquqZlNwiDw&oe=6420317E"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/244521510_10226597642232331_1916387915775350500_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cPXt6NOCjc4AX-1pe--&_nc_ht=scontent-sea1-1.xx&oh=00_AfBieH1Nk9lREH1qw5wRqBK4PPjKqICJwBqfSmnXFDFuew&oe=64218695"
  },

  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/225884639_10226178484193642_5662490203423929758_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SUTskJNTjp4AX-JObHt&_nc_ht=scontent-sea1-1.xx&oh=00_AfCP-v80WERJ188gg32p7NmnvHutgMpwMgDTXFx4b_ig1A&oe=6420DBDC"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/286458332_10228044390760140_1125889207871443381_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AG7W5baOkQsAX9wbASs&_nc_ht=scontent-sea1-1.xx&oh=00_AfAd5hhELN_NmnCm4VSWC67FG1cE8DZ44GkNVBVDsS-nWQ&oe=64218D81"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/316543202_10229151070666446_4598852709678101762_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=mEplKPWqwv0AX_G7VZY&_nc_ht=scontent-sea1-1.xx&oh=00_AfCuDpA6UF35Dnqs1Wn9CsIkKeudqQNXOsZ_0cHFRAMrKQ&oe=641FC09F"
  },
  
]

function Home() {
  return (
    <div>
      
       <HeroSection/>
      <div className="greetings-section">
        <div className="greetings-photo"></div>

        <div className="greetings-content">
          <h2>Hi there, I'm Michelle!</h2>
          <p className="subtitle-home">A Salt Lake City-Based Photographer</p>
          <p className="paragraph-home">
            From what was just a fun hobby of taking photos of landscapes,
            flowers, and grandkids, soon fostered a newfound obsession of
            photographing every single priceless moment. I fell completely in
            love with the art of telling stories through photography. Each
            wedding, maternity session, or engagement shoot is more than just
            capturing beautiful images, it’s about capturing the feelings of
            those movements and preserve them forever. I woul describe myself as
            a storyteller, world traveler, people lover and your new best
            friend. I love meeting new folks around the world so dont be
            hesitant to stop by and chat.
          </p>
          <div>
          <div className="hero-btns greet-Btn intro-btn">
          <Link to='/about' className='btns'>
            <Button className='btns' buttonStyle='btn--outline-black' buttonSize='btn--large'>Lets Connect</Button>
            </Link>
        </div>
          </div>
        </div>
      </div>
      <div className="home-gallery-banner">
        <h4>Capturing Every Ounce Of Magic Since 2020</h4>
      </div>
        <div className="weddingSection">
        <WSPGallery galleryImages={weddingGalleryImages}/>
        </div>
      <div className="home-packages-banner">
        <h4>Most Popular Packages</h4>
        <p className="package-subheading">
          Lets get you ready for memories that will last forever and ever
        </p>
      </div>
      <div className="popular-packages-section">
        <div className="package-container">
          <div className="package-item">
            <h3>Engagements</h3>
            <p>$175 - $275</p>{" "}
            <ul>
              <li>45-60 Min session</li>
              <li>One outfit change</li>
              <li>Print release</li>
              <li>Online digital gallery</li>
              <li>Albums upon request</li>
            </ul>
          </div>
          <Link to="/services" className="btn-mobile greet-Btn">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Book Now
            </Button>
          </Link>
        </div>
        <div className="package-container">
          <div className="package-item">
            <h3>Weddings</h3>
            <p>$875 - $2200</p>
            <ul>
              <li>Engagement session </li>
              <li>2 - 8 hrs. wedding day</li>
              <li>Print release</li>
              <li>Online digital gallery</li>
              <li>Albums upon request</li>
              <li>Prices may vary</li>
            </ul>
          </div>
          <Link to="/services" className="btn-mobile greet-Btn">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Book Now
            </Button>
          </Link>
        </div>
        <div className="package-container">
          <div className="package-item">
            <h3>Maternity</h3>
            <p>$150 - $275</p>
            <ul>
              <li>Two outfit changes</li>
              <li>Print release</li>
              <li>Online digital gallery</li>
              <li>Albums upon request</li>
            </ul>
          </div>
          <Link to="/services" className="btn-mobile greet-Btn">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
