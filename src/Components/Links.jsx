import React from 'react';
import '../css/Links.css';

function Links() {
    var url = window.location.href;
    return (
        <div className="links">
            <h1 className="links__heading">Invite Friends To Buy This Product With You</h1>
            <meta property="og:image" content="https://www.fujifilm.com/products/digital_cameras/x/fujifilm_x_t1/sample_images/img/index/ff_x_t1_001.JPG" />
            <div className="links__anchors">
<<<<<<< HEAD
                <a className="links__anchor" href={`https://www.facebook.com/sharer.php?u=${url}`} target="_blank"><div className = "anchor"><img className="links__image" src="https://www.lawyersandsettlements.com/blog/wp-content/uploads/2015/09/facebook-logo.png" alt="Facebook" /><span className = "link__span">SHARE</span></div></a>
                <a className="links__anchor" href={`http://twitter.com/share?text=text&url=${url}&hashtags=#trisquare`} target="_blank"><div className = "anchor"><img className="links__image" src="https://amysmartalpha.files.wordpress.com/2013/03/twitter_logo_volt.png" alt="Twitter" /><span className = "link__span">TWEET</span></div></a>
                <a className="links__anchor" href={`https://api.whatsapp.com/send?phone=&text=${url}`} target="_blank"><div className = "anchor"><img className="links__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/1024px-WhatsApp_logo-color-vertical.svg.png" alt="Whatsapp" /><span className = "link__span">SHARE</span></div></a>
                <a className="links__anchor" href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`} target="_blank"><div className = "anchor"><img className="links__image" src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png" alt="LinkedIn" /><span className = "link__span">POST</span></div></a>
=======
                <a className="links__anchor" href={`https://www.facebook.com/sharer.php?u=${url}`} target="_blank"><img className="links__image" src="https://www.lawyersandsettlements.com/blog/wp-content/uploads/2015/09/facebook-logo.png" alt="Facebook" /></a>
                <a className="links__anchor" href={`http://twitter.com/share?text=text&url=${url}&hashtags=#trisquare`} target="_blank"><img className="links__image" src="https://amysmartalpha.files.wordpress.com/2013/03/twitter_logo_volt.png" alt="Twitter" /></a>
                <a className="links__anchor" href={`https://api.whatsapp.com/send?phone=&text=${url}`} target="_blank"><img className="links__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/1024px-WhatsApp_logo-color-vertical.svg.png" alt="Whatsapp" /></a>
                <a className="links__anchor" href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`} target="_blank"><img className="links__image" src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG8.png" alt="LinkedIn" /></a>
>>>>>>> a85fb8ab7f2ce7c020c083a6bd4c74167c3b4a7d
            </div>
        </div>
    )
}
export default Links;
