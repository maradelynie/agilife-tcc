
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
    console.log(notifications.data)
    const allData = response.data.data
    allData["notifications"] = notifications.data
    return allData
}

export async function updateTasks(data,token)  {
    const allData = {
        token,
        tasks:data
    }
    const response = await api.patch("/task",allData);

    return response.data
}

// export async function postRecordApi(data)  {
//     const fullData = data
//     fullData.user = user
//     const response = await api.post(null,fullData);
    
//     return response.data
// }

