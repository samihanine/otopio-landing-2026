import * as LucideIcons from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface AppIconProps {
  name: string;
  iconName?: string;
  imageUrl?: string;
  color?: string;
  onClick: () => void;
  showLabel?: boolean;
}

export default function AppIcon({
  name,
  iconName,
  imageUrl,
  color = "var(--color-dark-light)",
  onClick,
  showLabel = true,
}: AppIconProps) {
  // Dynamically resolve the Lucide icon component if provided
  const Icon = iconName ? ((LucideIcons as any)[iconName] as LucideIcon) : null;

  return (
    <button className="app-icon-btn" onClick={onClick}>
      <div className="app-icon-squircle" style={{ backgroundColor: color }}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-contain p-2"
          />
        ) : Icon ? (
          <Icon size={28} strokeWidth={1.5} color="white" />
        ) : (
          <LucideIcons.HelpCircle size={28} strokeWidth={1.5} color="white" />
        )}
      </div>
      {showLabel && <span className="app-icon-label">{name}</span>}
    </button>
  );
}
