import {
  Droplets,
  Fish,
  GraduationCap,
  HeartPulse,
  Landmark,
  MessagesSquare,
  School,
  Shield,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/types/content";

const icons: Record<IconKey, LucideIcon> = {
  users: Users,
  fish: Fish,
  sprout: Sprout,
  graduation: GraduationCap,
  heart: HeartPulse,
  droplets: Droplets,
  shield: Shield,
  landmark: Landmark,
  messages: MessagesSquare,
  school: School,
};

export function ContentIcon({ name, className }: { name: IconKey; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
