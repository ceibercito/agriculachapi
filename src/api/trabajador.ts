import { instance } from "./base.api";

const endpoint = "character";

export const trabajador = {
    getAll: function({page}: {page?: number}){
        return instance.get(endpoint, {params:{
            page
        }})
    }
}