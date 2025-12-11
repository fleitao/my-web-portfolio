import { Linkedin, Github } from "lucide-react";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const FlickrIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="7" cy="12" r="5" />
    <circle cx="17" cy="12" r="5" />
  </svg>
);

const SocialLinks = ({ className = "", iconSize = 20 }: SocialLinksProps) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href="https://www.linkedin.com/in/yourprofile/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} />
      </a>
      <a
        href="https://github.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="GitHub"
      >
        <Github size={iconSize} />
      </a>
      <a
        href="https://www.flickr.com/photos/yourprofile/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Flickr"
      >
        <FlickrIcon size={iconSize} />
      </a>
    </div>
  );
};

export default SocialLinks;
