import {
  Users,
  Landmark,
  Home,
  Leaf,
  Zap,
  Bike,
  Search,
  Dice5,
  Gamepad2,
  Share2,
  ShieldCheck,
  Target,
  LayoutGrid,
  Globe,
  Network,
  Compass,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Users,
  Landmark,
  Home,
  Leaf,
  Zap,
  Bike,
  Search,
  Dice5,
  Gamepad2,
  Share2,
  ShieldCheck,
  Target,
  LayoutGrid,
  Globe,
  Network,
  Compass,
};

export function WorldIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Compass;
  return <Icon className={className} aria-hidden="true" />;
}
