import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer className="">
      <div className="footer bg-base-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="footer-content flex justify-between items-center w-full">
          {/* Icons on the left */}
          <div className="flex gap-4">
            <a
              href="https://github.com/oniids13"
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/oniids/"
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:jdino.baya@gmail.com"
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              <EmailIcon />
            </a>
          </div>

          {/* Text on the right */}
          <div>
            <p className="text-sm">
              Designed by: Jose Dino Abaya {new Date().getFullYear()}. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
