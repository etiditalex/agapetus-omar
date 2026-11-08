import type { SearchRecord } from "@/types/content";

export function searchRecords(records: SearchRecord[], query: string) {
  const needle = query.trim().toLowerCase();
  if (needle.length < 2) return [];

  return records
    .filter((record) =>
      `${record.title} ${record.excerpt} ${record.keywords} ${record.type}`.toLowerCase().includes(needle),
    )
    .sort((a, b) => {
      const score = (record: SearchRecord) => (record.title.toLowerCase().includes(needle) ? 0 : 1);
      return score(a) - score(b);
    });
}
