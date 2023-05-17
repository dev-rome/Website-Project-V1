import Linkedin from "/images/linkedin.svg";
import Facebook from "/images/facebook.svg";
import Twitter from "/images/twitter.svg";
import Pinterest from "/images/pinterest.svg";
import Instagram from "/images/instagram.svg";
import Youtube from "/images/youtube.svg";

function FooterSocial() {
  const socialMedia = [
    { src: Linkedin, alt: "Linkedin" },
    { src: Facebook, alt: "Facebook" },
    { src: Twitter, alt: "Twitter" },
    { src: Pinterest, alt: "Pinterest" },
    { src: Instagram, alt: "Instagram" },
    { src: Youtube, alt: "Youtube" },
  ];

  const socialMediaList = socialMedia.map(({ src, alt }) => {
    return (
      <li key={alt}>
        <a href="#">
          <img className="w-4" src={src} alt={alt} />
        </a>
      </li>
    );
  });

  return <ul className="flex gap-4 mt-2">{socialMediaList}</ul>;
}

export default FooterSocial;
