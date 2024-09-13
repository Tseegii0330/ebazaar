import { getSuppliers } from "@/lib/getSuppliers";
import { auth } from "../../auth";

export const getSuppliersA = async (id: string) => {
  const session = await auth();
  const ebazaar_token = session?.ebazaar_token;
  if (id && ebazaar_token) {
    const suppliers = await getSuppliers(id, ebazaar_token);
    return suppliers;
  }

  return null;
};
