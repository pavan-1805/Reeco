export function approveProduct(payload) {
  console.log("payload:", payload);
  return { type: "APPROVE_PRODUCT", payload };
}
export function missingProduct(payload) {
  console.log("payload:", payload);
  return { type: "MISSING_PRODUCT", payload };
}
export function missingUrgentProduct(payload) {
  console.log("payload:", payload);
  return { type: "MISSING_URGENT_PRODUCT", payload };
}
