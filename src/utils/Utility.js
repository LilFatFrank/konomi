export const getEndDate = (createdTimestamp, leaseEnd, blockNumber) => {
  const estimatedEndDate = new Date(
    new Date(createdTimestamp).getTime() + 3000 * (leaseEnd - blockNumber)
  );
  return `${estimatedEndDate.getDate()}/${estimatedEndDate.toLocaleString(
    "default",
    { month: "short" }
  )}/${estimatedEndDate.getFullYear()} ${estimatedEndDate.getHours()}:${estimatedEndDate.getMinutes()}`;
};
