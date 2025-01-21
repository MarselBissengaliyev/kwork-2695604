import { getCurrentUser } from "@/actions/users"

export const GetMyBids = async () => {
    try {

        const alkj = await getCurrentUser();
      return {  }
    } catch (error) {
      throw new Error(error)
    }
  }