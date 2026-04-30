// Campaign: Early Bird Discount
// Window: April 28, 2026 → May 3, 2026 11:59 PM Bangladesh Standard Time (UTC+6)
export const CAMPAIGN_START = new Date("2026-04-27T18:00:00.000Z"); // midnight BST Apr 28
export const CAMPAIGN_END   = new Date("2026-05-03T17:59:00.000Z"); // 11:59 PM BST May 3
export const CAMPAIGN_NAME  = "Early Bird Discount";
export const CAMPAIGN_PRICE = 880;
export const REGULAR_PRICE  = 1500;

export function isCampaignActive(): boolean {
  const now = Date.now();
  return now >= CAMPAIGN_START.getTime() && now < CAMPAIGN_END.getTime();
}

/** Server-safe: returns the correct price based on current time. */
export function getActivePrice(): number {
  return isCampaignActive() ? CAMPAIGN_PRICE : REGULAR_PRICE;
}
