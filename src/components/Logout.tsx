import { doLogout } from "@/app/actions";
import { useUser } from "@/context/UserContext";

const Logout = () => {
  const { setUser } = useUser();
  const onSubmit = async () => {
    try {
      const result = await doLogout();
      setUser(null);
    } catch (e) {
      console.error(e);
      throw new Error("Check your Credentials");
    }
  };

  return (
    <form action={onSubmit}>
      <button
        className="inline-flex items-center gap-6 px-[34px] py-2 text-sm text-red-400 dark:text-stone-500"
        type="submit"
      >
        Гарах
      </button>
    </form>
  );
};

export default Logout;
