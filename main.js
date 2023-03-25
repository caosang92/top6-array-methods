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

//4. REDUCE
// Viết hàm để chuyển đối mảng thành object như bên dưới sử dụng reduce()
// const itemList = [
//   { id: 'key1', value: 'Superman' },
//   { id: 'key2', value: 'Wonder Woman' },
//   { id: 'key3', value: 'Spider man' },
// ];
// 
// is converted to 
// 
// const itemMap = {
//   key1: 'Superman',
//   key2: 'Wonder Woman',
//   key3: 'Spider man'
// };
// 
// to use later as itemMap.key1, O(1)
// instead of look up in itemList with id = key1, 0(n)
const arrayToObject = (itemList) => {
    return itemList.reduce((itemMap, item) => {
        itemMap[item.id] = item.value;
        return itemMap;
    }, {});
};

const itemList = [
    { id: 'key1', value: 'Superman' },
    { id: 'key2', value: 'Wonder Woman' },
    { id: 'key3', value: 'Spider man' },
];
console.log(arrayToObject(itemList));





