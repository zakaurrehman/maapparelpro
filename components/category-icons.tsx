import {
  Shield,
  Dribbble,
  CircleDot,
  Goal,
  Disc,
  Snowflake,
  Slice,
  Swords,
  Flag,
  Gamepad2,
  Medal,
  Trophy,
  type LucideIcon,
} from "lucide-react";

/** Map category slug -> icon component. Falls back to Trophy. */
const ICONS: Record<string, LucideIcon> = {
  "american-football": Shield,
  basketball: Dribbble,
  baseball: CircleDot,
  soccer: Goal,
  softball: CircleDot,
  volleyball: Disc,
  "ice-hockey": Snowflake,
  lacrosse: Slice,
  rugby: Swords,
  "flag-football": Flag,
  esports: Gamepad2,
  wrestling: Medal,
};

export function iconForCategory(slug: string): LucideIcon {
  return ICONS[slug] ?? Trophy;
}
