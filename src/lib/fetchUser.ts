// services/userService.ts

export const fetchUser = async (token: string | undefined) => {
  const response = await fetch(
    "https://merchapi-dev.ebazaar.mn/api/user/profile",
    {
      headers: {
        ebazaar_token: `${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch user data");
  }

  return response.json();
};
