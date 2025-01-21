import { getCurrentUser } from "@/actions/users"

export const GetMyBids = async () => {
    try {

        const alkj = await getCurrentUser();
        console.log(alkj);
      return {  }
    } catch (error) {
      throw new Error(error)
    }
  }