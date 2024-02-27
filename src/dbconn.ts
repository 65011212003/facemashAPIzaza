import mysql from "mysql";

export const conn = mysql.createPool({
    host: "http://202.28.34.197/",
    user: "web66_65011212003",
    password: "65011212003@csmsu",
    database: "web66_65011212003",
});