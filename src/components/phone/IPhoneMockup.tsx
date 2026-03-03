import type { ReactNode } from "react";
import "./IPhoneMockup.css";

interface IPhoneMockupProps {
  children?: ReactNode;
}

export default function IPhoneMockup({ children }: IPhoneMockupProps) {
  return (
    <div className="iphone-wrapper" id="iphone-mockup">
      {/* Side buttons - Left */}
      <div className="iphone-btn iphone-btn-silent" />
      <div className="iphone-btn iphone-btn-vol-up" />
      <div className="iphone-btn iphone-btn-vol-down" />

      {/* Side button - Right */}
      <div className="iphone-btn iphone-btn-power" />

      {/* Device frame */}
      <div className="iphone-frame">
        {/* Inner bezel */}
        <div className="iphone-bezel">
          {/* Screen */}
          <div className="iphone-screen">
            {/* Dynamic Island */}
            <div className="iphone-dynamic-island">
              <div className="iphone-di-camera" />
            </div>

            {/* Status bar */}
            <div className="iphone-status-bar">
              <span className="iphone-status-time">9:41</span>
              <div className="iphone-status-icons">
                {/* Signal bars */}
                <svg
                  className="iphone-status-icon"
                  viewBox="0 0 17 12"
                  width="17"
                  height="12"
                >
                  <rect
                    x="0"
                    y="9"
                    width="3"
                    height="3"
                    rx="0.5"
                    fill="currentColor"
                  />
                  <rect
                    x="4.5"
                    y="6"
                    width="3"
                    height="6"
                    rx="0.5"
                    fill="currentColor"
                  />
                  <rect
                    x="9"
                    y="3"
                    width="3"
                    height="9"
                    rx="0.5"
                    fill="currentColor"
                  />
                  <rect
                    x="13.5"
                    y="0"
                    width="3"
                    height="12"
                    rx="0.5"
                    fill="currentColor"
                  />
                </svg>
                {/* WiFi */}
                <svg
                  className="iphone-status-icon"
                  viewBox="0 0 16 12"
                  width="16"
                  height="12"
                >
                  <path
                    d="M8 11.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
                    fill="currentColor"
                  />
                  <path
                    d="M4.94 8.06a4.32 4.32 0 016.12 0"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M2.81 5.94a7.08 7.08 0 0110.38 0"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M.69 3.81a9.84 9.84 0 0114.62 0"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* Content area */}
            <div className="iphone-screen-content">{children}</div>

            {/* Home indicator */}
            <div className="iphone-home-indicator" />
          </div>
        </div>
      </div>
    </div>
  );
}
