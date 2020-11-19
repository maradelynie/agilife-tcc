
import axios from "axios";

const base = "http://localhost:3001/api";

const api = axios.create({
    baseURL: base,
});

export async function getAuth(data)  {
    const response = await api.post("/authorization",data);
    return response.data

}
export async function getUserData(token)  {
    const response = await api.get("/user/"+token);
    const notifications = await api.get("/notifications");
    const allData = response.data.data
    allData["notifications"] = notifications.data
    return allData
}

export async function updateData(data)  {

    const response = await api.patch("/task",data);
    return response.data
}
export async function getRegister(data)  {
    const response = await api.post("/register",data);
    return response.data

}
export async function getAllContent(contents)  {
    const data = {
        contents,
    }
    const response = await api.post("/content",data);
    return response.data.data
}
export async function getAllUsers()  {
    const response = await api.get("/allUsers");
    return response.data
}
export async function postContent(data)  {
    const response = await api.post("/adm/content",data);
    return response.data
}
export async function getAdmContent(token)  {
    const response = await api.get("/adm/content/"+token);
    return response.data
}
export async function deletContent(id,token)  {
    
    const response = await api.delete("/adm/content/"+id+"/"+token);
    return response.data
}
export async function updateContent(id,data)  {
    
    const response = await api.patch("/adm/content/"+id,data);
    return response.data
}