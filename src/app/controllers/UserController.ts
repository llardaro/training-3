const userGet = (req: any, res: any) => {
    return res.json({
        message:
        "get users",
    })
}

const userList = (req: any, res: any) => {
    return res.json({
        message:
        "list users",
    })
}

export default {userGet, userList}