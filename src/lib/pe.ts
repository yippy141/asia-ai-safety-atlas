import type { PEActorClass, PEClaim } from "@/types/dossiers";

export const peActorClassLabels: Record<PEActorClass, string> = {
  central_ministry: "Central state",
  provincial_government: "Provincial governments",
  municipal_government: "Municipal governments",
  central_soe: "Central state-owned enterprises",
  local_soe: "Local state-owned enterprises",
  private_national: "National private firms and labs",
  private_local: "Local private firms",
  military_affiliated: "Military-affiliated actors",
  foreign_firm: "Foreign firms",
  financial_state: "State finance",
};

export const peActorClassOrder: PEActorClass[] = [
  "central_ministry",
  "central_soe",
  "financial_state",
  "provincial_government",
  "municipal_government",
  "private_national",
  "private_local",
  "local_soe",
  "foreign_firm",
  "military_affiliated",
];

export function publicPeClaims(claims: PEClaim[]): PEClaim[] {
  return claims.filter((claim) => claim.public_safe_to_show);
}
