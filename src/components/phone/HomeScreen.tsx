import { motion } from "motion/react";
import LockScreenWallpaper from "./LockScreenWallpaper";
import { contactMethods } from "../../types/contact";
import { projects } from "../../types/projects";
import AppIcon from "./AppIcon";
import { useNavigate } from "@tanstack/react-router";

export default function HomeScreen() {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <motion.div
        className="home-screen"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Background */}
        <LockScreenWallpaper />

        <div className="hs-content">
          {/* Main Grid area - Project Apps */}
          <div className="hs-grid">
            {projects.map((project) => (
              <AppIcon
                key={project.id}
                name={project.customer}
                iconName={project.lucideIcon}
                color={project.hexColor}
                onClick={() => navigate({ to: `/projets/${project.id}` })}
              />
            ))}
          </div>

          {/* Bottom Dock */}
          <div className="hs-dock-container">
            <motion.div
              className="hs-dock"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 25, delay: 0.3 }}
            >
              {contactMethods.map((method) => (
                <AppIcon
                  key={method.name}
                  name={method.name || ""}
                  imageUrl={method.logo}
                  color="white"
                  showLabel={false}
                  onClick={() => window.open(method.url, "_blank")}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
