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

// Lọc filter return trả về đối tượng có giá trị cần tìm kiếm
const filterUser = users.filter((user) => {
    return user.first_name === "Jack" || user.first_name === "Bukayo";
})
console.log({ filterUser })