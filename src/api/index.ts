import axios from "axios";

/***
 * necessita criar type para a resposta do axios
 */

export class Api {
  async getUsers() {
    try {
      // faz chamada na api
      const { data, status } = await axios.get(
        "https://swapi.dev/api/planets",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      console.log(JSON.stringify(data));
      console.log("response status is: ", status);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }
}
