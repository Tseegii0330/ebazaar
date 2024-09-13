import { getProducts } from "@/lib/getProducts";
import { cookies } from "next/headers";
import { auth } from "../../auth";

export const getProductsA = async (id: string, isDetail: boolean) => {
  const session = await auth();
  const cookieStore = cookies();
  const tradeshop_id = cookieStore.get("tradeshopId")?.value || null;
  const latitude = cookieStore.get("lang")?.value || null;
  const longitude = cookieStore.get("long")?.value || null;
  const business_type_id = cookieStore.get("bussiness_type_id")?.value || null;

  const token = session?.ebazaar_token;

  if (id && token) {
    const products = await getProducts({
      id,
      token,
      tradeshop_id,
      business_type_id,
      latitude,
      longitude,
      isDetail,
    });

    return products;
  }

  return null;
};
