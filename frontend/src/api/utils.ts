import { AxiosError } from "axios";
import { toast } from "react-toastify";

export function handleApiErrors(responseError: Error | AxiosError) {
  if (responseError instanceof Error) {
    console.log(responseError.message);
  }

  if (responseError instanceof AxiosError && responseError.response) {
    if (responseError.response.status === 422) {
      console.log(responseError.response.data);
      const details = responseError.response.data.detail;
      console.log(details);
      for (const detail of details) {
        const field = detail.loc[detail.loc.length - 1];
        const message = detail.msg;
        toast.error(`${field}: ${message}`);
      }
    }
  }
}
