import type { PersonProfile } from "@/types/interlocutors";

// A person page renders only for records that are public and carry at least
// one role backed by a source record.
export function renderablePeople(people: PersonProfile[]): PersonProfile[] {
  return people.filter(
    (person) =>
      person.public_safe_to_show &&
      person.current_public_roles.some((role) => role.source_ids.length > 0)
  );
}
