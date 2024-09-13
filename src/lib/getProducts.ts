type Props = {
  tradeshop_id: string | null;
  business_type_id: string | null;
  longitude: string | null;
  latitude: string | null;
  token: string | null;
  id: string;
  isDetail: boolean;
};

export const getProducts = async ({
  id,
  token,
  tradeshop_id,
  business_type_id,
  latitude,
  longitude,
  isDetail,
}: Props) => {
  const url = isDetail
    ? `https://merchapi-dev.ebazaar.mn/api/products/get1/?supplier=${id}&tradeshop_id=${tradeshop_id}&channel_id=${business_type_id}&coordinate=[${longitude},${latitude}]&page=1&limit=36`
    : `https://merchapi-dev.ebazaar.mn/api/products/get1/?supplier=[${id}]&tradeshop_id=${tradeshop_id}&channel_id=${business_type_id}&coordinate=[${longitude},${latitude}]&page=1&limit=36`;
  try {
    if (tradeshop_id) {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          ebazaar_token: `${token}`,
        },
      });

      if (res.ok) return res.json();
    }

    return { error: "check e tradeshop_id" };
  } catch (error: any) {
    throw new Error("error is", error);
  }
};
