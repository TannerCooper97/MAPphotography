import React from "react";
import "../../App.scss";
import "./Portfolio.scss"
import "../pages/Portfolio.scss";
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
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/244394802_10226582362330343_4745466187738581946_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=AvwA17pcx2gAX_lW1pW&_nc_ht=scontent-sea1-1.xx&oh=00_AfB9upGfYb67HZy9HklJXGlw_g3FUOEU-PVoTJEjLBUiKw&oe=641FED38"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/194126343_10225796832892598_398638011481598545_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=A1rweQ3n38wAX-CgJXP&_nc_ht=scontent-sea1-1.xx&oh=00_AfAMVRrosqeqGRtE-4x4uIwUEyP5k2-XbQniL0CylzeH9A&oe=64430C08"
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
 
  
]

const EngagementGalleryImages = [
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/267014261_10227005309983770_1355740488396584903_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Q59nx1zXDtcAX-09dRG&_nc_ht=scontent-sea1-1.xx&oh=00_AfDIHVKLCQIcpDiUCrCcZS7sXcS7d9hM_GsrquqZlNwiDw&oe=6420317E"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/324108270_572984554250980_341934195744685560_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=5kB0X8DmgvwAX_gjsYn&_nc_oc=AQkdLOcGX0oq2cka2Acv6gdASsrblhAWIgfrLKk48gteH7T3E7zpyhhRVJuPB0v6x7w&_nc_ht=scontent-sea1-1.xx&oh=00_AfCJID5Xo9x1Il6n4F0_W_oKVft0g-QJSJghyGjtff51ew&oe=64206481"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/279452620_10227814134883887_6048173190166985548_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9ZmXL84bbx4AX9OT5o0&_nc_ht=scontent-sea1-1.xx&oh=00_AfB2tBq1nBYtk-SiNmptnSkiEb72xECzYS06qjIl7i6ckg&oe=64213F40"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/266828105_10227005307663712_9163702527392304937_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=sHcWGPq5p-cAX_OI8RI&_nc_ht=scontent-sea1-1.xx&oh=00_AfBNSt84_e3EzmcK3kOS4RoBrBFIY2Hcy3sprh5PWe7avw&oe=6421134F"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/244521510_10226597642232331_1916387915775350500_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cPXt6NOCjc4AX-1pe--&_nc_ht=scontent-sea1-1.xx&oh=00_AfBieH1Nk9lREH1qw5wRqBK4PPjKqICJwBqfSmnXFDFuew&oe=64218695"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/267187482_10227031808046205_6384752032541618856_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SIQMeqShGE4AX8TKCQJ&_nc_ht=scontent-sea1-1.xx&oh=00_AfCrlYGMgbI_jS4StEWvQahHhr449w2LYgawBkIVEKJsFg&oe=64216A3B"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/321774183_2335769166582947_7345409146710844813_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QTVoTiDuWRMAX9NAaqx&_nc_ht=scontent-sea1-1.xx&oh=00_AfCrQJbt3kdtQvK28UmPQBkwSuB_0Z7X4YmiYO5lfU4a4A&oe=64210D54"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/175665867_10225481590291730_6000392865213226587_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-CWYm8rleP4AX_7221R&_nc_ht=scontent-sea1-1.xx&oh=00_AfCtU6Sa5bBtBFfcXEAjvBoLYLy6BLa73AVO-GkDTmk7xw&oe=64431C5F"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/244346345_10226582361650326_5647123516823394803_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9WCqXYNnY5YAX_7AtTT&_nc_ht=scontent-sea1-1.xx&oh=00_AfD7mDdi6XglTQSyWnBqXVvfYhKeK7tESMX-OKwBsCAgUQ&oe=6420F9CE"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/265195466_10227005308663737_8198001696407929677_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ecAoFhqfcLEAX_4xw7f&_nc_ht=scontent-sea1-1.xx&oh=00_AfDXm6QRHIRH0L677zOs3-86aJJTlLuLgj_m4T-s881-2Q&oe=64210E7F"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/229012948_10226233651772797_8144116867065073541_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=iyI4lAhjbVkAX_xm8kn&_nc_ht=scontent-sea1-1.xx&oh=00_AfAk5NS6K5g89UTLq635T2HpdxmZC1l7dQZIXVrgWCrXHA&oe=6420148B"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/247542243_10226678678018175_9105384200812001578_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8ehJBE-pGFoAX_1X4OO&_nc_ht=scontent-sea1-1.xx&oh=00_AfBwpEYkPa1jp6tBcJrACQuLgkaIrrThNjq7HyEBWzQyfw&oe=64203AF8"
  },
]
const MaternityGalleryImages = [
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/272437655_10227260766450022_7468396527598965592_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=o3QbEfLVwaoAX_6p-zT&_nc_ht=scontent-sea1-1.xx&oh=00_AfBPvFwIoJg5imEtDS8DOpfuCY7mR6FbKs6vXo2039wAaQ&oe=641FFBF8"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/247539605_10226683864027822_7181525762547440283_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QyapJpMcvXgAX87xCP5&_nc_ht=scontent-sea1-1.xx&oh=00_AfC8KowxwDOOfYBd8QEYlwgPDmwES85c29Cn8d1FsNIuPg&oe=6420918A"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/176463694_10225506376991382_5123885841204871010_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=Ym5KNML434cAX87Z_io&_nc_ht=scontent-sea1-1.xx&oh=00_AfDcL1gLtlgi8WZAOJu7jkACp8rs0uKqlbQVIPK8_LUTNA&oe=64433B47"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/225884639_10226178484193642_5662490203423929758_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SUTskJNTjp4AX-JObHt&_nc_ht=scontent-sea1-1.xx&oh=00_AfCP-v80WERJ188gg32p7NmnvHutgMpwMgDTXFx4b_ig1A&oe=6420DBDC"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/176156906_10225506376951381_4660022971782587900_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=dEijXDLJAPkAX-7SSDq&_nc_ht=scontent-sea1-1.xx&oh=00_AfDTWd1OIlOLog3rvPkVK7_v7riXHjfuxQb8woAIQC8v_Q&oe=64433A22"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/162045494_10225249958301075_4030885008753156281_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=TllTtRLo1uAAX8iglsK&_nc_ht=scontent-sea1-1.xx&oh=00_AfD4CowMc7r4vFoKMyg8a7I_yUl91-qhb68HDL5LFnb6hQ&oe=64433320"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/175881127_10225492907894663_6587984612823141979_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=juPwcYg0vpgAX8Ylofp&_nc_ht=scontent-sea1-1.xx&oh=00_AfA4JZpBPgEHV_gn3Hebc6RbiVqTGv7bg0jlmFf99iD8aQ&oe=64434B1B"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/225670926_10226178485073664_987713447585182383_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_g3v7VA3dv8AX9ezqpd&_nc_ht=scontent-sea1-1.xx&oh=00_AfCO1GLXz7MLdn1_3aMK-KxmPw0I8xdtV6jp625tkIegqw&oe=642191D8"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/326346942_715188796952646_4723725190329664313_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=JH7TRqukHtIAX9TsCNj&_nc_ht=scontent-sea1-1.xx&oh=00_AfCRDdJLaHGyv2rtAuQR91abM6zOL497OlWcefKHkwMwGA&oe=642168B7"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/325586738_711698817014751_8084694705257812538_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-4knMn50bCgAX8vqHe1&_nc_ht=scontent-sea1-1.xx&oh=00_AfC7LN4iB5GHmlT2FxJ-7OKPoK9HzCxJnLKo3adg40p_JA&oe=642137B0"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/300440541_10228389209180385_5277032696015133472_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vVpDIZ8RMOIAX_4uiPl&_nc_ht=scontent-sea1-1.xx&oh=00_AfCZpsFMy18ZTdF1Jz9fXXx_2zmlu_yr--croWL-gN-9Pw&oe=642072DD"
  },
  {
    img: "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/277814782_10227707525578721_6138789655789928981_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=iYedAF2d9HEAX-Gx7SX&_nc_ht=scontent-sea1-1.xx&oh=00_AfABUYDTH32EqZScUtjHzlWUiyZrNdYBOw5jZPyMEWjPGQ&oe=64208584"
  },
]

function Portfolio() {
  return (
    <div className="Portfolio">
      <div className="portfolio-contact-hero">
        <h1>Gallery</h1>

        
      </div>

    <div>
    <div className="about-banner-red" id="weddingGallery">
        <p>
          Wedding Gallery
        </p>
      </div>
      <div className="weddingSection">
    <WSPGallery galleryImages={weddingGalleryImages}/>
    </div>
    <div className="about-banner-yellow">
        <p>
          Engagement Gallery
        </p>
      </div>
      <div className="engagementSection">
      <WSPGallery galleryImages={EngagementGalleryImages}/>
      </div>
    </div>
    <div className="about-banner-red" id="weddingGallery">
        <p>
          Maternity Gallery
        </p>
      </div>
      <div className="maternitySection">
      <WSPGallery galleryImages={MaternityGalleryImages}/>
      </div>
      <Footer/>
  </div>  
  )
}

export default Portfolio