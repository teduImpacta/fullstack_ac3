import { Data, ListAll } from "../types";
import { api } from "./api";

export class Service {
  static async list() {
    return await api.get<ListAll>("/op/getall");
  }

  static async getId(id: number) {
    return await api.get<{ data: keyof Data }>(`/op/getbyid/${id}`);
  }
}
