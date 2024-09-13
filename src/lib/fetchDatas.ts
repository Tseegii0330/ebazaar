import { getSession } from "next-auth/react";

export async function getFetch(path: string) {
  const url = process.env.BASE_API;
  const data = await fetch(`${url}/${path}`);

  return data.json();
}

export const getUserInfo = async () => {
  try {
    const session = await getSession();
    if (!session || !session.ebazaar_token) {
      throw new Error("User is not authenticated or token is missing");
    }

    const ebazaarToken = session.ebazaar_token;

    const response = await fetch(`https://your-api-endpoint/user/profile`, {
      method: "GET",
      headers: {
        Authorization: `ebazaar_token ${ebazaarToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user info");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
};
