import index from "../index.js";
import request from "supertest";


describe("GET/registro", ()=>{
    test("should respond with a 200 status code", async() =>{
        const response = await request(index).get("/registro").send();
        expect(response.statusCode).toBe(200);
       // console.log(response)
    });
    
});
