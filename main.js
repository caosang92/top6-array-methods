//filter
const users = [
    {
        id: 1,
        email: 'caosang92@gmail.com',
        first_name: 'Jack',
        last_name: 'Wilshere',
    },
    {
        id: 2,
        email: 'caosang94@gmail.com',
        first_name: 'Xuân',
        last_name: 'Tóc đỏ',
    },
    {
        id: 3,
        email: 'caosang93@gmail.com',
        first_name: 'Gabriel',
        last_name: 'Kaka',
    },
    {
        id: 5,
        email: 'caosang99@gmail.com',
        first_name: 'Arsene',
        last_name: 'Wenger',
    },
    {
        id: 7,
        email: 'caosang2000@gmail.com',
        first_name: 'Bukayo',
        last_name: 'Saka',
    },
]

// 1. Lọc filter:  return về các object có giá trị cần tìm kiếm có first_name là Jack và Bukayo
const filterUser = users.filter((user) => {
    return user.first_name === "Jack" || user.first_name === "Bukayo";
})
console.log({ filterUser });


//2. Lọc Find: giống filter nhưng, return về object đâù tiên thoả mãn
const findUser = users.find((user) => {
    return user.first_name === "Jack" || user.first_name === "Bukayo";
})
console.log({ findUser });

//3. Lọc Map: 
// Mục đích: thay đổi array hiện tại
//Ví dụ 1:
const customUsers = users.map((user) => {
    return user.email;
})
console.log({ customUsers });
// giá trị trả về
//customUsers:Array(5)
// 0: "caosang92@gmail.com"
// 1: "caosang94@gmail.com"
// 2: "caosang93@gmail.com"
// 3:"caosang99@gmail.com"
// 4:"caosang2000@gmail.com"
//ví dụ 2
//Ví dụ 1:
const customUsers2 = users.map((user) => {
    return {
        ...users,
        last_name: `${user.last_name} Edited`
    }
});
console.log({ customUsers2 });
//4. 


