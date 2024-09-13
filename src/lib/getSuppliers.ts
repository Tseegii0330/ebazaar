export const getSuppliers = async (id: string, token: string) => {
  const res = await fetch(
    `https://merchapi-dev.ebazaar.mn/api/suppliers/get?tradeshopId=${id}`,
    {
      method: "GET",
      headers: {
        ebazaar_token: `${token}`,
      },
    }
  );

  if (res.ok) return res.json();

  return null;
};
