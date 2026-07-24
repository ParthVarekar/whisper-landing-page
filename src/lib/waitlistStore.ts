import fs from "fs";
import path from "path";

const COUNT_FILE = path.join(process.cwd(), ".waitlist_count.json");
const INITIAL_COUNT = 0;

export function getWaitlistCount(): number {
  try {
    if (fs.existsSync(COUNT_FILE)) {
      const data = fs.readFileSync(COUNT_FILE, "utf-8");
      const parsed = JSON.parse(data);
      if (typeof parsed.count === "number") {
        return parsed.count;
      }
    }
  } catch (err) {
    console.error("Error reading waitlist count:", err);
  }
  return INITIAL_COUNT;
}

export function incrementWaitlistCount(): number {
  const current = getWaitlistCount();
  const next = current + 1;
  try {
    fs.writeFileSync(COUNT_FILE, JSON.stringify({ count: next }), "utf-8");
  } catch (err) {
    console.error("Error writing waitlist count:", err);
  }
  return next;
}
